import { Rating, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import Slider from 'react-slick'
const Testimonials = () => {
	const theme = useTheme()
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: isSmallScreen ? 1 : 3, // Show two slides at a time
		slidesToScroll: 1,
		speed: 2000,
		autoplay: true,

		autoplaySpeed: isSmallScreen ? 500 : 2000,
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
		<section className="pt-12 bg-gray-50">
			{console.log('breakpoint', isSmallScreen)}
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
					<Slider {...settings} className=" w-full h-full">
						{contentBlog.map((item, index) => (
							<div className="w-full p-2 sm:p-4 ">
								<div className="w-full p-6 sm:p-10 bg-white  border-gray-100 border-1 shadow-xl rounded-xl text-center">
									<blockquote
										className="text-lg leading-relaxed text-gray-900 font-pj text-center"
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
