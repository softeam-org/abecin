import PageContent from '@/components/PageContent'
import TextBox from '@/features/sobre/view/TextBox'

export default function Sobre() {
	return (
		<PageContent>
			<div className="flex flex-col gap-8">
				<h1 className="text-xl font-bold relative">
					Sobre
					<span className="block w-16 h-2 bg-[#4A1861] absolute left-0"></span>
				</h1>
				<div className="flex flex-col text-pretty gap-8">
					<p>
						A ABECIN é uma entidade constituída com a finalidade de
						assegurar o debate sobre a formação de pessoas
						comprometidas com a manutenção e a ampliação de um corpo
						profissional atuante nos campos das práticas da Ciência
						da Informação, que congrega instituições e profissionais
						voltados à formação de recursos humanos em nível
						universitário, cuja missão guarda relação direta com o
						conjunto de interesses e visões de mundo e com o ideário
						de permanência desse corpo profissional na sociedade.
					</p>
					<p>
						A criação da ABECIN é resultante do entendimento comum
						de profissionais que hoje, majoritariamente operando nos
						campos do ensino, pesquisa e extensão, forjou ou
						assimilou um conhecimento decorrente de práticas de
						trabalho transformado em conhecimento escolar fluente
						dentro da instituição educacional instituída para dar
						virtual existência e noção de permanência a esse corpo
						profissional, com a fixação de novos recursos humanos na
						realização da pesquisa, da experimentação e do ensino.
					</p>
				</div>
				<h2 className="px-8 text-center font-bold text-2xl text-[#292929]">
					A ABECIN é um espaço político que valoriza tanto a discussão
					quanto a prática de novos saberes, guiada por quatro linhas
					fundamentais.
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
						conteudo="os saberes derivados da transposição didática e seu efeito na consolidação dos saberes profissionais nos egressos dos cursos"
					/>
				</div>
			</div>
		</PageContent>
	)
}
