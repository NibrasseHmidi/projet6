import React, { useEffect} from "react";
import { Button, Heading, TextWrapper } from "../../globalStyles";
import { IconContext } from "react-icons/lib";
import {  useHistory } from "react-router-dom";
import {
  PricingSection,
  PricingWrapper,
  PricingContainer,
  PricingCardInfo,
  PricingCardPlan,
  PricingCardCost,
  PricingCardFeatures,
  PricingCardText,
  PricingCardFeature,
  PricingCard,
  ProfileBanner,
  PricingImg,
  ImgProf,
  LabelConv,
  FigureCov,
  FigCaption,
  PictureProfile,
  Span,
  Addb,
  Editp,
  ImgAvatar,
  CardProfil,
  DivcardProfil,Profilp,Profillabel,FlexcardProfil
} from "./PricingStyles";
import { pricingData } from "../../data/PricingData";
import {  AiFillFolderAdd, AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUser } from "../../JS/actions/authActions";

function Pricing() {
  const dispatch = useDispatch();
const history = useHistory()
  //get user profile

  const userLogin = useSelector((state) => state.authReducer.user);
  
  const loading = useSelector((state) => state.authReducer.isLoading);
  
  
  useEffect(() => {
   dispatch(getAuthUser())
   }, [])

    if (loading) {
    return <h1> Loaading ......</h1>;
  }  

 
 
  return (
 
       

    <IconContext.Provider value={{ color: "#a9b3c1", size: "1rem" }}>
      <PricingSection id="pricing">
     <PricingWrapper>
          <Heading> Welcome {userLogin.name}</Heading>

          <TextWrapper
            mb="1.4rem"
            weight="600"
            size="1.1rem"
            color="white"
            align="center"
          >
            Create, maintain and store your data with Delta.
          </TextWrapper>

          <ProfileBanner>
            <ImgProf
              src="https://fbcouv.com/wp-content/uploads/2015/09/couverture-facebook-chat-poisson-repas.jpg"
              alt=""
            />
            <LabelConv>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none", cursor: "pointer" }}
              />
              <FigureCov>
                <FigCaption>
                  
                </FigCaption>
              </FigureCov>
            </LabelConv>
          </ProfileBanner>
          <PictureProfile>
            <Editp>
              Edit Profile <AiFillEdit />
            </Editp>
            <Addb>
              {" "}
              Add Product <AiFillFolderAdd />
            </Addb>
            <ImgAvatar
              src={userLogin.pic}
              alt="avatar"
            />

            <CardProfil>
        
            <DivcardProfil>
                <FlexcardProfil>
            <Profillabel>Name:</Profillabel>
            <Profilp>{userLogin.name}</Profilp>
</FlexcardProfil>
         <FlexcardProfil>
            <Profillabel>LastName:</Profillabel>
            <Profilp>{userLogin.lastname}</Profilp>
</FlexcardProfil>
  <FlexcardProfil>
                <Profillabel>E-mail:</Profillabel>
            <Profilp>{userLogin.email}</Profilp>
            </FlexcardProfil>
            </DivcardProfil>
            
            </CardProfil>
          </PictureProfile>

          <PricingContainer>
            {pricingData.map((card, index) => (
              <PricingCard key={index}>
                <PricingCardInfo>
                  <PricingCardPlan>{card.title}</PricingCardPlan>
                  <PricingCardCost>{card.price}</PricingCardCost>
                  <PricingCardText>{card.description}</PricingCardText>
                  <PricingImg src={card.img} />
                  <PricingCardFeatures>
                    {card.features.map((feature, index) => (
                      <PricingCardFeature key={index}>
                        {feature}
                      </PricingCardFeature>
                    ))}
                  </PricingCardFeatures>
                  <Button>Get Started</Button>
                </PricingCardInfo>
              </PricingCard>
            ))}
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
