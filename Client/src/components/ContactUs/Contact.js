import React from 'react'
import emailjs from 'emailjs-com'
import { ContactSvg } from '../../data/FormData';
import { Container} from '../../globalStyles';
import { Button, ContactTitle, ContainerWrapper, Form, ImgSvg, Input, Inputs, Label, Message, Textarea } from './ContactStyles';
const Contact = () => {
function sendEmail(e){
  e.preventDefault();


  emailjs.sendForm('service_obs3aok',
  'template_2505dtv',
  e.target,
  "user_xeg6LlVKQ8a6z2KLHIQAK").then(res=>{
console.log(res);

  }).catch(err=> console.log(err)
  );
}

    return (
<Container>
       <ContactTitle>Contact Us</ContactTitle>
       <ContainerWrapper>
       
         <ImgSvg src={ContactSvg.img} alt="" />
       <Form className="AppInput" onSubmit={sendEmail} >
      <Inputs>
       <React.Fragment>
          <Label>Name</Label>
          <Input type="text"  name="name"  placeholder="name" required />
        </React.Fragment>
        <React.Fragment>
          <Label>E-mail Address</Label>
          <Input type="email"  name="user_email"  placeholder="E-mail" required />
        </React.Fragment>
       
        <Message>
          <Label>Message*</Label>
          <Textarea required type="text" name="message" id="update" placeholder="Votre Message"  />
        </Message>
      </Inputs>
      <Button type="submit"  value="Submit">Send update</Button>
    </Form>
       </ContainerWrapper>
      </Container>
    )
}

export default Contact
