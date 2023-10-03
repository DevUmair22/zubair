import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { icons } from '../data'
import logo from '../images/logo.png'

const links = [
	{ title: ' Home', id: 1, route: '/' },
	{ title: 'About Us', id: 2, route: '/about' },
	{ title: 'Services', id: 3, route: '/services' },
	{ title: 'Expertise', id: 4, route: '/details/expertise' },
	{ title: 'Infrastructure', id: 5, route: '/details/infrastructure' },
	{ title: 'Competency', id: 6, route: '/details/competency' },
]

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	const handleScroll = () => {
		if (window.scrollY < 0) {
			setMenuOpen(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div className={`bg-white sticky top-0 z-50 ${menuOpen ? 'w-screen' : ''}`}>
			{/* Top Bar */}
			<div
				className={`flex bg-white border border-gray-100 max-w-full  ${
					menuOpen ? 'hidden' : ''
				}`}
			>
				<div className="flex justify-around items-center mx-auto p-1 w-full ">
					<div className=" sm:block w-1/2 text-center">
						queries@medbillmaster.com
					</div>
					<div className="hidden sm:block w-1/2">
						<ul className="flex justify-center">
							{icons.map((icon, index) => (
								<li key={index} className="text-black mx-2 ">
									{icon}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>

			{/* Navigation */}
			<nav className="max-w-full  px-0 py-2 ">
				<div className="flex items-center justify-around p-2 mx-auto w-full">
					<a href="/" className="flex items-center">
						<img src={logo} className="h-12 mr-3" alt="Logo" />
					</a>
					<div className="hidden sm:flex space-x-4 items-center">
						{links.map((link, id) => (
							<Link
								key={id}
								to={link.route}
								className=" pl-3 pr-4 border-b-2 border-white border-solid hover:border-b-2 hover:border-blue-500 bg-blue-700 sm:bg-transparent sm:text-[#2c4964] hover:text-[#092A44] sm:p-0 "
							>
								{link.title}
							</Link>
						))}
						<Link
							to="/contact"
							className="text-white bg-sky-500 hover:bg-sky-600 rounded-full px-4 py-2"
						>
							Contact Us
						</Link>
					</div>
					<button
						onClick={() => setMenuOpen(!menuOpen)}
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
						aria-expanded={menuOpen}
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-5 h-5"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
				{/* Mobile Navigation */}
				{menuOpen && (
					<ul className="flex flex-col text-md font-normal px-4 py-4 mt-2 border rounded-lg bg-gray-50 space-y-2 sm:hidden">
						{links.map((link, id) => (
							<li key={id}>
								<Link
									to={link.route}
									className="block px-4 py-1 text-gray-700 hover:text-gray-500"
								>
									{link.title}
								</Link>
							</li>
						))}
						<li>
							<Link
								to="/contact"
								className="block px-4 py-2 text-white bg-sky-500 hover:bg-sky-600 text-center rounded-md"
							>
								Contact Us
							</Link>
						</li>
					</ul>
				)}
			</nav>
		</div>
	)
}

export default Header
