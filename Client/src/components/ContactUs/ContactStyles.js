import styled from 'styled-components';


export const ImgSvg =styled.img`

	width: 550px;
	height: 600px;
	


	
`
export const ContainerWrapper=styled.div`
display: flex;
justify-content: space-between;

`
export const ContactTitle=styled.h2`
	text-align: center;
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	line-height: 1.06;
	letter-spacing: 0.4rem;
	margin: auto;
`;
export const Textarea=styled.textarea`
 background: #fff;
 height: 200px;
  border: none;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1.1rem;
`
export const Message=styled.div`
display: flex;
flex-direction: column;
height: 210px;
`
export const Form = styled.form`
margin-top: 100px;
  width: 500px;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem 1.5rem 2.5rem;
  background: orange;
  box-shadow: 0 1px 5px #e10600;
  border-radius: 0 0 40px 40px;
  margin-bottom: 1.5rem;
`;
// stretch the input elements to take the majority of the horizontal space
// display the input elements horizontally
export const Inputs = styled.div`
flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
// display the labels boldy on the red background
export const Label = styled.label`
  font-family: "KoHo", sans-serif;
  font-size: 1.4rem;
  color: #fff;
  margin: 0.5rem 0;
  text-transform: uppercase;
`;
export const Input = styled.input`
  background: #fff;
  border: none;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1.1rem;
`;
// include a round circle and an arrow pointing downwards through pseudo elements
export const Button = styled.button`
  margin: 0 1rem;
  width: 52px;
  height: 52px;
  background: #fff;
  border: none;
  border-radius: 50%;
  position: relative;
  font-size: 0;

  &:before {
    position: absolute;
    content: '';
    top: 25%;
    height: 40%;
    width: 4px;
    left: 50%;
    transform: translateX(-50%);
    background: #e10600;
    transition: all 0.2s ease-out;
  }
  &:after {
    position: absolute;
    content: '';
    top: 65%;
    left: 50%;
    transform: translateX(-50%);
    border-top: 10px solid #e10600;
    border-right: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid transparent;
    transition: all 0.2s ease-out;
  }
  &:hover:before {
    height: 35%;
  }
  &:hover:after {
    top: 60%;
  }
  &:active:before {
    height: 40%;
  }
  &:active:after {
    top: 65%;
  }
`;
