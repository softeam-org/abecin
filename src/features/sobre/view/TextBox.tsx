interface TextBoxProps {
  icone: string
  titulo?: string
  conteudo: string
}

export default function TextBox({ icone, conteudo }: TextBoxProps) {
  return (
    <div className="bg-abecin-secondary flex flex-col">
      <i className={`fa-solid ${icone}`} />
      <h2>teste</h2>
      {icone}
      {conteudo}
    </div>
  )
}
