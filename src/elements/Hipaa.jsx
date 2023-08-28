import React from 'react'
import { BiExit, BiSolidCheckShield } from 'react-icons/bi'
import { BsFingerprint } from 'react-icons/bs'
import img from '../images/intro.jpg'

const Hipaa = () => {
	const array = [
		{
			icon: (
				<BsFingerprint
					size="4rem"
					className="mx-auto border-2 rounded-full p-3 border-sky-500 text-sky-500 hover:bg-[#092A44] hover:border-[#092A44]"
				/>
			),
			title: 'Security',
			para: 'The entire workforce is trained on privacy, security, and confidentiality. 24 X 7 security personnel manning our office.',
		},
		{
			icon: (
				<BiSolidCheckShield
					size="4rem"
					className="mx-auto border-2 rounded-full p-3 border-sky-500 text-sky-500 hover:bg-[#092A44] hover:border-[#092A44]"
				/>
			),
			title: 'Protection',
			para: 'Firewalls and antivirus software on all the computers are updated daily',
		},
		{
			icon: (
				<BiExit
					size="4rem"
					className="mx-auto border-2 rounded-full p-3 border-sky-500 text-sky-500 hover:bg-[#092A44] hover:border-[#092A44]"
				/>
			),
			title: 'Confidentiality',
			para: 'All our employees must sign a confidentiality and non-disclosure agreement',
		},
	]

	return (
		<div className="flex flex-col sm:flex-row py-16">
			<div className="w-full sm:w-5/12 bg-cover bg-hero">
				<img src={img} minHeight="500px" alt="img" />
			</div>
			<div className="w-full sm:w-7/12 p-6 sm:p-12">
				<div className="py-2 sm:py-6">
					<h1 className="text-3xl font-bold py-2">HIPAA</h1>
					<h2 className="text-3xl py-2 font-medium text-gray-700">
						Compliance
					</h2>
					<p className="text-gray-700 text-md">
						We guarantee HIPAA-compliant software and adhere strictly to
						confidentiality. Our staff has quarterly HIPAA meetings to discuss
						the importance of security and the fast changing health care
						industry. We have zero tolerance for any breach of confidentiality.
						Our server is monitored and protected with the most up to date
						firewall, insuring that no confidential information will be shared.
						HIPAA only provides general security guidelines that are specific to
						health care providers. Physician's Choice is focused on being more
						than simply compliant. We are inherently compliant through being
						fundamentally secure. The challenges of data security are daunting.
						Access to health care records can come from any number of places. We
						take security seriously and have never had a security breach.
					</p>
				</div>
				<div className="flex-col flex-wrap">
					{array.map((item) => (
						<div className="flex flex-wrap py-4 items-center">
							<div className="w-3/12 sm:w-2/12 h-full pr-6">{item.icon}</div>
							<div className="w-9/12 sm:w-10/12 pl-4 sm:pl-0">
								<h1 className="py-1 text-xl font-bold">{item.title}</h1>
								<p className="text-sm">{item.para}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Hipaa
