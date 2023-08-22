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
import img7 from '../images/s7.jpeg'

const Services = () => {
	const [selectedTab, setSelectedTab] = useState(0)

	const handleChangeTab = (event, newValue) => {
		setSelectedTab(newValue)
	}

	const tabContents = [
		{
			heading: '	Professional/Institutional Billing',
			content: (
				<div className="flex flex-wrap">
					<div className="w-6/12">
						<h1 className="text-2xl py-3 font-semibold text-[#2c4964]">
							Professional/Institutional Billing
						</h1>
						<p className="text-gray-600 text-lg">
							It includes handling of billing processes for both professional
							services (physicians) and institutional services (hospitals). This
							comprises coding, charge capture, claims submission, and follow-up
							on claims.
						</p>
					</div>

					<img src={img1} alt="Tab 2" className="w-6/12 h-96" />
				</div>
			),
		},
		{
			heading: 'Patient Access Services',
			content: (
				<div className="flex flex-wrap">
					<div className="w-6/12">
						<h1 className="text-2xl py-3 font-semibold text-[#2c4964]">
							Patient Access Services
						</h1>
						<p className="text-gray-600 text-lg">
							This involves activities related to patient registration,
							insurance verification, scheduling, and ensuring a smooth patient
							intake process.
						</p>
					</div>

					<img src={img2} alt="Tab 2" className="w-6/12 h-96" />
				</div>
			),
		},
		{
			heading: '	Contract Management',
			content: (
				<div className="flex flex-wrap">
					<div className="w-6/12">
						<h1 className="text-2xl py-3 font-semibold text-[#2c4964]">
							Contract Management
						</h1>
						<p className="text-gray-600 text-lg">
							This refers to the management of contracts between healthcare
							providers and payers, ensuring accurate reimbursement rates,
							terms, and compliance with contractual obligations.
						</p>
					</div>

					<img src={img3} alt="Tab 2" className="w-6/12 h-96" />
				</div>
			),
		},
		{
			heading: 'Healthcare Analytics',
			content: (
				<div className="flex flex-wrap">
					<div className="w-6/12">
						<h1 className="text-2xl py-3 font-semibold text-[#2c4964]">
							Healthcare Analytics
						</h1>
						<p className="text-gray-600 text-lg">
							We utilize healthcare analytics to analyze and interpret data
							related to revenue cycle management, identifying areas for
							improvement, optimizing performance, and making informed
							decisions.',
						</p>
					</div>

					<img src={img4} alt="Tab 2" className="w-6/12 h-96" />
				</div>
			),
		},
		{
			heading: 'Coding',
			content: (
				<div className="flex flex-wrap">
					<div className="w-6/12">
						<h1 className="text-2xl py-3 font-semibold text-[#2c4964]">
							Coding
						</h1>
						<p className="text-gray-600 text-lg">
							Accurate and compliant medical coding is crucial for proper
							billing and reimbursement. Medbillmaster provides coding services
							which ensure that diagnoses, procedures, and services are
							appropriately coded for billing purposes.
						</p>
					</div>

					<img src={img5} alt="Tab 2" className="w-6/12 h-96" />
				</div>
			),
		},
		{
			heading: '		Accounts Receivable and Denial Management',
			content: (
				<div className="flex flex-wrap">
					<div className="w-6/12">
						<h1 className="text-2xl py-3 font-semibold text-[#2c4964]">
							Accounts Receivable and Denial Management
						</h1>
						<p className="text-gray-600 text-lg">
							We manage accounts receivable by monitoring outstanding payments,
							following up on unpaid claims, and implementing effective denial
							management strategies to minimize claim denials and improve
							revenue collection.
						</p>
					</div>

					<img src={img6} alt="Tab 2" className="w-6/12 h-96" />
				</div>
			),
		},
		{
			heading: 'Allied Services',
			content: (
				<div className="flex flex-wrap">
					<div className="w-6/12">
						<h1 className="text-2xl py-3 font-semibold text-[#2c4964]">
							Allied Services
						</h1>
						<p className="text-gray-600 text-lg">
							<h1 className="font-bold py-2">Provider Credentialing:</h1> It
							assists physicians, practices, hospitals, and other healthcare
							institutions in the United States with the process of enrolling
							and credentialing with health insurance plans. This includes
							verifying provider professional records to ensure accuracy and
							compliance before enrollment.
							<h1 className="font-bold py-2">
								Eligibility & Benefit Validation:
							</h1>{' '}
							Verifies patients' insurance information and determines coverage
							details before services are rendered. This helps ensure clean and
							timely claims, improve cash flow, reduce bad debts, and enables
							timely follow-up with patients, if necessary.
							<h1 className="font-bold py-2">Authorization/Certification: </h1>
							Our team coordinates with payers to obtain necessary approvals and
							per-certifications for specific procedures or inpatient admissions
							in accordance with health insurance guidelines. This proactive
							approach ensures that approvals are obtained well in advance of
							the scheduled services for the patient.
						</p>
					</div>

					<img src={img7} alt="Tab 2" className="w-6/12 h-96" />
				</div>
			),
		},
	]

	return (
		<div>
			<Header />
			<div className="py-10">
				<h1 className="pt-16 text-4xl font-bold pl-20 text-black">Services</h1>
				<div className="flex px-16">
					<div className=" border-r border-gray-200 text-sm py-4">
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
					<div className="flex-grow pl-8 py-1">
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
