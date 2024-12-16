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
		<div className="bg-abecin-secondary text-white px-10 py-12 rounded-2xl flex flex-col gap-4 relative">
			{tipo === 'cargo' && (
				<div>
					<i className={`absolute top-4 right-4 fa-solid ${icone}`} />
					<h1 className="font-bold">{titulo}</h1>
				</div>
			)}
			{tipo === 'info' && (
				<div>
					<div className="flex min-h-20 lg:min-h-[50px] gap-2">
						<i className={`fa-solid pt-1 ${icone}`} />
						<h1 className="font-bold text-xl leading-tight">
							{titulo}
						</h1>
					</div>
				</div>
			)}
			<p className="text-sm">{conteudo}</p>
		</div>
	)
}
