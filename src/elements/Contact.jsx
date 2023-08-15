import React from 'react'
import { VscLocation } from 'react-icons/vsc'
const Contact = () => {
	return (
		<div className="flex-col flex-wrap">
			<div className="w-full">
				<h1 className="text-4xl underline decoration-sky-400 underline-offset-8 text-center py-16 bg-[#F1F7FD] font-bold text-[#2c4964]">
					Contact
				</h1>
			</div>
			<div></div>
			<div className="flex flex-wrap justify-center bg-[#F1F7FD] py-16">
				<div>
					<div className="w-2/10 rounded-xl items-center ">
						<VscLocation />
					</div>
					<div className="w-8/10">
						<h2 className="text-2xl font-semibold">Location</h2>
						<p className="text-md font-normal text-[#4b7dab]">
							<strong>Address 1:</strong> 12345 West East
							dyfggbfhdbjfndskjncjhfbdhxbvcsnkjdnc
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
