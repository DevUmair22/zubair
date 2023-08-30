import React from 'react'
import Footer from '../elements/Footer'
import Header from '../elements/Header'
import pic1 from '../images/about1.jpeg'
import pic2 from '../images/about2.jpeg'
import pic3 from '../images/about3.jpeg'
import pic4 from '../images/about4.jpeg'

const About = () => {
	return (
		<div>
			<Header />
			<div className="flex">
				<div className="mx-auto">
					<h1 className="text-4xl font-bold text-gray-800 px-24 py-4">
						About Us
					</h1>
					<div className="flex flex-wrap text-md md:text-xl">
						<div className="w-full flex flex-col md:flex-row py-8 px-4 md:px-16 ">
							<div className="w-full md:w-1/2 px-1 md:px-4">
								<img src={pic1} className="rounded-xl w-full " alt="" />
							</div>
							<div className="w-full md:w-1/2 py-2">
								<h1 className="text-2xl py-4 font-semibold"> VISION </h1>
								“To become one of the most trusted and efficient healthcare
								service partner”
								<h1 className="text-2xl py-4 font-semibold">MISSION</h1>
								"To provide the most trustworthy, smart and efficient medical
								billing and recovery solutions to our valued clients in the most
								secure and confidential manner."
							</div>
						</div>
						<div className="w-full flex flex-col md:flex-row py-8 px-4 md:px-16">
							<div className="w-full md:w-1/2 py-2">
								<p>
									Medbillmaster is a trusted and well-reputed medical billing
									company with a decent client base. It offers comprehensive and
									advanced Medical Billing services and solutions to healthcare
									providers across the United States of America.. Our solutions
									are designed to meet the diverse needs of our clients and
									provide them with a seamless and technologically advanced
									billing experience. Medbillmaster excels at staying updated on
									the constantly evolving regulations and insurance
									reimbursement policies. This dedication enables us to
									efficiently manage claims and ensure prompt reimbursement for
									our valued clients.
								</p>
							</div>
							<div className="w-full md:w-1/2 px-1 md:px-4 order-first md:order-none">
								<img src={pic2} className="rounded-xl" alt="" />
							</div>
						</div>
						<div className="w-full flex flex-col md:flex-row py-8 px-4 md:px-16">
							<div className="w-full md:w-1/2 px-1 md:px-4">
								<img src={pic3} className="rounded-xl" alt="" />
							</div>{' '}
							<div className="w-full md:w-1/2 py-2">
								<p>
									In today's competitive business environment, Medbillmater
									understands the imperative for healthcare practitioners and
									organizations to enhance clinical workflows, increase
									profitability, enhance patient experiences, and reduce
									operational costs. By addressing these needs, we help our
									clients remain at the forefront of the industry and achieve
									sustained successes. Throughout our journey to growth, we have
									diligently maintained our commitment to excellence through
									personalized attention and dedicated service, which still
									remains the primary driving force behind our sustained
									success. It has been observed that insurance companies tend to
									evade or unnecessarily delay claim payments on the assumption
									that the majority of offices will not thoroughly investigate
									and follow up on delays and denials. We at Medbillmaster
									ensure that there are no delays and denials and all cases are
									followed through professionally and consistently relieving our
									clients to focus their energies on areas of professional
									excellence and patient care.
								</p>
							</div>
						</div>
						<div className="w-full flex flex-col md:flex-row py-8 px-4 md:px-16">
							<div className="w-full md:w-1/2 py-2">
								<p>
									Our primary goal is to maximize revenue while minimizing
									costs. This we achieve through the utilization of advanced
									technology and streamlined billing practices. Given the
									increasingly intricate nature of health insurance and the
									adherence to HIPAA guidelines, it has become essential for
									medical practices to have experienced billing specialists.
								</p>
							</div>
							<div className="w-full md:w-1/2 px-1 md:px-4 order-first md:order-none">
								<img src={pic4} className="rounded-xl" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default About
