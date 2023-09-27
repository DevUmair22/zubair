import Footer from '../elements/Footer'
import Header from '../elements/Header'

import { Box, Paper, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import img1 from '../images/s1.jpeg'
import img2 from '../images/s2.jpeg'
import img3 from '../images/s3.jpeg'
import img4 from '../images/s4.jpeg'
import img5 from '../images/s5.jpeg'
import img6 from '../images/s6.jpeg'

const Services = () => {
	const [selectedTab, setSelectedTab] = useState(0)

	const handleChangeTab = (event, newValue) => {
		setSelectedTab(newValue)
	}

	const tabContents = [
		{
			heading: '			Medical Billing and Coding Services',
			content: (
				<div className="flex flex-wrap">
					<div className="w-6/12">
						<h1 className="text-2xl py-3 font-semibold text-[#2c4964]">
							Medical Billing and Coding Services
						</h1>
						<p className="text-gray-600 text-lg">
							At MBCS, we recognize the intricate and time-consuming nature of
							medical billing and coding. Therefore, we offer comprehensive
							medical billing and coding services to healthcare providers across
							the United States. Our highly trained and experienced
							professionals are committed to ensuring accurate and timely
							reimbursements for the services provided. Medical billing and
							coding are essential components of healthcare administration,
							playing a critical role in maintaining high-quality patient care.
							With years of experience in delivering top-notch medical billing
							and coding services, we are dedicated to helping clients maximize
							reimbursements while minimizing administrative burdens.
						</p>
					</div>

					<img src={img1} alt="Tab 2" className="w-6/12 h-96" />
				</div>
			),
		},
		{
			heading: 'Credentialing & Physician Contracting',
			content: (
				<div className="flex flex-wrap">
					<div className="w-6/12">
						<h1 className="text-2xl py-3 font-semibold text-[#2c4964]">
							Credentialing & Physician Contracting
						</h1>
						<p className="text-gray-600 text-lg">
							Credentialing and physician contracting are pivotal for healthcare
							providers, ensuring compliance with insurance carrier requirements
							and the ability to offer services to patients. The credentialing
							process, however, can be complex and time-consuming, with numerous
							documents and requirements. MBCS offers top-tier credentialing and
							physician contracting services to help providers navigate these
							challenges, allowing them to focus on delivering quality
							healthcare services. Our team of experts is well- versed in
							insurance carriers' requirements and has established relationships
							with major healthcare carriers, ensuring efficient navigation of
							the credentialing and contracting process.
						</p>
					</div>

					<img src={img2} alt="Tab 2" className="w-6/12 h-96" />
				</div>
			),
		},
		{
			heading: '			Contracting & Pricing',
			content: (
				<div className="flex flex-wrap">
					<div className="w-6/12">
						<h1 className="text-2xl py-3 font-semibold text-[#2c4964]">
							Contracting & Pricing
						</h1>
						<p className="text-gray-600 text-lg">
							Managing contracting and pricing for your practice can be
							time-consuming and complex. Our team of professionals maintains
							expertise in provider credentialing and stays updated with
							industry changes, trends, and payer requirements, ensuring a
							hassle-free experience. We handle the contracting process from
							start to finish, including document collection, completing the
							credentialing process, submitting applications to payers, and
							responding to requests for corrections or additional information
							from payers.
						</p>
					</div>

					<img src={img3} alt="Tab 2" className="w-6/12 h-96" />
				</div>
			),
		},
		{
			heading: '		Revenue Cycle Management',
			content: (
				<div className="flex flex-wrap">
					<div className="w-6/12">
						<h1 className="text-2xl py-3 font-semibold text-[#2c4964]">
							Revenue Cycle Management
						</h1>
						<p className="text-gray-600 text-lg">
							Effective revenue cycle management is vital for maintaining a
							smooth and efficient administrative experience while improving
							revenues. MBCS offers high-quality and cost-effective revenue
							cycle management (RCM) solutions. Our comprehensive RCM services
							provide numerous benefits, including HIPAA compliance, potential
							cost savings of up to 60%, and stringent security policies. We
							specialize in collecting payments, increasing revenue from
							underpaid claims, and following up with insurance companies for
							quick settlements. With our expertise, you can improve collection
							ratios, increase payment probabilities, and boost revenues.
						</p>
					</div>

					<img src={img4} alt="Tab 2" className="w-6/12 h-96" />
				</div>
			),
		},
		{
			heading: '	Account Receivable & Denial Management ',
			content: (
				<div className="flex flex-wrap">
					<div className="w-6/12">
						<h1 className="text-2xl py-3 font-semibold text-[#2c4964]">
							Account Receivable & Denial Management Services
						</h1>
						<p className="text-gray-600 text-lg">
							Effective account receivable and denial management are crucial for
							medical practice success. Our team is dedicated to providing the
							highest level of service by carefully attending to detail, strong
							communication skills, and a proactive approach to identifying and
							addressing issues. We stay updated with industry trends to ensure
							your medical billing processes run smoothly and efficiently,
							offering you peace of mind that your billing processes are handled
							efficiently and effectively.
						</p>
					</div>

					<img src={img5} alt="Tab 2" className="w-6/12 h-96" />
				</div>
			),
		},
		{
			heading: '			Billing & Coding Audit',
			content: (
				<div className="flex flex-wrap">
					<div className="w-6/12">
						<h1 className="text-2xl py-3 font-semibold text-[#2c4964]">
							Billing & Coding Audit
						</h1>
						<p className="text-gray-600 text-lg">
							Regular audits of medical billing and coding processes are
							essential for accuracy and efficiency in the revenue cycle. Our
							audit services help practices mitigate risk, optimize revenue, and
							improve overall performance. We not only identify and address
							issues but also serve as an educational tool to enhance
							understanding of medical coding and billing complexities. We
							review coding quality to ensure accuracy and identify areas of
							strength and weakness, helping practices establish a quality
							assurance process.
						</p>
					</div>

					<img src={img6} alt="Tab 2" className="w-6/12 h-96" />
				</div>
			),
		},
		{
			heading: '			Verification of Benefits & Prior Authorization',
			content: (
				<div className="flex flex-wrap">
					<div className="w-6/12">
						<h1 className="text-2xl py-3 font-semibold text-[#2c4964]">
							Verification of Benefits & Prior Authorization
						</h1>
						<p className="text-gray-600 text-lg">
							We understand the importance of verifying patient eligibility and
							benefits and offer a comprehensive service to handle this process.
							Our team ensures timely payments and a stable revenue cycle for
							healthcare providers. Prior Authorization Services help providers
							obtain approval from a patient’s insurance provider before
							specific services or procedures, avoiding denials and payment
							delays. Our comprehensive service streamlines the process,
							preventing unexpected financial surprises for patients.
						</p>
					</div>

					<img src={img6} alt="Tab 2" className="w-6/12 h-96" />
				</div>
			),
		},
		{
			heading: '		 24/7 Contact Center& Patient Scheduling',
			content: (
				<div className="flex flex-wrap">
					<div className="w-6/12">
						<h1 className="text-2xl py-3 font-semibold text-[#2c4964]">
							Contact Center 24/7 & Patient Scheduling Management
						</h1>
						<p className="text-gray-600 text-lg">
							At MBCS, we prioritize efficient and effective contact center
							services and patient scheduling management. Our 24/7 contact
							center ensures accessibility at all times, with highly trained
							staff handling various patient inquiries, including appointment
							scheduling and insurance questions. We provide timely and
							responsive support whenever needed. Additionally, our flexible and
							user-friendly scheduling system allows patients to schedule
							appointments conveniently, with automated reminders and
							confirmations to reduce missed appointments and enhance patient
							satisfaction.
						</p>
					</div>

					<img src={img6} alt="Tab 2" className="w-6/12 h-96" />
				</div>
			),
		},

		// {
		// 	heading: 'Allied Services',
		// 	content: (
		// 		<div className="flex flex-wrap">
		// 			<div className="w-6/12">
		// 				<h1 className="text-2xl py-3 font-semibold text-[#2c4964]">
		// 					Allied Services
		// 				</h1>
		// 				<p className="text-gray-600 text-lg">
		// 					<h1 className="font-bold py-2">Provider Credentialing:</h1> It
		// 					assists physicians, practices, hospitals, and other healthcare
		// 					institutions in the United States with the process of enrolling
		// 					and credentialing with health insurance plans. This includes
		// 					verifying provider professional records to ensure accuracy and
		// 					compliance before enrollment.
		// 					<h1 className="font-bold py-2">
		// 						Eligibility & Benefit Validation:
		// 					</h1>{' '}
		// 					Verifies patients' insurance information and determines coverage
		// 					details before services are rendered. This helps ensure clean and
		// 					timely claims, improve cash flow, reduce bad debts, and enables
		// 					timely follow-up with patients, if necessary.
		// 					<h1 className="font-bold py-2">Authorization/Certification: </h1>
		// 					Our team coordinates with payers to obtain necessary approvals and
		// 					per-certifications for specific procedures or inpatient admissions
		// 					in accordance with health insurance guidelines. This proactive
		// 					approach ensures that approvals are obtained well in advance of
		// 					the scheduled services for the patient.
		// 				</p>
		// 			</div>

		// 			<img src={img7} alt="Tab 2" className="w-6/12 h-96" />
		// 		</div>
		// 	),
		// },
	]

	return (
		<div>
			<Header />
			<div className="py-10">
				<h1 className="pt-16 text-4xl font-bold pl-20 text-black">Services</h1>
				<div className="flex px-16">
					<div className=" border-r border-gray-200 text-sm py-4 w-1/5">
						<Tabs
							orientation="vertical"
							variant="scrollable"
							value={selectedTab}
							onChange={handleChangeTab}
						>
							{tabContents.map((tab, index) => (
								<Tab
									key={index}
									style={{
										textAlign: 'left',
										alignItems: 'flex-start',
										fontWeight: 550,
										color: '#2c4964',
									}}
									label={tab.heading}
								/>
							))}
						</Tabs>
					</div>
					<div className="flex-grow pl-8 py-1 w-4/5">
						<Paper elevation={0}>
							<Typography component="div">
								<Box>{tabContents[selectedTab].content}</Box>
							</Typography>
						</Paper>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Services
