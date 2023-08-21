import React from 'react'
import Slider from 'react-slick'
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
				<div className="bg-hs1 bg-cover flex-col text-left text-white p-24 h-[90vh]">
					<div className="w-3/5">
						<h1 className="text-5xl font-medium py-2 text-[#f59e0b]">
							MEDBILLMASTER
						</h1>
						<h2 className="text-5xl font-bold py-2">PATIENT ACCESS SERVICES</h2>
						<p className="text-2xl font-semibold py-2">
							This involves activities related to patient registration,
							insurance verification, scheduling...
						</p>
						<div className="flex py-6">
							{' '}
							<span className=" rounded-full px-6 text-md font-semibold  py-2 bg-sky-500 text-white ">
								Learn More
							</span>
						</div>
					</div>
				</div>
				<div className="bg-hs2 bg-cover flex-col text-left text-white p-24 h-[90vh]">
					<div className="w-3/5">
						<h1 className="text-5xl font-medium py-2 text-[#f59e0b]">
							MEDBILLMASTER
						</h1>
						<h2 className="text-5xl font-bold py-2">CODING</h2>
						<p className="text-2xl font-semibold py-2">
							Accurate and compliant medical coding is crucial for proper
							billing and reimbursement.
						</p>
						<div className="flex py-6">
							{' '}
							<span className=" rounded-full px-6 text-md font-semibold  py-2 bg-sky-500 text-white ">
								Learn More
							</span>
						</div>
					</div>
				</div>
				<div className="bg-hs3 bg-cover flex-col text-left text-white p-24 h-[90vh]">
					<div className="w-3/5">
						<h1 className="text-5xl font-medium py-2 text-[#f59e0b]">
							MEDBILLMASTER
						</h1>
						<h2 className="text-5xl font-bold py-2">CONTRACT MANAGEMENT</h2>
						<p className="text-2xl font-semibold py-2">
							This refers to the management of contracts between healthcare
							providers and payers
						</p>
						<div className="flex py-6">
							{' '}
							<span className=" rounded-full px-6 text-md font-semibold  py-2 bg-sky-500 text-white ">
								Learn More
							</span>
						</div>
					</div>
				</div>
				<div className="bg-hs4 bg-cover flex-col text-left text-white p-24 h-[90vh]">
					<div className="w-3/5">
						<h1 className="text-5xl font-medium py-2 text-[#f59e0b]">
							MEDBILLMASTER
						</h1>
						<h2 className="text-5xl font-bold py-2">HEALTHCARE ANALYTICS</h2>
						<p className="text-2xl font-semibold py-2">
							We utilize healthcare analytics to analyze and interpret data
							related to revenue cycle management...
						</p>
						<div className="flex py-6">
							{' '}
							<span className=" rounded-full px-6 text-md font-semibold  py-2 bg-sky-500 text-white ">
								Learn More
							</span>
						</div>
					</div>
				</div>
				<div className="bg-hs5 bg-cover flex-col text-left text-white p-24 h-[90vh]">
					<div className="w-3/5">
						<h1 className="text-5xl font-medium py-2 text-[#f59e0b]">
							MEDBILLMASTER
						</h1>
						<h2 className="text-5xl font-bold py-2">
							PROFESSIONAL/ INSTITUTIONAL BILLING
						</h2>
						<p className="text-2xl font-semibold py-2">
							It includes handling of billing processes for both professional
							services (physicians) and institutional services (hospitals)...
						</p>
						<div className="flex py-6">
							{' '}
							<span className=" rounded-full px-6 text-md font-semibold  py-2 bg-sky-500 text-white ">
								Learn More
							</span>
						</div>
					</div>
				</div>
			</Slider>
		</div>
	)
}

export default HeroSlider
