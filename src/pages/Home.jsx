import React from 'react'
import Contact from '../elements/Contact'
import Footer from '../elements/Footer'
import Header from '../elements/Header'
import HeroSlider from '../elements/HeroSlider'
import Why from '../elements/Why'

const Home = () => {
	return (
		<div>
			<Header />
			<HeroSlider />
			<Why />
			<Contact />
			<Footer />
		</div>
	)
}

export default Home
