import React from 'react'
import { useParams } from 'react-router-dom'
import { detailsData } from '../data'
import Footer from '../elements/Footer'
import Header from '../elements/Header'

const Details = () => {
	const { serviceName } = useParams()

	return (
		<div>
			<Header />
			<div>
				{detailsData.map(({ route, img, para, title }) => {
					if (route === serviceName) {
						console.log('route', serviceName, route)
						return (
							<div className="flex">
								<div className="p-4 md:py-10 md:px-24 w-full flex-col md:flex flex-wrap mx-auto">
									<div className="w-full md:w-8/12 pr-6 text-justify">
										<h1 className="text-5xl font-bold py-5">{title}</h1>
										<div className="text-md font-medium text-gray-500">
											{para}
										</div>
									</div>
									<div className="w-full md:w-4/12 h-full pt-24 px-4">
										{img}
									</div>
								</div>
							</div>
						)
					}
					return null
				})}
			</div>
			<Footer />
		</div>
	)
}

export default Details
