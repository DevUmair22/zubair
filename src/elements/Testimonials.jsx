import { Rating } from '@mui/material'
import React from 'react'
import Slider from 'react-slick'

const Testimonials = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 3, // Show two slides at a time
		slidesToScroll: 1,
		autoplay: false,
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: 'linear',
	}
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

	return (
		<section className="py-12 bg-gray-50">
			<div className="px-4 mx-auto max-w-7xl">
				<div className="text-center">
					<p className="text-lg font-medium text-gray-600 font-pj">
						29 people have said how good MedbillMasters
					</p>
					<h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
						What Our Clients Say About Us?
					</h2>
				</div>
				<div className="w-full flex justify-center flex-wrap mx-auto pt-10 ">
					<Slider {...settings} className=" w-full h-[100vh] ">
						{contentBlog.map((item, index) => (
							<div className="w-4/12 p-4 ">
								<div className="p-10 bg-white  border-gray-100 border-1 shadow-xl rounded-xl text-center">
									<blockquote
										className="text-lg leading-relaxed text-gray-900 font-pj"
										style={{ clipRule: 'evenodd' }}
									>
										{/* {console.log('text', item.desc)} */}
										{item.desc}
									</blockquote>
									<Rating
										className=" py-4 mx-auto flex"
										name="read-only"
										value={3}
										readOnly
									/>
									<div className="mt-8">
										<p className="text-base font-bold text-gray-900 font-pj">
											{item.name}
										</p>
										<p className="mt-0.5 text-sm font-pj text-gray-600">
											Freelance React Developer
										</p>
									</div>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</section>
	)
}

export default Testimonials
// import React from 'react'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick-theme.css'
// import 'slick-carousel/slick/slick.css'

// const Testimonials = () => {
// 	const settings = {
// 		dots: true,
// 		infinite: true,
// 		slidesToShow: 2,
// 		slidesToScroll: 1,
// 		autoplay: true,
// 		speed: 2000,
// 		autoplaySpeed: 2000,
// 		cssEase: 'linear',
// 	}

// 	return (
// 		<section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
// 			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
// 				<div className="flex flex-col items-center">
// 					<div className="text-center">
// 						<p className="text-lg font-medium text-gray-600 font-pj">
// 							29 people have said how good MedbillMasters
// 						</p>
// 						<h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
// 							What Our clients say about us?
// 						</h2>
// 					</div>
// 					<div className="w-full flex justify-center flex-wrap mx-auto">
// 						<Slider {...settings}>
// 							{contentBlog.map((item, index) => (
// 								<div key={index} className="shadow-xl w-1/2 p-4">
// 									<div className="p-6">
// 										<blockquote className="text-lg leading-relaxed text-gray-900">
// 											{item.desc}
// 										</blockquote>
// 										<div className="mt-8">
// 											<p className="text-base font-bold text-gray-900">
// 												{item.name}
// 											</p>
// 											<p className="mt-0.5 text-sm text-gray-900">
// 												Freelance React Developer
// 											</p>
// 										</div>
// 									</div>
// 								</div>
// 							))}
// 						</Slider>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	)
// }

// export default Testimonials

// import Slider from 'react-slick'

// const Testimonials = () => {
// 	const settings = {
// 		dots: true,
// 		infinite: true,

// 		slidesToShow: 2,
// 		slidesToScroll: 1,
// 		autoplay: true,
// 		speed: 2000,
// 		autoplaySpeed: 2000,
// 		cssEase: 'linear',
// 	}

// 	return (
// 		<section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
// 			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
// 				<div className="flex flex-col items-center">
// 					<div className="text-center">
// 						<p className="text-lg font-medium text-gray-600 font-pj">
// 							29 people have said how good MedbillMasters
// 						</p>
// 						<h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
// 							What Our clients say about us?
// 						</h2>
// 					</div>{' '}
// 					<div className="w-full bg-black flex justify-center  flex-wrap mx-auto">
// 						<div className="w-8/12 flex bg-white">
// 							<Slider {...settings}>
// 								{contentBlog.map((item) => (
// 									<div className="shadow-xl flex bg-black w-5/12 ">
// 										<div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
// 											<div className="flex-1">
// 												<blockquote className="flex-1 mt-8">
// 													<p className="text-lg leading-relaxed text-gray-900 font-pj">
// 														{item.desc}
// 													</p>
// 												</blockquote>
// 											</div>

// 											<div className="flex items-center mt-8">
// 												<div className="ml-4">
// 													<p className="text-base font-bold text-gray-900 font-pj">
// 														{item.name}
// 													</p>
// 													<p className="mt-0.5 text-sm font-pj text-gray-600">
// 														Freelance React Developer
// 													</p>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								))}
// 							</Slider>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	)
// }

// export default Testimonials
