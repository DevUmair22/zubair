import React from 'react'
import { BiSolidFlask } from 'react-icons/bi'
import { FaUserDoctor } from 'react-icons/fa6'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { SlBadge } from 'react-icons/sl'
import Contact from '../elements/Contact'
import Counter from '../elements/Counter'
import Faq from '../elements/Faq'
import Footer from '../elements/Footer'
import Header from '../elements/Header'
import HeroSlider from '../elements/HeroSlider'
import Hipaa from '../elements/Hipaa'
import Services from '../elements/Services'
import Testimonials from '../elements/Testimonials'
import Why from '../elements/Why'

const Home = () => {
	const counterData = [
		{
			icon: <FaUserDoctor size="1.5rem" />,
			title: 'Satisfied Clients',
			targetValue: 150,
		},
		{
			icon: <HiOutlineBuildingOffice2 size="1.5rem" />,
			title: 'team Members',
			targetValue: 18,
		},
		{
			icon: <BiSolidFlask size="1.5rem" />,
			title: 'Successful Projects',
			targetValue: 145,
		},
		{
			icon: <SlBadge size="1.5rem" />,
			title: 'Satisfaction Rate',
			targetValue: 99,
		},
	]
	return (
		<div>
			<Header />
			<HeroSlider />
			<Why />
			<Hipaa />
			<div className="flex-col flex w-full sm:flex-row justify-center items-center bg-[#f1f7fd] py-2 sm:py-16 px-8 sm:px-16">
				{counterData.map((counter, index) => (
					<Counter
						key={index}
						icon={counter.icon}
						title={counter.title}
						targetValue={counter.targetValue}
					/>
				))}
			</div>
			<Services />
			<Faq />
			<Testimonials />
			<Contact />
			<Footer />
		</div>
	)
}

export default Home
