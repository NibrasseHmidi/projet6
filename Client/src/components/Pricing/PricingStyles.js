import styled from 'styled-components';

export const PricingSection = styled.div`
	padding: 160px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #101522;
`;

export const StyledUl = styled.ul`
    list-style-type: none;
    margin: 0;
    overflow: hidden;
    background-color: #333;
    padding: 0px;
    background-color: black;
    width: 170px;
    color: white;
    font-weight: bold;
`;

export const StyledLi = styled.li`
cursor: pointer;
    float: left;
    height: 100%;
    padding: 10px;
 
`;

export const DropDownContent = styled.div`
    display: none;
    position: absolute;
    min-width: 160px;
    z-index: 1;
`;

export const DropDownLi = styled(StyledLi)`
    display: inline-block;
    &:hover ${DropDownContent} {
        display: block;
    }
`;

export const StyledA = styled.a`
    display: inline-block;
    text-align: center;
    text-decoration: none;
`;

export const SubA = styled(StyledA)`
    text-decoration: none;
    display: block;
    text-align: left;
    background-color: lightblue;
    padding: 10px;
`;
export const CardProfil=styled.div`
display: flex;
  width: 900px;
height: 150px;
  position: absolute;
  left: -370px;
 margin-top: 20px;
  background: orange;
  padding: 10px;
  border-radius: 10px;
  font-size: 13pt;
  text-decoration: none;
  color: #fff;
  

`
export const PricingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;

	@media screen and (max-width: 960px) {
		margin: 0 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;
export const DivcardProfil = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;


`
export const FlexcardProfil=styled.div`
display: flex;

`
export const Profilp= styled.p`
margin:0 30px;
text-align: justify;
`
export const Profillabel=styled.span`
font-weight: bold;




`
export const PricingContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-flow: wrap;
  margin-top:180px ;
	> div {
		margin: 0.7rem;
	}

	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		> div {
			width: 90%;
		}
	}
`;

export const PricingCard = styled.div`
	&:hover {
		transform: scale(1.06);
		transition: all 0.3s ease-out;
	}
`;

export const PricingCardInfo = styled.div`
	background: #242424;
	box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
	width: 280px;
	text-decoration: none;
	border-radius: 4px;
	height: 100%;

	display: flex;
	flex-direction: column;
	padding: 24px;
	color: #fff;
	margin: auto;
	> button {
		margin-top: auto;

		&:hover {
			color: black;
			background: white;
			transition: background 0.3s ease;
		}
	}

	@media screen and (max-width: 768px) {
		width: 90%;

		&:hover {
			transform: none;
		}
	}
`;

export const PricingCardPlan = styled.h3`
	margin-bottom: 5px;
	font-size: 2rem;
`;

export const PricingCardCost = styled.h4`
	font-size: 1.2rem;
`;

export const PricingCardText = styled.p`
	font-size: 1.1rem;
	margin: 0.4rem 0 1.3rem;
	color: #a9b3c1;
`;
export const PricingImg=styled.img`
width:200px
`
export const PricingCardFeatures = styled.ul`
	margin: 16px 0 32px;
	list-style: none;
	display: flex;
	flex-direction: column;
	color: #a9b3c1;
`;

export const PricingCardFeature = styled.li`
	margin-bottom: 1rem;
	display: flex;
	font-size: 0.94rem;

	&:before {
		content: '🎧';
		margin-right: 0.4rem;
	}
`;


export const ProfileBanner = styled.div`

width:900px
`

export const ImgProf = styled.img`height: 250px;
  width: 100%;

  border-radius: 10px;`

  export const LabelConv= styled.label`
  
  `
  export const FigureCov=styled.figure`
 
  `
  export const FigCaption=styled.figcaption`
 cursor: pointer;
  position: absolute;
  top: 0px;
  width: inherit;
  height: inherit;
  border-radius: 100%;

  background-color: rgba(0, 0, 0, 0);
  transition: all ease-in-out 0.3s;  
  `
  export const Span=styled.span`
    margin-top: 32.5px;
  width: 70px;
  height: 70px;
  color: orange;
  `
export const PictureProfile=styled.div`
height: 150px;
  width: 160px;
  border-radius: 50%;
  margin: 0 auto;
  position: relative;
  top: -90px;
  text-align: center;
`

export const Editp = styled.span`
cursor: pointer;
  width: 160px;
  position: absolute;
  left: -180px;
  top: 70px;
  background: orange;
  padding: 10px;
  border-radius: 10px;
  font-size: 13pt;
  text-decoration: none;
  color: #fff;
  transition: 0.5s;
`
export const Addb = styled.span`
cursor: pointer;
width: 160px;

  position: absolute;
  margin-left: 225px;
  top: 70px;
  background: orange;
  padding: 10px;
  border-radius: 10px;
  font-size: 13pt;
  text-decoration: none;
  color: #fff;
  transition: 0.5s;`

  export const ImgAvatar = styled.img`
  position: relative;

  width: 200px;
  height: 200px;
  box-sizing: border-box;
  border-radius: 100%;
  border: 2px solid transparent;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);
  transition: all ease-in-out 0.3s;
  `