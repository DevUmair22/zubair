import React from 'react'
import { Link } from 'react-router-dom'
import icons from '../data'

const links = [
	{' Home',id:1}
	'About Us',
	'Services',
	'Expertise',
	'Infrastructure',
	'Strengths',
]
const Header = () => {
	return (
		<div>
			<div className="flex flex-wrap justify-between mx-auto px-3   py-3 items-center max-w-screen-xl">
				<div>queries@medbillmaster.com</div>
				<div>
					<ul className="flex flex-wrap">
						{icons.map((icon) => (
							<li className="text-black mx-auto px-2">{icon}</li>
						))}
					</ul>
				</div>
			</div>
			<nav className="bg-white border-gray-200 shadow-xl">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<a href="https://flowbite.com/" className="flex items-center">
						<img
							src="https://flowbite.com/docs/images/logo.svg"
							className="h-8 mr-3"
							alt="Flowbite Logo"
						/>
						<span className="self-center text-2xl font-semibold whitespace-nowrap ">
							Flowbite
						</span>
					</a>
					<div className="flex md:order-2">
						<button
							type="button"
							className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0   "
						>
							Get started
						</button>
						<button
							data-collapse-toggle="navbar-cta"
							type="button"
							className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
							aria-controls="navbar-cta"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className="w-5 h-5"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 17 14"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M1 1h15M1 7h15M1 13h15"
								/>
							</svg>
						</button>
					</div>
					<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
						<ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
							{links.map((link) => (
								<li>
									<Link
										to="#"
										className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
									>
										{link}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Header
