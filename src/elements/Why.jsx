import React from 'react'
import { GiFist } from 'react-icons/gi'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { LiaBuromobelexperte } from 'react-icons/lia'

const Why = () => {
	const data = [
		{
			title: 'Expertise',
			icon: <LiaBuromobelexperte size="4rem" />,
			para: 'Our team at MBCS boasts a wealth of expertise in medical billing and coding. With years of industry experience, our experts stay updated with the latest regulations and technologies to ensure precision and efficiency in every task. Your financial success is our priority, and our deep industry knowledge is the key to achieving it.',
		},
		{
			title: 'Infrastructure',
			icon: <HiOutlineBuildingOffice2 size="4rem" />,
			para: 'MBCS takes pride in its state-of-the-art infrastructure tailored to meet the demands of modern healthcare billing. Our robust systems, secure data handling, and efficient processes are designed to optimize your revenue cycle management. Trust in our infrastructure to deliver seamless solutions for your practice.',
		},
		{
			title: 'Strengths',
			icon: <GiFist size="4rem" />,
			para: "At MBCS, our strengths lie in our commitment to accuracy, compliance, and client satisfaction. We offer customized solutions that align with your unique needs, allowing you to focus on patient care while we handle the financial intricacies. Our strength is in turning challenges into opportunities for your practice's growth and success. ",
		},
	]

	return (
		<div className="flex flex-col sm:flex-row border pt-6 sm:p-10">
			<div className="w-full sm:w-1/2 xl:w-1/3 px-2 sm:px-6 mb-6 sm:mb-0">
				<div className="p-6 bg-[#092A44] border border-gray-200 rounded-lg shadow text-white">
					<h5 className="mb-5 text-2xl sm:text-4xl font-bold tracking-tight">
						Why Choose MBCS?
					</h5>
					<p className="mb-4 font-normal text-justify text-md sm:text-lg">
						At MBCS (Medical Billing Consultancy & Solutions), we offer more
						than just billing services – we provide a pathway to financial
						success for your medical practice. With our expert team and tailored
						solutions, we optimize revenue, ensure compliance, and simplify your
						billing processes. Choose MBCS for precision, profitability, and
						peace of mind in healthcare billing.
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
