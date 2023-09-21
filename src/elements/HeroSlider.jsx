import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const sliderData = [
	{
		bgClass: 'bg-hs1',
		title: 'Medical Billing Consultancy & Solutions',
		description:
			'Maximize your revenue with our efficient and accurate medical Coding & billing services',
	},
	{
		bgClass: 'bg-hs2',
		title: 'Medical Billing Consultancy & Solutions',
		description:
			'Take the hassle out of medical Coding & billing with our expert team on your side.',
	},
	{
		bgClass: 'bg-hs3',
		title: 'Medical Billing Consultancy & Solutions',
		description:
			'Unlock Your Full Revenue Potential with the Expertise of Our Medical Coding and Billing Services!',
	},
]

const HeroSlider = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 2000,
		autoplay: true,
		autoplaySpeed: 4000,
		cssEase: 'linear',
	}

	return (
		<div>
			<Slider {...settings}>
				{sliderData.map((slide, index) => (
					<div
						key={index}
						className={`bg-cover flex-col items-start justify-center text-white p-6 sm:p-24 h-[90vh] ${slide.bgClass}`}
					>
						<div className="w-full sm:w-3/5 mt-16 sm:mt-40 ml-0 sm:ml-16">
							<h1 className="text-2xl sm:text-5xl font-medium py-2 text-[#f59e0b]">
								MEDBILLMASTER
							</h1>
							<h2 className="text-2xl sm:text-5xl font-bold py-2">
								{slide.title}
							</h2>
							<p className="text-lg sm:text-2xl font-semibold py-2">
								{slide.description}
							</p>
							<div className="flex py-6">
								<span className="rounded-full px-6 text-md font-semibold py-2 bg-sky-500 text-white">
									Learn More
								</span>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default HeroSlider
