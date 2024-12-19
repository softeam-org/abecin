interface Props {
    title: string
    description: string
    icon: string
}

export default function Card({ title, description, icon}: Props) {
	return (
		<div className="max-w-md flex gap-4">
			<div className="max-h-32 w-32 flex items-center justify-center align-middle bg-abecin-secondary rounded-3xl p-8">
                <i className={`fa-solid text-white text-5xl ${icon}`}/>
            </div>
            <div className="max-w-[278px] flex flex-col gap-2">
                <h1 className="text-xl font-bold">{title}</h1>
                <p className="text-base font-semibold text-[#535353]">{description}</p>
            </div>
		</div>
	)
}
