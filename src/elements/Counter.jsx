import React, { useEffect, useState } from 'react'

const Counter = ({ icon, title, targetValue }) => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			if (count < targetValue) {
				setCount((prevCount) => prevCount + 1)
			}
		}, 10) // Adjust the interval as needed

		return () => {
			clearInterval(interval)
		}
	}, [count, targetValue])

	return (
		<div className="w-3/12 mx-4 bg-white shadow-md relative">
			<div className="text-center">
				<div
					className="bg-[#092A44] text-white rounded-full p-4 inline-block mb-2 relative"
					style={{ top: '-26px' }}
				>
					{icon}
				</div>
			</div>
			<div className=" text-center pb-4">
				<div className="flex justify-center items-center ">
					<span className="mx-auto text-3xl font-semibold">{count}</span>
				</div>
				<h3 className="text-md">{title}</h3>
			</div>
		</div>
	)
}

export default Counter
