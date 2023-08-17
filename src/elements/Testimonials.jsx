const Testimonials = () => {
	const contentBlog = [
		{
			name: 'Number one',
			desc: 'Our denials have significantly reduced since Medbillmaster took over the process and help us with eligibility verification and authorizations of procedures. I would recommend Medbillmaster highly to dentists looking to improve their insurance billing and reimbursement.',
		},
		{
			name: 'Number two',
			desc: 'Our denials have significantly reduced since Medbillmaster took over the process and help us with eligibility verification and authorizations of procedures. I would recommend Medbillmaster highly to dentists looking to improve their insurance billing and reimbursement.',
		},
		{
			name: 'Number three',
			desc: 'Our denials have significantly reduced since Medbillmaster took over the process and help us with eligibility verification and authorizations of procedures. I would recommend Medbillmaster highly to dentists looking to improve their insurance billing and reimbursement.',
		},
	]

	// const settings = {
	// 	arrows: true,
	// 	slidesToShow: 2,
	// 	infinite: true,
	// 	dots: true,
	// 	slidesToScroll: 1,
	// 	speed: 500,

	// 	responsive: [
	// 		{
	// 			breakpoint: 1200,
	// 			settings: {
	// 				slidesToShow: 3,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 1024,
	// 			settings: {
	// 				slidesToShow: 3,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 991,
	// 			settings: {
	// 				slidesToShow: 2,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 480,
	// 			settings: {
	// 				slidesToShow: 1,
	// 			},
	// 		},
	// 	],
	// }

	return (
		// <div className="w-full ">
		// 	<div className="py-10 text-center text-gray-700 ">
		// 		<h6 className="text-4xl font-bold py-2">
		// 			What our clients say about us
		// 		</h6>
		// 		<h2 className="text-lg font-medium">Clients Words</h2>

		// 		<div className="w-full flex flex-wrap h-[100vh]">
		// 			<Slider className="text-black " {...settings}>
		// 				{contentBlog.map((item, index) => (
		// 					<div className=" bg-black p-6" key={index}>
		// 						<h1 className="text-lg font-bold">{item.name}</h1>
		// 						<p>
		// 							<RiDoubleQuotesL />
		// 							{item.desc}
		// 							<RiDoubleQuotesR />
		// 						</p>
		// 					</div>
		// 				))}
		// 			</Slider>
		// 		</div>
		// 	</div>
		// </div>

		<section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="flex flex-col items-center">
					<div className="text-center">
						<p className="text-lg font-medium text-gray-600 font-pj">
							29 people have said how good MedbillMasters
						</p>
						<h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
							What Our clients say about us?
						</h2>
					</div>

					<div className="relative mt-5 md:mt-24 md:order-2">
						<div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
							<div className="flex flex-col overflow-hidden shadow-xl">
								<div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
									<div className="flex-1">
										<div className="flex items-center">
											<svg
												className="w-5 h-5 text-[#FDB241]"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg
												className="w-5 h-5 text-[#FDB241]"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg
												className="w-5 h-5 text-[#FDB241]"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg
												className="w-5 h-5 text-[#FDB241]"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg
												className="w-5 h-5 text-[#FDB241]"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										</div>

										<blockquote className="flex-1 mt-8">
											<p className="text-lg leading-relaxed text-gray-900 font-pj">
												“You made it so simple. My new site is so much faster
												and easier to work with than my old site. I just choose
												the page, make the change.”
											</p>
										</blockquote>
									</div>

									<div className="flex items-center mt-8">
										<img
											className="flex-shrink-0 object-cover rounded-full w-11 h-11"
											src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
											alt=""
										/>
										<div className="ml-4">
											<p className="text-base font-bold text-gray-900 font-pj">
												Leslie Alexander
											</p>
											<p className="mt-0.5 text-sm font-pj text-gray-600">
												Freelance React Developer
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="flex flex-col overflow-hidden shadow-xl">
								<div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
									<div className="flex-1">
										<div className="flex items-center">
											<svg
												className="w-5 h-5 text-[#FDB241]"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg
												className="w-5 h-5 text-[#FDB241]"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg
												className="w-5 h-5 text-[#FDB241]"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg
												className="w-5 h-5 text-[#FDB241]"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg
												className="w-5 h-5 text-[#FDB241]"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										</div>

										<blockquote className="flex-1 mt-8">
											<p className="text-lg leading-relaxed text-gray-900 font-pj">
												“Simply the best. Better than all the rest. I’d
												recommend this product to beginners and advanced users.”
											</p>
										</blockquote>
									</div>

									<div className="flex items-center mt-8">
										<img
											className="flex-shrink-0 object-cover rounded-full w-11 h-11"
											src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
											alt=""
										/>
										<div className="ml-4">
											<p className="text-base font-bold text-gray-900 font-pj">
												Jacob Jones
											</p>
											<p className="mt-0.5 text-sm font-pj text-gray-600">
												Digital Marketer
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="flex flex-col overflow-hidden shadow-xl">
								<div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
									<div className="flex-1">
										<div className="flex items-center">
											<svg
												className="w-5 h-5 text-[#FDB241]"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg
												className="w-5 h-5 text-[#FDB241]"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg
												className="w-5 h-5 text-[#FDB241]"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg
												className="w-5 h-5 text-[#FDB241]"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
											<svg
												className="w-5 h-5 text-[#FDB241]"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										</div>

										<blockquote className="flex-1 mt-8">
											<p className="text-lg leading-relaxed text-gray-900 font-pj">
												“I cannot believe that I have got a brand new landing
												page after getting Omega. It was super easy to edit and
												publish.”
											</p>
										</blockquote>
									</div>

									<div className="flex items-center mt-8">
										<img
											className="flex-shrink-0 object-cover rounded-full w-11 h-11"
											src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
											alt=""
										/>
										<div className="ml-4">
											<p className="text-base font-bold text-gray-900 font-pj">
												Jenny Wilson
											</p>
											<p className="mt-0.5 text-sm font-pj text-gray-600">
												Graphic Designer
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Testimonials
