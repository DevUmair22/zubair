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
			para: "At Physician's Choice, we instill a culture of security awareness throughout our workforce. All team members receive comprehensive training on privacy, security, and confidentiality, ensuring that your data remains protected around the clock. Our office is staffed with 24/7 security personnel to maintain a vigilant watch over our operations.",
		},
		{
			icon: (
				<BiSolidCheckShield
					size="4rem"
					className="mx-auto border-2 rounded-full p-3 border-sky-500 text-sky-500 hover:bg-[#092A44] hover:border-[#092A44]"
				/>
			),
			title: 'Protection',
			para: 'We prioritize the daily updating of firewalls and antivirus software on all our computers. This proactive approach to protection guarantees that our systems remain fortified against emerging threats, keeping your data secure',
		},
		{
			icon: (
				<BiExit
					size="4rem"
					className="mx-auto border-2 rounded-full p-3 border-sky-500 text-sky-500 hover:bg-[#092A44] hover:border-[#092A44]"
				/>
			),
			title: 'Confidentiality',
			para: 'To further reinforce our commitment to data confidentiality, all our employees are required to sign a confidentiality and non-disclosure agreement. This legal agreement underscores our dedication to safeguarding your sensitive healthcare information.',
		},
	]

	return (
		<div className="flex flex-col sm:flex-row p-16 ">
			<div
				className="w-full sm:w-5/12 bg-cover bg-hero rounded-xl"
				style={{ backgroundImage: `url(${img})` }}
			>
				<img
					src={img}
					minHeight="500px"
					alt="img"
					className="rounded-xl overflow-hidden"
				/>
			</div>
			<div className="w-full sm:w-7/12 p-6 sm:p-12">
				<div className="py-2 sm:py-6">
					<h1 className="text-3xl font-bold py-2">HIPAA</h1>
					<h2 className="text-3xl py-2 font-medium text-gray-700">
						Compliance
					</h2>
					<p className="text-gray-700 text-md">
						At Physician's Choice, we prioritize HIPAA compliance, ensuring that
						your sensitive healthcare data remains safeguarded. Our commitment
						to confidentiality is unwavering, and we take proactive measures to
						maintain the highest level of security. Our staff participates in
						quarterly HIPAA meetings to stay current with the dynamic healthcare
						landscape and emphasize the significance of data protection. We have
						a zero-tolerance policy for breaches of confidentiality. Our
						cutting-edge server is continuously monitored and fortified with the
						latest firewall technology, guaranteeing the utmost security for
						your confidential information. While HIPAA offers general security
						guidelines, we go beyond compliance – we are inherently secure at
						our core. Recognizing the formidable challenges of data security in
						today's interconnected world, we remain steadfast in our dedication
						to preserving the integrity of your healthcare records. We are proud
						to report that we have never experienced a security breach.
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
