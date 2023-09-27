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
      title: "Competency",
      para: < p>At MBCS (Medical Billing Consultancy & Solutions), our strengths are the pillars upon which we build trust, deliver excellence, and stand out as a leading name in the healthcare industry. We take immense pride in our capabilities and attributes that set us apart:<br /><br />
         <b>  Expertise and Experience:</b>    With years of hands-on experience, our team boasts an exceptional depth of knowledge in medical billing, coding, and revenue cycle management. We understand the intricacies of the healthcare

         landscape and possess the expertise to navigate its challenges seamlessly.<br /><br />

         <b>  Comprehensive Solutions: </b>MBCS offers comprehensive solutions covering a wide spectrum of healthcare revenue management, including medical billing,
         coding, credentialing, denial management, and more. Our all-encompassing approach ensures that our clients have a single, reliable source for all their revenue-related needs.<br /><br />

         <b> Cutting-Edge Technology:</b> We harness the power of cutting-edge technology to streamline processes, enhance accuracy, and expedite revenue cycles. Our commitment to innovation ensures that our clients benefit from the latest advancements in healthcare billing and management.<br /><br />

         <b> Customized Services: </b>   We recognize that each healthcare provider has unique needs. Therefore, our services are tailored to meet individual requirements, ensuring that our clients receive solutions that align with their specific practice goals and objectives.<br /><br />

         <b> Compliance and Security: </b>Adherence to industry regulations, especially HIPAA compliance, is at the core of our operations. We prioritize data security and confidentiality, employing the highest standards of protection to safeguard sensitive healthcare information.<br /><br />

         <b>Proactive Denial Management:</b>Our proactive approach to denial management minimizes revenue loss and optimizes cash flow. We identify and rectify issues swiftly, ensuring that our clients receive maximum reimbursements.<br /><br />

         <b> Transparent Reporting:</b> Transparency is key to our client relationships. We

         provide detailed and transparent reports on billing activities, claim statuses, and reimbursements. Our clients are kept well-informed, empowering them to make informed financial decisions.
         <br /><br />

         <b>  Dedicated Support:</b> Our commitment to delivering exceptional service extends to our round-the-clock customer support. We are available 24/7 to address inquiries, offer assistance, and provide solutions promptly.<br /><br />



         < b >Cost Efficiency:</b >  MBCS understands the financial challenges faced by healthcare providers. Our services are designed to enhance revenue while

         minimizing operational costs, resulting in significant cost savings for our
         clients.< br /> <br />

         <b>Continuous Learning:</b>  In the ever-evolving healthcare landscape, staying
         updated is imperative. Our team actively engages in ongoing training and education to keep abreast of changing regulations, payer policies, and industry trends.< br /> <br />

         <b>Client-Centric Approach:</b> We put our clients at the center of everything we do. Our client-centric approach ensures that their unique needs and goals are at the forefront of our service delivery.< br /> <br />

         <b>Proven Track Record:</b>  Our track record of success and the trust placed in us by a diverse client base speak volumes about the quality of our services and

         the results we deliver.< br /> <br /><br /><br /><br />

         MBCS's strengths are a testament to our unwavering commitment to excellence, innovation, and client satisfaction. We continuously strive to raise the bar in healthcare revenue management, and our strengths drive us forward in achieving that goal.</p>,
      img: <img src={strength} height="100%" width="100%" alt="pic" />,
      route: 'competency'
   }, {
      id: 2,
      title: "Infrastructure",
      para: <p>Medbillmaster has a well-built space with excellent IT support and security measures in place. This ensures that the organization can operate smoothly and securely. The integrated cloud-enabled system allows for efficient data management and accessibility. We adhere to strict file transfer and data management protocols to maintain compliance with HIPAA and PHI regulations, ensuring the privacy and security of sensitive healthcare information. The availability of a 24/7 customer service helpline highlights the organization's commitment to providing prompt and reliable support to its clients.<br /><br />

         Our skilled team with advanced and efficient technical infrastructure and a focus on security and compliance, enables us to deliver outstanding healthcare support services to our clients and stakeholders.</p>,
      img: <img src={infrastructure} height="100%" width="100%" alt="pic" />,
      route: 'infrastructure'
   }, {
      id: 3,
      title: "Expertise",
      para: <p>Our team of high caliber professionals is skilled in defining, configuring, and implementing streamlined processes to improve efficiency, customer service, and quality. The team includes professionals who are certified in Revenue Cycle Management, Professional Facility Billing, and Coding Services. This expertise ensures that we can deliver high-quality services to its clients.</p>,
      img: <img src={expertise} height="100%" width="100%" alt="pic" />,

      route: 'expertise'
   }
]


