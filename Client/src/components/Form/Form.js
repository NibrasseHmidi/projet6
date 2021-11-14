import React, { useState } from "react";

import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormLabel,
  FormInputRow,
  FormMessage,
  FormButton,
  FormTitle,
  ImgSvg,
} from "./FormStyles";
import { Container } from "../../globalStyles";
import validateForm from "./validateForm";
import { registerSvg } from "../../data/FormData";
import { useDispatch } from "react-redux";
import { register } from "../../JS/actions/authActions";
import { useHistory } from "react-router-dom";


const Form = () => {
    const history = useHistory();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmpassword] = useState("");
   const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
 
  const [picMessage, setPicMessage] = useState(null);
 
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
 const dispatch = useDispatch();



  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(register({name,lastname,email,password,pic},history));



      
    const resultError = validateForm({ name, email, password,confirmPassword });

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    setName("");
    setLastname("");
    setEmail("");
    setPassword("");
  setConfirmpassword("");
    setError(null);
    setSuccess("Application was submitted!");
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

const postDetails = (pics) => {
    if (
      pics ===
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    ) {
      return setPicMessage("Please Select an Image");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "locationnibrasse");
      data.append("cloud_name", "locationnibrasse");
      fetch(" https://api.cloudinary.com/v1_1/locationnibrasse/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };


  const formRegister = [
    {
      label: "Name",
      value: name,
      onChange: (e) => setName(e.target.value),
      type: "text",
    },
      {
      label: "Lastname",
      value: lastname,
      onChange: (e) => setLastname(e.target.value),
      type: "text",
    },
    {
      label: "Email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      type: "email",
    },
    {
      label: "Password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
      type: "password",
    },
    {
      label: "Confirm Password",
      value: confirmPassword,
      onChange: (e) => setConfirmpassword(e.target.value),
      type: "password",
    },
  ];
  return (
    <FormSection>
      <ImgSvg src={registerSvg.img} alt="" />
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Sign up</FormTitle>
            <FormWrapper  onSubmit={handleSubmit}>
              {formRegister.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>
                  <FormInput
                    type={el.type}
                    placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
                    value={el.value}
                    onChange={el.onChange}
                  />
                </FormInputRow>
              ))}
  <FormInputRow >
  
        {picMessage && (
            
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
                error
              >
                {picMessage}
              </FormMessage>
            
          )}
                  <FormLabel>Profile Picture</FormLabel>
                  <FormInput
                   accept="image/*"
               onChange={(e) => postDetails(e.target.files[0])}
             name="file"
              type="file"
              
                  />
                      

                </FormInputRow>


      
         
              <FormButton type="submit">Signup</FormButton>
            </FormWrapper>
            {error && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
                error
              >
                {error}
              </FormMessage>
            )}
            {success && (
              <FormMessage
                variants={messageVariants}
                initial="hidden"
                animate="animate"
              >
                {success}
              </FormMessage>
            )}
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
};

export default Form;
