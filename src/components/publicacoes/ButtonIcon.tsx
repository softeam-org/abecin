import Link from 'next/link'
interface Props {
	title: string
	icon: string
	link: string
}

export default function ButtonIcon({ title, icon, link }: Props) {
	return (
		<Link href={link}>
			<button className="flex flex-row gap-2 items-center rounded-lg font-bold border-abecin-secondary text-abecin-secondary border-2 py-4 px-6 hover:text-white hover:bg-abecin-primary delay-75">
				<i className={`fa-solid ${icon}`} />
				{title}
			</button>
		</Link>
	)
}
