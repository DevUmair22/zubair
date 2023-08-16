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
			para: 'Medbillmaster demonstrates several strengths that contribute to its ability to provide effective revenue cycle services. Here is a summary of the strengths you mentioned:',
		},
	]
	return (
		<div className="flex flex-wrap border p-16">
			<div className="w-4/12 px-6">
				<div class="p-6 bg-[#092A44] border border-gray-200 rounded-lg  shadow text-white  ">
					<h5 class="mb-3 text-4xl font-bold tracking-tight ">
						Why Choose Medbillmaster?
					</h5>

					<p class="mb-4 font-normal text-justify">
						Medbillmaster is a trusted and well-reputed medical billing company
						with a decent client base. It offers comprehensive and advanced
						Medical Billing services and solutions to healthcare providers
						across the United States of America. Our solutions are designed to
						meet the diverse needs of our clients and provide them with a
						seamless and technologically advanced billing experience.
					</p>
					<div className="flex py-6">
						{' '}
						<span className=" rounded-full px-6 text-md font-semibold mx-auto py-2 bg-sky-500 text-white ">
							Learn More
						</span>
					</div>
				</div>
			</div>
			<div className="w-8/12 py-6 px-4 flex flex-wrap ">
				{data.map((item) => (
					<div class="w-56 h-full px-6 bg-white rounded-lg drop-shadow-lg text-center flex-col mx-auto">
						<div className="mx-auto py-6 flex items-center text-sky-500">
							{item.icon}
						</div>
						<h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
							{item.title}
						</h5>

						<p class="mb-3 font-normal text-gray-500 ">{item.para}</p>
						<div className="flex py-6">
							<span className=" rounded-full px-6 text-md font-semibold mx-auto py-2 bg-sky-500 text-white ">
								Learn More
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Why
