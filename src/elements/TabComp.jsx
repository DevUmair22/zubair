import { Box, Paper, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import img1 from '../images/1.jpeg'
import img2 from '../images/2.png'
import img3 from '../images/3.jpeg'

const TabComponent = () => {
	const [selectedTab, setSelectedTab] = useState(0)

	const handleChangeTab = (event, newValue) => {
		setSelectedTab(newValue)
	}

	const tabContents = [
		{
			heading: 'Provider Credentialing',
			content: (
				<div className="flex flex-col-reverse sm:flex-row">
					<div className="w-full sm:w-9/12 sm:pr-8">
						<h1 className="text-xl sm:text-2xl py-3 font-semibold text-[#2c4964]">
							Provider Credentialing
						</h1>
						<p className="text-gray-600 text-base sm:text-lg">
							It assists physicians, practices, hospitals, and other healthcare
							institutions in the United States with the process of enrolling
							and credentialing with health insurance plans. This includes
							verifying provider professional records to ensure accuracy and
							compliance before enrollment.
						</p>
					</div>
					<img
						src={img1}
						alt="Tab 1"
						className="w-full sm:w-3/12 mt-4 sm:mt-0"
					/>
				</div>
			),
		},
		{
			heading: 'Eligibility & Benefit Validation',
			content: (
				<div className="flex flex-col-reverse sm:flex-row">
					<div className="w-full sm:w-9/12 sm:pr-8">
						<h1 className="text-xl sm:text-2xl py-3 font-semibold text-[#2c4964]">
							Eligibility & Benefit Validation
						</h1>
						<p className="text-gray-600 text-base sm:text-lg">
							Verifies patients' insurance information and determines coverage
							details before services are rendered. This helps ensure clean and
							timely claims, improve cash flow, reduce bad debts, and enables
							timely follow-up with patients, if necessary.
						</p>
					</div>
					<img
						src={img2}
						alt="Tab 2"
						className="w-full sm:w-3/12 mt-4 sm:mt-0"
					/>
				</div>
			),
		},
		{
			heading: 'Authorization/Certification',
			content: (
				<div className="flex flex-col-reverse sm:flex-row">
					<div className="w-full sm:w-9/12 sm:pr-8">
						<h1 className="text-xl sm:text-2xl py-3 font-semibold text-[#2c4964]">
							Authorization/Certification
						</h1>
						<p className="text-gray-600 text-base sm:text-lg">
							Our team coordinates with payers to obtain necessary approvals and
							pre-certifications for specific procedures or inpatient admissions
							in accordance with health insurance guidelines. This proactive
							approach ensures that approvals are obtained well in advance of
							the scheduled services for the patient.
						</p>
					</div>
					<img
						src={img3}
						alt="Tab 3"
						className="w-full sm:w-3/12 mt-4 sm:mt-0"
					/>
				</div>
			),
		},
	]

	return (
		<div className="flex-col flex sm:flex-row px-4 sm:px-16">
			<div className="border-r border-gray-200 text-sm py-0 sm:py-4">
				<Tabs
					orientation="vertical"
					variant="scrollable"
					value={selectedTab}
					onChange={handleChangeTab}
					className=""
				>
					{tabContents.map((tab, index) => (
						<Tab
							key={index}
							style={{
								alignItems: 'baseline',
								fontWeight: 550,
								color: '#2c4964',
								padding: '0px 12px',
							}}
							label={tab.heading}
						/>
					))}
				</Tabs>
			</div>
			<div className="flex-grow pl-0 sm:pl-8 py-1">
				<Paper elevation={0}>
					<Typography component="div">
						<Box>{tabContents[selectedTab].content}</Box>
					</Typography>
				</Paper>
			</div>
		</div>
	)
}

export default TabComponent
