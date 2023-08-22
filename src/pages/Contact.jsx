import React from 'react'
import { BiPhone } from 'react-icons/bi'
import { FaMobileAlt } from 'react-icons/fa'
import icons from '../data'
import Footer from '../elements/Footer'
import Header from '../elements/Header'

import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Contact = () => {
	const form = useRef()

	const sendEmail = (e) => {
		e.preventDefault()

		emailjs
			.sendForm(
				'service_3549gh9',
				'template_u0j9ssw',
				form.current,
				'YN2AgIT_Zq9Xs514V5'
			)
			.then(
				(result) => {
					console.log(result.text)
				},
				(error) => {
					console.log(error.text)
				}
			)
	}
	return (
		<div>
			<Header />
			<div className="p-20 bg-gray-50">
				<h1 className="text-gray-800 text-4xl font-bold py-4">Contact Us</h1>
				<div className="flex flex-wrap pl-8">
					<div className="w-2/5">
						<h1 className="py-4 text-2xl font-bold">GET IN TOUCH</h1>
						<div className="  pr-24">
							<h1 className="text-xl font-bold py-1">Address 1:</h1>
							<p className="text-md py-1">
								145 West Ostend Street, Suit 600, Baltimore, MD. 21230, USA
							</p>
							<h1 className="text-xl font-bold py-1">Address 2:</h1>
							<p className="text-md py-1">
								30 N Gould St Sheridan, WY 82801, USA
							</p>
							<h1 className="text-xl font-bold py-2">Email</h1>
							<p className="text-md">Queries@medbillmaster.com</p>
							<div className="py-6 text-sm">
								<h1 className="text-xl font-bold py-2">Phone</h1>
								<p className=" flex flex-wrap items-center">
									<BiPhone className="mr-1 text-black" size="1rem" />
									(Office) 410 415 9697
								</p>
								<p className=" flex flex-wrap items-center">
									<FaMobileAlt className="mr-1 text-black" size="1rem" />
									(Cell) 410 399 8386
								</p>
							</div>
						</div>

						<h1 className="text-3xl font-bold py-2">Follow Us</h1>
						<ul className="flex flex-wrap">
							{icons.map((item) => (
								<li className="mr-2 text-2xl bg-sky-500 rounded-xl p-2 text-white ">
									{item}
								</li>
							))}
						</ul>
					</div>
					<div className="w-3/5 pr-64">
						<h1 className="py-4 text-2xl font-bold">SEND US A MESSAGE</h1>

						<form ref={form} onSubmit={sendEmail}>
							<div className="mb-4">
								<input
									type="name"
									name="user_name"
									id="name"
									className="text-gray-900 text-sm rounded-full  focus:ring-2 block w-full p-2.5 focus:outline-none focus:ring-gray-500"
									placeholder="Enter Name..."
								/>
							</div>
							<div className="mb-4">
								<input
									type="email"
									id="email"
									name="user_email"
									className="text-gray-900 text-sm rounded-full  focus:ring-2 block w-full p-2.5 focus:outline-none focus:ring-gray-500"
									placeholder="Enter Email..."
								/>
							</div>
							<div className="mb-4">
								<textarea
									id="message"
									rows="4"
									name="user_message"
									className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-xl focus:ring-2 focus:outline-none focus:ring-gray-300"
									placeholder="Enter your message..."
								></textarea>
							</div>
							<button
								type="submit"
								className="text-white  bg-[#092A44] focus:outline-none font-medium rounded-full text-sm w-full  px-5 py-2.5 text-center "
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Contact
