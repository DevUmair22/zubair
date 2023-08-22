import React from 'react'
import { BiPhone } from 'react-icons/bi'
import { FaMobileAlt } from 'react-icons/fa'
import { TiArrowRight } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { icons } from '../data'

const Footer = () => {
	const serviceList = [
		{ title: 'Patient Access Services', link: '' },
		{ title: 'Contract management', link: '' },
		{ title: 'Professional/ Institutional Billing', link: '' },
		{ title: 'Healthcare Analytics', link: '' },
		{ title: 'Coding', link: '' },
		{ title: 'Accounts Recievable and Denial Management', link: '' },
	]
	const useful = [
		{ title: 'Home', link: '' },
		{ title: 'About Us', link: '' },
		,
		{ title: 'Services', link: '' },
		,
		{ title: 'Expertise', link: '' },
		,
		{ title: 'Infrastructure', link: '' },
		,
		{ title: 'Strengths', link: '' },
		,
	]
	return (
		<footer class="  bg-[#092A44] ">
			<div className="flex flex-wrap bg-white px-20 shadow-inner">
				<div className="w-4/12 py-8 pr-8">
					<h1 className="py-2 text-3xl font-medium">Medbillmaster</h1>
					<h4 className="text-sm text-sky-500 font-bold italic pb-4">
						"Building trust with confidence"
					</h4>
					<p className="text-sm py-1">
						<b>Address 1:</b> 145 West Ostend Street, Suit 600, Baltimore, MD.
						21230, USA
					</p>
					<p className="text-sm py-1">
						<b>Address 2:</b>Address 2: 30 N Gould St Sheridan, WY 82801, USA
					</p>

					<div className="py-6 text-sm">
						<p className="py-1 flex flex-wrap items-center">
							<BiPhone className="mr-1 text-black" size="1rem" />
							(Office) 410 415 9697
						</p>
						<p className="py-1 flex flex-wrap items-center">
							<FaMobileAlt className="mr-1 text-black" size="1rem" />
							(Cell) 410 399 8386
						</p>
					</div>
				</div>
				<div className="w-2/12 py-8 text-sm">
					<h1 className="text-[1rem] font-bold py-2 ml-4">Useful Links</h1>
					<ul>
						{useful.map((item) => (
							<Link to={item.link}>
								<li className="flex items-center py-2 hover:text-black cursor-pointer decoration-sky-500 hover:underline">
									<TiArrowRight size="1rem" className="text-sky-500 mr-2" />
									{item.title}
								</li>
							</Link>
						))}
					</ul>
				</div>
				<div className="w-3/12 py-8 text-sm">
					<h1 className="text-[1rem] font-bold py-2 ml-4">Our Services</h1>
					<ul>
						{serviceList.map((item) => (
							<Link to={item.link}>
								<li className="hover:text-black cursor-pointer flex items-center py-2 decoration-sky-500 hover:underline">
									<TiArrowRight size="1rem" className="text-sky-500 mr-2" />
									{item.title}
								</li>
							</Link>
						))}
					</ul>
				</div>
				<div className="w-3/12 py-8  pl-4">
					<h1 className="text-md font-bold py-2">Email</h1>
					<p className="py-2">Queries@medbillmaster.com</p>
					<h1 className="text-md font-bold py-2">Follow Us</h1>
					<ul className="flex flex-wrap">
						{icons.map((item) => (
							<li className="mr-2 text-2xl bg-sky-500 rounded-xl p-2 text-white ">
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
			<div class="mx-auto w-full max-w-screen-xl p-4 py-6  lg:py-8 text-black px-20">
				<div class="sm:flex sm:items-center sm:justify-between ">
					<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
						© 2023{' '}
						<a href="#" class="hover:underline text-sky-500">
							MEDBILLMASTER™
						</a>
						. All Rights Reserved.
					</span>
				</div>
			</div>
		</footer>
	)
}

export default Footer
