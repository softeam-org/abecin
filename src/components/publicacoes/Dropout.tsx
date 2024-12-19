'use client'

interface Props {
	title: string
    publish?: boolean
	list: string[]
}

export default function Droptout({ title, publish = true }: Props) {
	return (
		<div className="cursor-pointer">
			<div className="border-2 rounded-xl px-8 py-4 items-center border-abecin-primary text-abecin-primary flex flex-row justify-between">
				<i className={`fa-regular text-xl ${publish? 'fa-circle-check' : 'fa-circle-xmark'}`} />
				<h1 className="font-bold mx-8">{title}</h1>
                <i className="fa-solid fa-angle-down" />
			</div>
		</div>
	)
}
