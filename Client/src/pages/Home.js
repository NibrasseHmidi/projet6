import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import Contact from '../components/ContactUs/Contact';
import { Content } from '../components/Content/Content';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import { heroOne, heroTwo, heroThree } from '../data/HeroData';

// Hero Feature Content Carousel

const Home = () => {
	return (
		<>
			<Hero />
				<Carousel />
			<Features />
			
			 <Content {...heroThree} />
		<Contact/>
		</>
	);
};

export default Home;
