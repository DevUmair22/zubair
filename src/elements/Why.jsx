import React from 'react'
import { GiFist } from 'react-icons/gi'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { LiaBuromobelexperte } from 'react-icons/lia'

const Why = () => {
	const data = [
		{
			title: 'Expertise',
			icon: <LiaBuromobelexperte size="4rem" />,
			para: 'Our team of high caliber professionals is skilled in defining, configuring, and implementing streamlined processes to improve efficiency, customer service, and quality...',
		},
		{
			title: 'Infrastructure',
			icon: <HiOutlineBuildingOffice2 size="4rem" />,
			para: 'Medbillmaster has a well-built space with excellent IT support and security measures in place. This ensures that the organization can operate smoothly and securely',
		},
		{
			title: 'Strengths',
			icon: <GiFist size="4rem" />,
			para: 'Medbillmaster demonstrates several strengths that contribute to its ability to provide effective revenue cycle services. Here is a summary of strengths ',
		},
	]

	return (
		<div className="flex flex-col sm:flex-row border pt-6 sm:p-10">
			<div className="w-full sm:w-1/2 xl:w-1/3 px-2 sm:px-6 mb-6 sm:mb-0">
				<div className="p-6 bg-[#092A44] border border-gray-200 rounded-lg shadow text-white">
					<h5 className="mb-5 text-2xl sm:text-4xl font-bold tracking-tight">
						Why Choose Medbillmaster?
					</h5>
					<p className="mb-4 font-normal text-justify text-md sm:text-lg">
						Medbillmaster is a trusted and well-reputed medical billing company
						with a decent client base. It offers comprehensive and advanced
						Medical Billing services and solutions to healthcare providers
						across the United States of America. Our solutions are designed to
						meet the diverse needs of our clients and provide them with a
						seamless and technologically advanced billing experience.
					</p>
					<div className="flex py-6">
						<span className="rounded-full px-6 text-md font-semibold mx-auto py-2 bg-sky-500 text-white">
							Learn More
						</span>
					</div>
				</div>
			</div>
			<div className="w-full sm:w-1/2 xl:w-2/3 py-6 px-2 flex flex-wrap">
				{data.map((item, index) => (
					<div key={index} className="w-full sm:w-1/3 px-4 py-4">
						<div className="bg-white rounded-lg shadow-lg text-center flex flex-col items-center p-6">
							<div className="mx-auto py-4 flex items-center text-sky-500">
								<span className="mx-auto">{item.icon}</span>
							</div>
							<h5 className="mb-2 text-lg sm:text-xl font-semibold tracking-tight text-gray-900">
								{item.title}
							</h5>
							<p className="mb-3 font-normal text-gray-500 text-sm sm:text-base">
								{item.para}
							</p>
							<div className="flex py-2">
								<span className="rounded-full px-6 text-md font-semibold mx-auto py-1 bg-sky-500 text-white">
									Learn More
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Why
