import React, { useState } from "react";
import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormLabel,
  FormInputRow,
  Textarea,
  FormMessage,
  FormButton,
  FormTitle,
  ImgSvg,
  Select,
  Option,
  SelectItem,
  InputFile,
} from "./AddStyles";
import { addproduct } from "../../JS/actions/annonceActions";
import { Container } from "../../globalStyles";
import validateForm from "./validateAdd";
import { addSvg } from "../../data/FormData";
import { useDispatch } from "react-redux";

const Add = () => {

    const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [numero, setNumero] = useState("");
  const [address, setAddress] = useState("");
  const [tarifJ, setTarifJ] = useState("");
  const [tarifS, setTarifS] = useState("");
  const [tarifM, setTarifM] = useState("");
  const [caution, setCaution] = useState("");
  const [message, setMessage] = useState("");
  const [ville, setVille] = useState("");
  const [pic,setPic]=useState("");
  
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
const [formData,setFormData]=useState("")

const upload =({ target:{files}})=>{

  let data = new FormData()
  data.append('image',files[0])
  setFormData(data)
}
  
  const handleSubmit = (e) => {
    e.preventDefault();
dispatch(
      addproduct({name,numero,address,tarifJ,tarifS,tarifM,caution,message,ville,category,pic,
      })
    );


    const resultError = validateForm({
      name,
      numero,
      address,
      tarifJ,
      tarifS,
      tarifM,
      caution,
      message,
      ville,
      category,
      pic
    });

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    setName("");
    setNumero("");
    setAddress("");
    setTarifJ("");
    setTarifS("");
    setTarifM("");
    setCaution("");
    setMessage("");
    setCategory("");
setVille("");
setPic("")
    setError(null);
    setSuccess("Ajouter avec succès!");
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };



  const AddData = [
    {
      label: "Name de product",
      value: name,
      onChange: (e) => setName(e.target.value),
      type: "text",
    },

    {
      label: "Numéro du Téléphone",
      value: numero,
      onChange: (e) => setNumero(e.target.value),
      type: "number",
    },
    {
      label: "Address",
      value: address,
      onChange: (e) => setAddress(e.target.value),
      type: "text",
    },
    {
      label: "Tarif par Jour",
      value: tarifJ,
      onChange: (e) => setTarifJ(e.target.value),
      type: "number",
    },
    {
      label: "Tarif par Semaine",
      value: tarifS,
      onChange: (e) => setTarifS(e.target.value),
      type: "number",
    },
    {
      label: "Tarif par Moin",
      value: tarifM,
      onChange: (e) => setTarifM(e.target.value),
      type: "number",
    },
    {
      label: "Caution",
      value: caution,
      onChange: (e) => setCaution(e.target.value),
      type: "number",
    },
  ];
  return (
    <FormSection>
      <ImgSvg src={addSvg.img} alt="" />
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Ajouter un annonce</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
              {AddData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>

                  <FormInput
                    type={el.type}
                    placeholder={`Entez Votre ${el.label.toLocaleLowerCase()}`}
                    value={el.value}
                    onChange={el.onChange}
                  />
                </FormInputRow>
              ))}
              <SelectItem>
                <Select value={ville} onChange={(e) => setVille(e.target.value)} name="ville">
                   <Option >Ville</Option>
                  <Option>Ariana</Option>
                  <Option>Béja</Option>
                    <Option>Ben Arous</Option>
                      <Option>Bizerte</Option>
                        <Option>Gabes</Option>
                          <Option>Gafsa</Option>
                            <Option>Jendouba</Option>
                              <Option>Kairouan</Option>
                                <Option>Kasserine</Option>
                                  <Option>Kebili</Option>
                                    <Option>La Manouba</Option>
                                      <Option>Le Kef</Option>
                                        <Option>Mahdia</Option>
                                          <Option>Médenine</Option>
                                            <Option>Monastir</Option>
                                              <Option>Nabeul</Option>
                                                <Option>Sfax</Option>
                                                  <Option>Sidi Bouzid</Option>
                                                    <Option>Siliana</Option>
                                                      <Option>Sousse</Option>
                                                        <Option>Tataouine</Option>
                                                          <Option>Tozeur</Option>
                                                            <Option>Tunis</Option>
                                                              <Option>Zaghouan</Option>
                </Select>
                <Select value={category} onChange={(e) => setCategory(e.target.value)} name="category">
                  <Option >Tous les Catégories</Option>
                  <Option>Véhicules</Option>
                   <Option>pour la maison et jardin</Option>
                    <Option>Emploi et Services</Option>
                     <Option>Entreprises</Option>
                      <Option>Informatique et Multimedia</Option>
                       <Option>Emploi et Services</Option>
                       <Option>Entreprises</Option>
                       <Option>Habillement et Bien Etre</Option>
                       <Option>Loisirs</Option>
                       <Option>AUtres</Option>
                </Select>
              </SelectItem>
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Entez Votre Description"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              >
                {" "}
              </Textarea>

              <InputFile accept="image/*" multiple
             
            onChange={upload}
              type="file" 
              />

              <FormButton type="submit">Ajouter</FormButton>
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

export default Add;
