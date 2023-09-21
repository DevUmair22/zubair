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
			heading: '	Medical Providers',
			content: (
				<div className="flex flex-col-reverse sm:flex-row">
					<div className="w-full sm:w-9/12 sm:pr-8">
						<h1 className="text-xl sm:text-2xl py-3 font-semibold text-[#2c4964]">
							Medical Providers
						</h1>
						<p className="text-gray-600 text-base sm:text-lg">
							We are proud to offer comprehensive billing and revenue cycle
							management services to medical providers. Our team of experienced
							professionals is dedicated to optimizing billing processes,
							maximizing revenue, and improving financial performance. From
							claim submission to payment, we handle every aspect of the revenue
							cycle with exceptional attention to detail and customer service.
							We are committed to helping medical providers succeed, and we
							offer customized solutions to meet the unique needs of each
							practice. Trust us to handle your billing and revenue cycle
							management needs and focus on providing top-quality care to your
							patients.
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
			heading: '	Hospitals',
			content: (
				<div className="flex flex-col-reverse sm:flex-row">
					<div className="w-full sm:w-9/12 sm:pr-8">
						<h1 className="text-xl sm:text-2xl py-3 font-semibold text-[#2c4964]">
							Hospitals
						</h1>
						<p className="text-gray-600 text-base sm:text-lg">
							At DRMBS, we are proud to offer comprehensive billing and revenue
							cycle management services to hospitals. Our team of experienced
							professionals is dedicated to optimizing billing processes,
							maximizing revenue, and improving financial performance. From
							patient registration to payment, we handle every aspect of the
							revenue cycle with exceptional attention to detail and customer
							service. Our customizable solutions are designed to meet the
							unique needs of each hospital, and we are committed to helping our
							clients succeed. Trust us to handle your billing and revenue cycle
							management needs and focus on providing top-quality care to your
							patients.
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
			heading: '	Private Practices',
			content: (
				<div className="flex flex-col-reverse sm:flex-row">
					<div className="w-full sm:w-9/12 sm:pr-8">
						<h1 className="text-xl sm:text-2xl py-3 font-semibold text-[#2c4964]">
							Private Practices
						</h1>
						<p className="text-gray-600 text-base sm:text-lg">
							At our company, we are proud to offer comprehensive billing and
							revenue cycle management services to private practices. Our team
							of experienced professionals is dedicated to optimizing billing
							processes, maximizing revenue, and improving financial
							performance. From patient registration to payment, we handle every
							aspect of the revenue cycle with exceptional attention to detail
							and customer service. Our customizable solutions are designed to
							meet the unique needs of each private practice, and we are
							committed to helping our clients succeed. Trust us to handle your
							billing and revenue cycle management needs and focus on providing
							top-quality care to your patients.
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
