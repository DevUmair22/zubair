import React from 'react'
import { BsFillHeartPulseFill } from 'react-icons/bs'
import { FaCode, FaWheelchairMove } from 'react-icons/fa6'
import { FiFileText } from 'react-icons/fi'
import {
	LiaFileContractSolid,
	LiaFileInvoiceDollarSolid,
} from 'react-icons/lia'
import TabComponent from '../elements/TabComp'

export const dataArray = [
	{
		icon: (
			<FiFileText
				size="4rem"
				className="mx-auto rounded-lg p-3 text-[#092A44] bg-white hover:bg-[#092A44] hover:border-[#092A44] hover:text-white"
			/>
		),
		title: 'Professional/Institutional Billing',
		para: 'It includes handling of billing processes for both professional services (physicians) and institutional services (hospitals). This comprises coding, charge capture, claims submission, and follow-up on claims.',
	},
	{
		icon: (
			<FaWheelchairMove
				size="4rem"
				className="mx-auto rounded-lg p-3 text-[#092A44] bg-white hover:bg-[#092A44] hover:border-[#092A44] hover:text-white"
			/>
		),
		title: 'Patient Access Services',
		para: 'This involves activities related to patient registration, insurance verification, scheduling, and ensuring a smooth patient intake process.',
	},
	{
		icon: (
			<LiaFileContractSolid
				size="4rem"
				className="mx-auto rounded-lg p-3 text-[#092A44] bg-white hover:bg-[#092A44] hover:border-[#092A44] hover:text-white"
			/>
		),
		title: 'Contract Management',
		para: 'This refers to the management of contracts between healthcare providers and payers, ensuring accurate reimbursement rates, terms, and compliance with contractual obligations.',
	},
	{
		icon: (
			<BsFillHeartPulseFill
				size="4rem"
				className="mx-auto rounded-lg p-3 text-[#092A44] bg-white hover:bg-[#092A44] hover:border-[#092A44] hover:text-white"
			/>
		),
		title: 'Healthcare Analytics',
		para: 'We utilize healthcare analytics to analyze and interpret data related to revenue cycle management, identifying areas for improvement, optimizing performance, and making informed decisions.',
	},
	{
		icon: (
			<FaCode
				size="4rem"
				className="mx-auto rounded-lg p-3 text-[#092A44] bg-white hover:bg-[#092A44] hover:border-[#092A44] hover:text-white"
			/>
		),
		title: 'Coding',
		para: 'Accurate and compliant medical coding is crucial for proper billing and reimbursement. Medbillmaster provides coding services which ensure that diagnoses, procedures, and services are appropriately coded for billing purposes.',
	},
	{
		icon: (
			<LiaFileInvoiceDollarSolid
				size="4rem"
				className="mx-auto rounded-lg p-3 text-[#092A44] bg-white hover:bg-[#092A44] hover:border-[#092A44] hover:text-white"
			/>
		),
		title: 'Accounts Receivable and Denial Management',
		para: 'We manage accounts receivable by monitoring outstanding payments, following up on unpaid claims, and implementing effective denial management strategies to minimize claim denials and improve revenue collection.',
	},
]

const Services = () => {
	return (
		<div className="flex-col flex-wrap py-8">
			<div>
				<h1 className="text-4xl underline decoration-sky-400 underline-offset-8 text-center font-bold  text-[#2c4964] py-2">
					Services
				</h1>
				<p className="py-5 px-16 text-black text-center">
					Medbillmaster is focused on all aspects of revenue cycle management
					which include medical billing, medical coding,
					professional/institutional billing, contract management, patient
					access services, healthcare analytics, accounts receivable and denial
					management.
				</p>
			</div>
			<div className="flex flex-wrap bg-white px-20 ">
				{dataArray.map((item) => (
					<div className=" p-4 text-center w-4/12  mx-auto text-white">
						<div className="bg-[#092A44] p-6 h-96 hover:bg-white hover:text-black">
							<div className="py-4">{item.icon}</div>
							<h1 className="text-2xl font-bold text-[#3BA2E2] py-2">
								{item.title}
							</h1>
							<p className="text-sm">{item.para}</p>
						</div>
					</div>
				))}
			</div>
			<div className="py-10">
				<h1 className="text-4xl underline decoration-sky-400 underline-offset-8 text-center font-bold  text-[#2c4964] py-10">
					Allied Services
				</h1>
				<div className="flex justify-start items-center ">
					<TabComponent />
				</div>
			</div>
		</div>
	)
}

export default Services
