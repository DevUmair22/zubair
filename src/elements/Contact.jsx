import React from 'react'
import { BiVoicemail } from 'react-icons/bi'
import { MdCall } from 'react-icons/md'
import { VscLocation } from 'react-icons/vsc'
import map from '../images/map.png'

const Contact = () => {
	return (
		<div className="flex-col flex-wrap  bg-[#F1F7FD]">
			<div className="w-full">
				<h1 className="text-4xl underline decoration-sky-400 underline-offset-8 text-center py-16  font-bold text-[#2c4964]">
					Contact
				</h1>
			</div>
			<div>
				<img src={map} alt="map" />
			</div>
			<div className="flex flex-wrap justify-center p-16">
				<div className="flex w-4/12">
					<div className="w-2/12 pr-4">
						<div className="w-12 m-auto rounded-full bg-[#c3dbef] hover:bg-[#092A44] text-[#092A44] p-3 hover:text-white">
							<VscLocation size="1.5rem" className="mx-auto" />
						</div>
					</div>

					<div className="w-10/12">
						<h2 className="text-2xl font-semibold">Location</h2>
						<p className="text-md font-normal text-[#4b7dab]">
							<strong>Address 1:</strong> 12345 West East
							dyfggbfhdbjfndskjncjhfbdhxbvcsnkjdnc
						</p>
					</div>
				</div>

				<div className="flex w-4/12 px-4">
					<div className="w-2/12 pr-4">
						<div className="w-12 m-auto rounded-full bg-[#c3dbef] hover:bg-[#092A44] text-[#092A44] p-3 hover:text-white">
							<BiVoicemail size="1.5rem" className="mx-auto" />
						</div>
					</div>

					<div className="w-10/12">
						<h2 className="text-2xl font-semibold">Email</h2>
						<p className="text-md font-normal text-[#4b7dab]">
							queries@medbillmaster.com
						</p>
					</div>
				</div>
				<div className="flex w-4/12 px-4">
					<div className="w-2/12 pr-4 ">
						<div className="w-12 m-auto rounded-full bg-[#c3dbef] hover:bg-[#092A44] text-[#092A44] p-3 hover:text-white">
							<MdCall size="1.5rem" className="mx-auto" />
						</div>
					</div>

					<div className="w-10/12">
						<h2 className="text-2xl font-semibold">Call</h2>
						<p className="text-md font-normal text-[#4b7dab]">
							(Office) 410 415 9697 <br />
							(Office) 410 415 9697
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
