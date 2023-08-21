import React from 'react'
import { TiArrowRight } from 'react-icons/ti'
import { Link } from 'react-router-dom'
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
		<footer class="  bg-[#092A44]">
			<div className="flex flex-wrap bg-gray-100 px-20">
				<div className="w-4/12"></div>
				<div className="w-2/12">
					<h1>Useful Links</h1>
					<ul>
						{useful.map((item) => (
							<Link to={item.link}>
								<li className="flex">
									<TiArrowRight size="1rem" />
									{item.title}
								</li>
							</Link>
						))}
					</ul>
				</div>
				<div className="w-3/12">
					<h1>Our Services</h1>
					<ul>
						{serviceList.map((item) => (
							<Link to={item.link}>
								<li className="flex">
									<TiArrowRight size="1rem" />
									{item.title}
								</li>
							</Link>
						))}
					</ul>
				</div>
				<div className="w-3/12">
					<h1>Email</h1>
					<p>Queries@medbillmaster.com</p>
					<h1>Follow Us</h1>
				</div>
			</div>
			<div class="mx-auto w-full max-w-screen-xl p-4 py-6  lg:py-8 text-black px-20">
				<div class="sm:flex sm:items-center sm:justify-between ">
					<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
						© 2023{' '}
						<a href="#" class="hover:underline text-yellow-500">
							MEDBILLMASTER™
						</a>
						. All Rights Reserved.
					</span>
					<div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
						<a
							href="#"
							class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
						>
							<svg
								class="w-4 h-4"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 8 19"
							>
								<path
									fill-rule="evenodd"
									d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="sr-only">Facebook page</span>
						</a>

						<a
							href="#"
							class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
						>
							<svg
								class="w-4 h-4"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 17"
							>
								<path
									fill-rule="evenodd"
									d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="sr-only">Twitter page</span>
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
