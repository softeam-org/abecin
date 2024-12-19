import PageContent from '@/components/layout/PageContent'
import PageTitle from '@/components/layout/PageTitle'
import Link from 'next/link'

export default function Publicacoes() {
	return (
		<PageContent>
			<section className="flex flex-col gap-12">
				<PageTitle title="Publicações da Abecin " />
				<p>
					Com vistas a ampliar o diálogo com a comunidade científica e
					a dar visibilidade à produção intelectual em Ciência da
					Informação, Biblioteconomia, Arquivologia e Museologia, a
					ABECIN mantém em atividade a{' '}
					<Link
						className="relative font-bold text-abecin-secondary hover:text-abecin-primary group"
						href={'/'}
					>
						Rebecin
						<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-abecin-primary transition-all duration-300 group-hover:w-full"></span>
					</Link>{' '}
					e a{' '}
					<Link
						className="relative font-bold text-abecin-secondary hover:text-abecin-primary group"
						href={'/'}
					>
						ABECIN Editora.
						<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-abecin-primary transition-all duration-300 group-hover:w-full"></span>
					</Link>
				</p>
			</section>
		</PageContent>
	)
}
