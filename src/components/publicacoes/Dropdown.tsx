'use client'
import { useState } from 'react'

interface Props {
	title: string
	publish?: boolean
	list: string[]
}

export default function Droptdown({ title, publish = true, list }: Props) {
	const [isListVisible, setIsListVisible] = useState(false)

	const toggleListVisibility = () => {
		setIsListVisible(prevState => !prevState)
	}

	return (
		<div className="cursor-pointer">
			<div
				className="border-2 rounded-xl px-8 py-4 items-center border-abecin-primary text-abecin-primary flex flex-row justify-between"
				onClick={toggleListVisibility}
			>
				<i
					className={`fa-regular text-xl ${
						publish ? 'fa-circle-check' : 'fa-circle-xmark'
					}`}
				/>
				<h1 className="font-bold mx-8">{title}</h1>
				<i
					className={`fa-solid ${
						isListVisible ? 'fa-angle-up' : 'fa-angle-down'
					}`}
				/>
			</div>

			<div
				className={`transition-all duration-1000 overflow-hidden ${
					isListVisible ? 'max-h-64' : 'max-h-0'
				}`}
			>
				<ul className="pl-8 mt-4">
					{list.map((item, index) => (
						<li
							key={index}
							className="flex flex-row font-medium mt-2 gap-4 items-center text-abecin-primary"
						>
							<i
								className={`fa-solid ${
									publish ? 'fa-check' : 'fa-xmark'
								}`}
							/>
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
