interface TextBoxProps {
	icone: string
	titulo?: string
	conteudo: string
	tipo: 'cargo' | 'info'
}

export default function TextBox({
	icone,
	titulo,
	conteudo,
	tipo
}: TextBoxProps) {
	return (
		<div className="bg-abecin-secondary text-white px-10 py-12 rounded-lg flex flex-col gap-4 relative">
			{tipo === 'cargo' && (
				<div>
					<i className={`absolute top-4 right-4 fa-solid ${icone}`} />
					<h1 className="font-bold">{titulo}</h1>
				</div>
			)}
			{tipo === 'info' && (
				<div className="flex flex-row gap-2">
					<i className={`fa-solid ${icone}`} />
					<h1 className="font-bold">{titulo}</h1>
				</div>
			)}
			<p>{conteudo}</p>
		</div>
	)
}
