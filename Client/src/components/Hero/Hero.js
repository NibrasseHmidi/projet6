import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/d.mp4" autoPlay muted loop />
			<Container>
				<MainHeading>1 ere site web de location</MainHeading>
				<HeroText>
					Vous cherchez un professionnel de la location?
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
						<Button>Désposer une annonce</Button>
					</Link>
					<HeroButton>Find More</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
