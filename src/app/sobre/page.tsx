import PageContent from '@/components/layout/PageContent'
import PageTitle from '@/components/layout/PageTitle'
import Iconsbar from '@/components/sobre/Iconsbar'
import TextBox from '@/components/sobre/TextBox'

export default function Sobre() {
	return (
		<PageContent>
			<PageTitle title="Sobre" />
			<div className="mt-8 flex flex-col gap-16">
				<section>
					<div className="flex flex-col text-xl text-pretty gap-8">
						<p>
							A ABECIN é uma entidade constituída com a finalidade
							de assegurar o debate sobre a formação de pessoas
							comprometidas com a manutenção e a ampliação de um
							corpo profissional atuante nos campos das práticas
							da Ciência da Informação, que congrega instituições
							e profissionais voltados à formação de recursos
							humanos em nível universitário, cuja missão guarda
							relação direta com o conjunto de interesses e visões
							de mundo e com o ideário de permanência desse corpo
							profissional na sociedade.
						</p >
						<p>
							A criação da ABECIN é resultante do entendimento
							comum de profissionais que hoje, majoritariamente
							operando nos campos do ensino, pesquisa e extensão,
							forjou ou assimilou um conhecimento decorrente de
							práticas de trabalho transformado em conhecimento
							escolar fluente dentro da instituição educacional
							instituída para dar virtual existência e noção de
							permanência a esse corpo profissional, com a fixação
							de novos recursos humanos na realização da pesquisa,
							da experimentação e do ensino.
						</p>
					</div>
				</section>
				<section className="flex flex-col gap-8">
					<h2 className="px-8 text-center font-bold text-3xl text-[#292929]">
						A ABECIN é um espaço político que valoriza tanto a
						discussão quanto a prática de novos saberes, guiada por
						quatro linhas fundamentais.
					</h2>
					<div className="mx-auto flex flex-col md:grid md:grid-cols-2 gap-4 max-w-lg md:max-w-4xl">
						<TextBox
							tipo="info"
							icone="fa-book"
							titulo="Fundamentos do Conhecimento"
							conteudo="Os saberes dos conteúdos do respectivo campo já existentes e prontos para serem utilizados, transmitidos, adaptados e transformados"
						/>
						<TextBox
							tipo="info"
							icone="fa-graduation-cap"
							titulo="Transformando Conhecimento em Competência"
							conteudo="Os saberes de como realizar a transposição didática desses conteúdos para a formação das competências, habilidades e atitudes dos profissionais egressos dos cursos"
						/>
						<TextBox
							tipo="info"
							icone="fa-wrench"
							titulo="Estratégias de Aprendizagem Eficazes"
							conteudo="Os saberes sobre os melhores métodos e técnicas de ensino a serem empregados na formação das habilidades e das atitudes esperadas pelos usuários dos serviços prestados pelos egressos da escola"
						/>
						<TextBox
							tipo="info"
							icone="fa-chart-line"
							titulo="Impacto na Formação Profissional"
							conteudo="Os saberes derivados da transposição didática e seu efeito na consolidação dos saberes profissionais nos egressos dos cursos"
						/>
					</div>
				</section>
				<section className="flex flex-col gap-6">
					<div className="flex flex-col gap-4 items-center">
						<h2 className="px-8 text-center font-bold text-3xl text-[#292929]">
							Fomentando o Futuro da Profissão
						</h2>
						<Iconsbar />
					</div>
					<p className="text-pretty text-xl">
						Visto assim, a ABECIN afirma-se como instância
						constituída para assegurar o debate sobre a formação de
						seres humanos comprometidos com a manutenção de um corpo
						profissional que se projeta no futuro. Também é de sua
						responsabilidade fomentar entre os seus membros o
						conhecimento dos meios de ensino, das diretrizes
						curriculares, da articulação horizontal e vertical do
						conhecimento a ser transmitido, da comunicação
						professor-aluno, do contexto em que se move a ação
						prática do corpo profissional-docente especialmente em
						seus aspectos filosóficos, históricos, políticos,
						sociais, econômicos, pedagógicos, etc. Trata-se de
						pesquisar a articulação do conhecimento de ensino e de
						pesquisa sobre o ensino com todos os fenômenos materiais
						ou não que constituem, fazem desenvolver e explicam o
						modo de ser e de agir dos profissionais do campo das
						profissões da informação e de seu futuro
					</p>
				</section>
				<section>
					<div className="bg-abecin-secondary bg-[url('/vector.png')] bg-no-repeat bg-[left_2rem_top_4rem] md:bg-[right_3rem_top_1rem] lg:bg-[right_5rem_top_2rem] lg:bg-[length:250px_220px] rounded-2xl py-12 px-8 md:px-28">
						<p className="text-center text-pretty text-2xl text-white font-bold">
							Sua missão é, acima de tudo, fortalecer de maneira
							única o corpo profissional no campo das profissões
							da informação. Esse fortalecimento cria uma base
							sólida para orientar as escolas na consolidação dos
							diversos segmentos que compõem essa área de atuação.
						</p>
					</div>
				</section>
			</div>
		</PageContent>
	)
}
