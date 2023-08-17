import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'

const dataArray = [
	{
		Question: 'How to Choose Medical Billing Services near me?',
		Answer: (
			<>
				For healthcare entities considering medical billing outsourcing, it is
				important to choose an experienced medical billing company that can
				provide error-free billing and coding services for their specific
				specialty. Finding the right partner near you is often a challenge. So,
				what are the factors to consider when selecting one?
				<h1 className="py-3 font-bold text-xl">
					Check the company’s reputation
				</h1>
				<p className="px-4">
					Look for the firm’s experience. The more experienced the medical
					billing company you choose, the better they will be at providing
					satisfactory services. Also, check the firm’s track record and ensure
					they have a good reputation in the industry.
				</p>
				<h1 className="py-3 font-bold text-xl">
					Evaluate their knowledge of healthcare regulations
				</h1>
				<p className="px-4">
					Check whether the staff is provided regular training and whether they
					are up to date with current coding/billing standards. Make sure that
					the team is well-versed in the latest versions of ICD -10 and ICD-11
					medical codes and related regulations.
				</p>
				<h1 className="py-3 font-bold text-xl">
					Ensure that they are HIPAA-compliant
				</h1>
				<p className="px-4">
					{' '}
					Make sure that the company adheres to the Health Insurance Portability
					and Accountability Act (HIPAA) guidelines, and that they are providing
					strict guidelines to their staff to protect confidential patient data.
				</p>
				<h1 className="py-3 font-bold text-xl">Discuss charges upfront</h1>{' '}
				<p className="px-4">
					Have a clear idea of the cost of their services before you sign up.
					Reliable companies will not have any hidden charges and they will be
					open to discussion as well. Also, they may provide discounts on large
					volume billing requirements. But make sure to prioritize quality
					service than cost. Reliable medical billing and coding companies can
					also assist healthcare providers with denial management.
				</p>
			</>
		),
	},
	{
		Question: 'What are the benefits to outsourcing my medical billing needs?',
		Answer: (
			<>
				<p>That is an easy one.</p>
				<ol>
					<li className="leading-none py-2 px-2">
						<strong>1.</strong> We are medical billing experts. We know the
						industry inside and out and we are always up to date on the latest
						changes in coding, as well as the rules and regulations from varying
						carriers.
					</li>
					<li className="leading-none py-2 px-2">
						<strong>2.</strong>Not only do we have extensive education and
						training in medical billing, we also have staff working around the
						clock, helping you get your cash faster.
					</li>
					<li className="leading-none py-2 px-2">
						<strong>3.</strong>When you outsource your medical billing needs to
						us, you no longer have to worry about all of the overhead costs
						associated with hiring your own medical billing staff (benefits,
						salary, continued training, etc.)
					</li>
					<li className="leading-none py-2 px-2">
						<strong>3.</strong>Get rid of those HR headaches. No more worries
						about managing billing staff salary, payrolls, benefits, vacations,
						sick days, etc.
					</li>
					<li className="leading-none py-2 px-2">
						<strong>4.</strong>Repurpose billing personnel administrative space
						into revenue generating space/rooms.
					</li>
					<li className="leading-none py-2 px-2">
						<strong>5.</strong>Our services are billed as a percentage of what
						we collect, assuring we will do everything possible to maximize
						payment and minimize A/R Days.
					</li>
				</ol>
			</>
		),
	},
	{
		Question: 'What can I expect as your client?',
		Answer:
			'Once you have signed on as a client, your practice will be given a dedicated account executive. This person is your primary contact should any questions or concerns arise. You can relax knowing that we have taken on the burden of the medical billing process so you can focus on your patient care. Your account executive will also make in-person visits to ensure your front-end staff is following all protocols correctly for maximum efficiency, and we will notify you immediately when any changes arise. Our medical billing services are done on a percentage basis, so you can be assured that we will do everything possible to get you maximum payments for your claims.',
	},
	{
		Question: 'Do you stay in compliance with all of the billing regulations?',
		Answer:
			'We always work within the regulations and guidelines laid out by the Office of the Inspector General in the Compliance Program Guidance for Third Party Medical Billing Companies. Whether we are working with insurance carriers, patients, or you, we strictly adhere to the legal and ethical standards of medical billing.',
	},
	{
		Question: 'What makes Medbillmaster Medical Billing unique?',
		Answer:
			'It’s true that there are a lot of medical billing companies out there, but none of them are quite like Medbillmaster Medical Billing. For one, we are owned and operated by people who have been in the trenches as business managers of healthcare facilities. This provides the company with an insight into the methods needed for maximum efficiency, and our level of talent is simply unparalleled in the industry. Additionally, we take a proactive approach to medical billing, performing regular audits to catch errors before they become an issue. It’s also worth noting that we are a private company, so there are no stockholders controlling our operations—we only have to worry about keeping our clients happy.',
	},
	{
		Question: 'Do you help negotiate contracts with our managed care clients?',
		Answer:
			'Not only do we help with the negotiation, it is one of our specialties. We know that your contract plays a substantial role in your profits, and we have the experience and know how to get you the absolute best rates. We can either assist you at the negotiating table or we can serve as your representative—either way, we will get you what you deserve.',
	},
	{
		Question: 'Can you help with physician credentialing?',
		Answer:
			'Absolutely. We understand how time consuming the process of credentialing can be, so we are here to help in whatever way we can. Whether that entails filling out paperwork or following up on your applications, we make the credentialing process easy.',
	},
]

const Faq = () => {
	return (
		<div className="p-16 bg-[#092A44]">
			<div>
				<h1 className="text-4xl underline decoration-sky-400 underline-offset-8 text-center font-bold text-white pb-2">
					Frequently Asked Questions
				</h1>
				<p className="py-5 text-white text-lg text-center">
					Get detailed answers to your questions about medical billing in the
					U.S. This medical billing FAQ answers all the questions on the subject
					including medical coding eligibility and requirements.
				</p>
			</div>
			<div className="px-32">
				{dataArray.map((item) => (
					<div className="rounded-xl">
						<Accordion className="my-2 bg-white text-[#343a40] divide-y divide-sky-500 divide-dashed ">
							<AccordionSummary
								expandIcon={<ExpandMoreIcon className="text-[#38bdf8]" />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography>
									<h1 className="font-semibold text-md text-[#343a40] px-4 py-1">
										{item.Question}
									</h1>
								</Typography>
							</AccordionSummary>

							<AccordionDetails>
								<Typography>
									<p className="px-4 py-1 ">{item.Answer}</p>
								</Typography>
							</AccordionDetails>
						</Accordion>
					</div>
				))}
			</div>
		</div>
	)
}

export default Faq
