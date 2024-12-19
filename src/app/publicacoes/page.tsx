import ButtonIcon from '@/components/publicacoes/ButtonIcon'
import PageContent from '@/components/layout/PageContent'
import Droptdown from '@/components/publicacoes/Dropdown'
import PageTitle from '@/components/layout/PageTitle'
import Card from '@/components/publicacoes/Card'

export default function Publicacoes() {
	return (
		<PageContent>
			<div className="flex flex-col gap-24">
				<section className="flex flex-col gap-4">
					<PageTitle title="Publicações da Abecin" />
					<p className="mt-8">
						Com vistas a ampliar o diálogo com a comunidade
						científica e a dar visibilidade à produção intelectual
						em Ciência da Informação, Biblioteconomia, Arquivologia
						e Museologia, a ABECIN mantém em atividade a{' '}
						<span className="font-bold text-abecin-secondary">
							Rebecin
						</span>{' '}
						e a{' '}
						<span className="font-bold text-abecin-secondary">
							ABECIN Editora.
						</span>
					</p>
					<div className="flex flex-col  md:flex-row gap-6">
						<ButtonIcon
							title="Acessar Rebecin"
							icon="fa-book-open"
							link="#"
						/>
						<ButtonIcon
							title="Acessar ABECIN Editora"
							icon="fa-book"
							link="#"
						/>
					</div>
				</section>
				<section className="flex flex-col gap-4">
					<PageTitle title="Sobre a Rebecin" />
					<div className="flex flex-col gap-4">
						<p className="mt-8">
							A Revista Brasileira de Educação em Ciência da
							Informação (REBECIN) é uma revista com periodicidade
							semestral registrada com ISSN 2358-3193 de acesso
							livre e gratuito publicada pela ABECIN.
						</p>
						<p>
							A REBECIN iniciou sua publicação com o v.1, n.1, de
							janeiro/junho de 2014. Publica apenas textos
							originais como: artigos de pesquisa, artigos de
							revisão, estudo de casos, comunicações, relatos de
							experiência e resenhas relativos à área de educação
							em Ciência da Informação. Os textos submetidos para
							publicação devem ser escritos em português, espanhol
							ou inglês. A revista possui uma política de
							avaliação, e cada texto será encaminhado para
							avaliação por, pelo menos, dois referees.
						</p>
						<p>
							Fomentar a disseminação e visibilidade das pesquisas
							e relatos de experiências relacionados à educação em
							Ciência da Informação.
						</p>
					</div>
					<div className="flex flex-col gap-12 mt-12">
						<h1 className="text-center font-bold text-2xl text-abecin-primary">
							O escopo da REBECIN abrange
						</h1>
						<div className="grid lg:grid-cols-2 md:mx-auto gap-12">
							<Card
								title="Integração Acadêmica e Profissional"
								description="Currículo e conteúdos formadores: relações entre a academia e o mercado de trabalho"
								icon="fa-book-bookmark"
							/>
							<Card
								title="Pesquisa como Base do Ensino"
								description="Ensino com pesquisa"
								icon="fa-magnifying-glass"
							/>
							<Card
								title="Formação Ética e Socialmente Responsável"
								description="Diversidade, ética, formação política e responsabilidade social no ensino para atuação profissional"
								icon="fa-earth-americas"
							/>
							<Card
								title="Extensão: Conexão com a Comunidade"
								description="Ensino com extensão"
								icon="fa-handshake"
							/>
							<Card
								title="Legado do Movimento Associativo"
								description="Memória do movimento associativo"
								icon="fa-folder"
							/>
							<Card
								title="Tecnologia na Formação Profissional"
								description="Tecnologias e dispositivos"
								icon="fa-desktop"
							/>
							<Card
								title="Inovação nas Metodologias de Ensino"
								description="Metodologias de ensino"
								icon="fa-graduation-cap"
							/>
							<Card
								title="Experiência Prática: Estágios e Voluntariado"
								description="Estágio curricular, extracurricular e voluntário"
								icon="fa-clipboard-list"
							/>
							<Card
								title="Desenvolvimento de Competências Profissionais"
								description="Competências oriundas de conteúdos formadores"
								icon="fa-briefcase"
							/>
						</div>
					</div>
				</section>
				<section className="flex flex-col gap-4 mt-8">
					<PageTitle title="Sobre a ABECIN editora" />
					<div className="mt-8 flex flex-col gap-12">
						<p>
							A Abecin Editora tem como missão publicar livros e
							coletâneas, na versão digital, em Ciência da
							Informação, Biblioteconomia, Arquivologia e
							Museologia, com base em princípios éticos, legais,
							sociais, científicos e sustentáveis.
						</p>
						<Droptdown
							title="A Abecin Editora publica apenas obras de caráter universitário (individuais ou coletâneas)"
							list={[
								'Obras científicas',
								'Propostas de obras técnicas de referência',
								'Obras derivadas de dissertações e teses'
							]}
						/>
						<Droptdown
							title="A Abecin Editora não publica"
							publish={false}
							list={[
								'Livros de literatura (contos, poesia, romance)',
								'Autoajuda',
								'Guias de turismo',
								'Infantojuvenil',
								'Empresariais',
								'teste'
							]}
						/>
					</div>
				</section>
			</div>
		</PageContent>
	)
}
