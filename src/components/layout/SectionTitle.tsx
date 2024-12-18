interface Props {
	title: string
}

export default function SectionTitle({ title }: Props) {
	return (
		<h2 className="px-8 text-center font-bold text-3xl text-[#292929]">
			{title}
		</h2>
	)
}
