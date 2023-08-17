import React from 'react'
import Contact from '../elements/Contact'
import Faq from '../elements/Faq'
import Footer from '../elements/Footer'
import Header from '../elements/Header'
import HeroSlider from '../elements/HeroSlider'
import Testimonials from '../elements/Testimonials'
import Why from '../elements/Why'
const Home = () => {
	return (
		<div>
			<Header />
			<HeroSlider />
			<Why />
			<Faq />
			<Testimonials />
			<Contact />
			<Footer />
		</div>
	)
}

export default Home
