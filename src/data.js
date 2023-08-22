import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import expertise from './images/expertise.jpeg';
import infrastructure from './images/infrastructure.jpeg';
import strength from './images/strengths.jpeg';
export const icons = [

   <FaTwitter />,
   <FaFacebook />,
   <FaInstagram />
   , <FaLinkedin />
]

export const detailsData = [

   {
      id: 1,
      title: "Strengths",
      para: <p>Medbillmaster demonstrates several strengths that contribute to its ability to provide effective revenue cycle management services. Here's a summary of the strengths:<br />

         <b> Skilled Professionals</b> who are well- equipped to handle end - to - end revenue cycle operations.Their expertise allows for efficient and effective management of the revenue cycle process.<br />

         <b>  Timely Payer and Provider Coordination </b>ensures smooth communication and efficient workflow.This helps to expedite processes and address any issues promptly.<br />

         <b> Eligibility Verification and Payer Approvals</b> system helps us in verifying patient eligibility and obtaining payer approvals well in advance of the date of service.This proactive approach ensures that providers have the necessary authorizations and reduces the likelihood of claim denials.<br />

         <b> Efficient Productivity and Excellent Quality Services </b>ensure productivity and delivery of services with excellent quality.The efficient processes and attention to detail contribute to streamlined operations and accurate billing.<br />

         <b> Revenue Cycle Optimization</b> helps providers in decreasing costs and optimizing their revenue cycle.By identifying areas for improvement and implementing effective strategies, we help providers maximize revenue and minimize expenses.<br />

         <b>Error Elimination and Compliance protocols</b> place strong focus on eliminating billing submission errors through verification and follow up processes.This helps avoid penalties, fines, and claim rejections, ensuring compliance with regulatory requirements.<br />

         <b> Operational Improvement and Financial Control</b> aim to minimize operational flaws and improve financial control for healthcare providers.By implementing efficient processes and effective controls, we help them enhance overall financial management.<br />

         <b>   Regular Follow - ups and Cash Flow Optimization </b>reduce claim denials and increase cash flow.This proactive approach helps ensure timely reimbursement and improved financial performance.<br />

         These strengths collectively contribute to our ability to provide comprehensive revenue cycle management services and support healthcare providers in optimizing their financial operations.</p>,
      img: { strength }
   }, {
      id: 2,
      title: "Infrastructure",
      para: <p>Medbillmaster has a well-built space with excellent IT support and security measures in place. This ensures that the organization can operate smoothly and securely. The integrated cloud-enabled system allows for efficient data management and accessibility. We adhere to strict file transfer and data management protocols to maintain compliance with HIPAA and PHI regulations, ensuring the privacy and security of sensitive healthcare information. The availability of a 24/7 customer service helpline highlights the organization's commitment to providing prompt and reliable support to its clients.<br />

         Our skilled team with advanced and efficient technical infrastructure and a focus on security and compliance, enables us to deliver outstanding healthcare support services to our clients and stakeholders.</p>,
      img: { infrastructure }
   }, {
      id: 3,
      title: "Expertise",
      para: "Our team of high caliber professionals is skilled in defining, configuring, and implementing streamlined processes to improve efficiency, customer service, and quality. The team includes professionals who are certified in Revenue Cycle Management, Professional Facility Billing, and Coding Services. This expertise ensures that we can deliver high-quality services to its clients.",
      img: { expertise }
   }
]