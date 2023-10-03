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
		title: 'Medical Billing and Coding Services',
		para: 'MBCS (Medical Billing Consultancy & Solutions) recognizes the intricacies and time-consuming nature of medical billing and coding. Hence, we extend comprehensive services to healthcare providers throughout the United States. Our team of highly trained professionals is dedicated to ensuring precise and timely reimbursements for your services. Medical billing and coding are pivotal components of healthcare administration, essential for maintaining the quality of patient care. With years of experience in delivering exceptional medical billing and coding services, our commitment lies in helping you optimize reimbursements while alleviating administrative burdens.',
	},
	{
		icon: (
			<FaWheelchairMove
				size="4rem"
				className="mx-auto rounded-lg p-3 text-[#092A44] bg-white hover:bg-[#092A44] hover:border-[#092A44] hover:text-white"
			/>
		),
		title: 'Credentialing & Physician Contracting Services',
		para: 'Credentialing and physician contracting stand as critical pillars in the operations of healthcare providers, ensuring compliance with insurance carrier requirements and the ability to offer services to patients. However, this process can be intricate and time-intensive, characterized by numerous documents and requisites. Pro Medical Billing Solutions offers top-tier credentialing and physician contracting services to help healthcare providers navigate these challenges, allowing them to concentrate on delivering high-quality healthcare services to their patients',
	},
	{
		icon: (
			<LiaFileContractSolid
				size="4rem"
				className="mx-auto rounded-lg p-3 text-[#092A44] bg-white hover:bg-[#092A44] hover:border-[#092A44] hover:text-white"
			/>
		),
		title: 'Why Revenue Cycle Management Matters',
		para: 'Are you grappling with the task of maintaining a seamless and efficient administrative experience while enhancing revenue generation? Do the demands of medical revenue cycle management strain your resources due to a lack of expertise? If so, it may be time to consider outsourcing your requirements to an experienced revenue cycle management company for optimal results. Pro Medical Billing Solutions offers cost-effective and high-quality RCM solutions to clients worldwide. Our comprehensive revenue cycle management services offer several benefits, includingHIPAA compliance, potential cost savings of up to 60%, and stringent security protocols. We specialize in collecting payments on submitted claims, increasing revenue through underpaid claims, and facilitating follow-ups with insurance companies for swift settlements. Additionally, we can assist you in managing your revenue cycle management system, including coding tasks and complete patient registration and eligibility verification. By leveraging our expertise, you can improve your collection ratios, increase the likelihood of payments, and boost your revenues.',
	},
	{
		icon: (
			<BsFillHeartPulseFill
				size="4rem"
				className="mx-auto rounded-lg p-3 text-[#092A44] bg-white hover:bg-[#092A44] hover:border-[#092A44] hover:text-white"
			/>
		),
		title: 'Account Receivable & Denial Management Services',
		para: 'Pro Medical Billing Solutions acknowledges the critical importance of effective account receivable and denial management in the success of medical practices. Our dedicated team is committed to delivering the highest level of service, characterized by meticulous attention to detail, strong communication skills, and a proactive approach to identifying and addressing potential issues. We stay updated with industry trends and changes to ensure that your medical billing processes operate smoothly and efficiently. By adhering to best practices, we offer you the assurance that your billing processes are being handled with efficiency and effectiveness.',
	},
	{
		icon: (
			<FaCode
				size="4rem"
				className="mx-auto rounded-lg p-3 text-[#092A44] bg-white hover:bg-[#092A44] hover:border-[#092A44] hover:text-white"
			/>
		),
		title: 'Billing & Coding Audit',
		para: 'We recognize the significance of conducting routine audits of medical billing and coding processes to maintain accuracy and efficiency in the revenue cycle. Our audit services not only help medical practices mitigate risks and optimize revenue but also serve as valuable educational tools. Through our audits, we identify and resolve issues, enhancing your understanding of the complexities associated with medical coding and billing. We review coding quality to ensure accuracy and pinpoint areas of strength and weakness, assisting practices in establishing a robust quality assurance process.',
	},
	{
		icon: (
			<LiaFileInvoiceDollarSolid
				size="4rem"
				className="mx-auto rounded-lg p-3 text-[#092A44] bg-white hover:bg-[#092A44] hover:border-[#092A44] hover:text-white"
			/>
		),
		title: 'Verification & Prior Authorization:',
		para: "Pro Medical Billing Solutions understands that healthcare providers have ample responsibilities without having to concern themselves with patient eligibility and benefits verification. Therefore, we  offer a comprehensive service to manage this process on their behalf. Our team of experts is dedicated to ensuring timely payments and a stable revenue cycle for healthcare providers. Prior Authorization Services assist healthcare providers in securing approval from a patient's insurance provider before delivering specific services or procedures. This proactive approach helps healthcare providers avoid denials and payment delays by confirming that services fall under the patient's insurance plan. We emphasize the significance of verifying patient eligibility and benefits before delivering services,as up to 75% of claim denials are attributable to patient ineligibility. Our comprehensive service streamlines the process, preventing unexpected financial surprises for patients.",
	},
	{
		icon: (
			<LiaFileInvoiceDollarSolid
				size="4rem"
				className="mx-auto rounded-lg p-3 text-[#092A44] bg-white hover:bg-[#092A44] hover:border-[#092A44] hover:text-white"
			/>
		),
		title: 'Ambulatory Surgical Center Billing Services (ASC)',
		para: 'Pro Medical Billing Solutions recognizes the importance of efficient and effective billing services for Ambulatory Surgical Centers (ASCs). ASCs are outpatient facilities where surgeries and procedures are performed without overnight stays. Given the increasing number of ASCs in the healthcare industry, having a reliable billing system is crucial. In this regard, we specialize in ASC billing services, helping ASCs maximize revenue and enhance billing processes.',
	},
	{
		icon: (
			<LiaFileInvoiceDollarSolid
				size="4rem"
				className="mx-auto rounded-lg p-3 text-[#092A44] bg-white hover:bg-[#092A44] hover:border-[#092A44] hover:text-white"
			/>
		),
		title: 'Contact Center 24/7 & Patient Scheduling Management',
		para: 'Efficient and effective contact center services and patient scheduling management are critical to our clients at Pro Medical Billing Solutions. Our approach is designed to maximize the availability and accessibility of our services while prioritizing patient satisfaction and quality care. First and foremost, we offer 24/7 contact center services to ensure our clients can reach us at any time, day or night. Our contact center staff is highly trained and experienced in handling a wide range of patient inquiries, including appointment scheduling and insurance inquiries. By providing roundthe-clock access to our services, we ensure our clients receive timely and responsive support whenever they require it.',
	},
]

const Services = () => {
	return (
		<div className="flex-col flex flex-wrap py-4 sm:py-8">
			<div>
				<h1 className="text-4xl underline decoration-sky-400 underline-offset-8 text-center font-bold  text-[#2c4964] py-2">
					Services
				</h1>
				<p className="py-5 px-6 sm:px-16 text-black text-center">
					Our commitment to excellence is unwavering - we guarantee 100% effort
					and smart work to give you the best service possible. Discover the
					full range of services we offer, all backed by our commitment to
					exceptional quality.
				</p>
			</div>
			<div className="flex-col flex sm:flex-row flex-wrap bg-white px-2 sm:px-20 ">
				{dataArray.map((item) => (
					<div className=" p-4 text-center w-full sm:w-4/12  mx-auto text-white">
						<div className="bg-[#092A44] p-6 h-full hover:bg-white hover:text-black ">
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
				<div className="flex-col flex flex-wrap sm:flex-row justify-start items-center ">
					<TabComponent />
				</div>
			</div>
		</div>
	)
}

export default Services
