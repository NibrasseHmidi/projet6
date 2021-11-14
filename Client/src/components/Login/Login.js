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
} from "./LoginStyles";
import { Container } from "../../globalStyles";
import validateForm from "./validateForm";
import { loginSvg } from "../../data/FormData";
import { ImgSvg } from "./LoginStyles";
import { useDispatch} from "react-redux";
import { login } from "../../JS/actions/authActions";
import {  useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();
   const dispatch = useDispatch();
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

 
  const handleSubmit = (e) => {
    e.preventDefault();
    //login

    dispatch(login({email, password},history));
 // profil push




    const resultError = validateForm({ email, password });

    if (resultError !== null) {
      setError(resultError);
      return;
    }

    setEmail("");
    setPassword("");

    setError(null);
    setSuccess("Application was submitted!");
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };
  const LoginData = [
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
  ];
  return (
    <FormSection>
      <ImgSvg src={loginSvg.img} alt="" />
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Login</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
              {LoginData.map((el, index) => (
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

              <FormButton type="submit">Login</FormButton>



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

export default Login;