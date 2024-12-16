interface Props {
	title: string
}

export default function PageTitle({ title }: Props) {
	return (
		<h1 className="text-3xl font-bold relative">
			{title}
			<span className="block w-16 h-2 bg-[#4A1861] absolute left-0"></span>
		</h1>
	)
}
