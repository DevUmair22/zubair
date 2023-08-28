import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const sliderData = [
	{
		bgClass: 'bg-hs1',
		title: 'PATIENT ACCESS SERVICES',
		description:
			'This involves activities related to patient registration, insurance verification, scheduling...',
	},
	{
		bgClass: 'bg-hs2',
		title: 'CODING',
		description:
			'Accurate and compliant medical coding is crucial for proper billing and reimbursement.',
	},
	{
		bgClass: 'bg-hs3',
		title: 'CONTRACT MANAGEMENT',
		description:
			'This refers to the management of contracts between healthcare providers and payers.',
	},
	{
		bgClass: 'bg-hs4',
		title: 'HEALTHCARE ANALYTICS',
		description:
			'We utilize healthcare analytics to analyze and interpret data related to revenue cycle management...',
	},
	{
		bgClass: 'bg-hs5',
		title: 'PROFESSIONAL/INSTITUTIONAL BILLING',
		description:
			'It includes handling of billing processes for both professional services (physicians) and institutional services (hospitals)...',
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
