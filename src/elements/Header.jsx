import React from 'react'
import { Link } from 'react-router-dom'
import { icons } from '../data'
import logo from '../images/logo.png'
const links = [
	{ title: ' Home', id: 1, route: '/' },
	{ title: 'About Us', id: 2, route: '/about' },
	{ title: 'Services', id: 3, route: '/services' },
	{ title: 'Expertise', id: 4, route: '/expertise' },
	{ title: 'Infrastructure', id: 5, route: '/infrastructure' },
	{ title: 'Strengths', id: 6, route: '/strengths' },
]
const Header = () => {
	return (
		<div className="px-16 bg-white border-gray-200 shadow-xl">
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
			<nav className=" ">
				<div className="max-w-screen-xl flex flex-row flex-wrap mx-auto justify-between p-2">
					<a href="medbillmaster.org" className="flex justify-start">
						<img src={logo} className="h-10 mr-3" alt=" Logo" />
					</a>
					<div className="flex flex-wrap ">
						<div className="flex  md:order-2 ">
							<Link to="/contact">
								<button
									type="button"
									className="text-white bg-sky-500 hover:bg-sky-600  focus:outline-none text-md rounded-full font-medium px-5 py-2 text-center "
								>
									Get started
								</button>
							</Link>
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
						<div className=" hidden items-center mx-auto  md:flex md:order-1">
							<ul className="flex flex-col text-md font-normal px-4 py-4 md:px-4 md:py-2 mt-2 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 md:mt-0 md:border-0 md:bg-white">
								{links.map((link, id) => (
									<li key={id}>
										<Link
											to={link.route}
											className="block p-6 pl-3 pr-4 text-white border-b-2 border-white border-solid hover:border-b-2 hover:border-blue-500 bg-blue-700 md:bg-transparent md:text-[#2c4964] hover:text-[#092A44] md:p-0 "
										>
											{link.title}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Header
