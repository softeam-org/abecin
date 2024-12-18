import SectionTitle from '@/components/layout/SectionTitle'
import PageContent from '@/components/layout/PageContent'
import PageTitle from '@/components/layout/PageTitle'
import TextBox from '@/components/sobre/TextBox'

export default function Gestao() {
	return (
		<PageContent>
			<PageTitle title="Gestão 2022-2025" />
			<div className="mt-8 flex flex-col gap-32">
				<section className="flex flex-col gap-14">
					<SectionTitle title="Diretoria" />
					<div className="mx-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-lg md:max-w-4xl">
						<TextBox
							tipo="cargo"
							titulo="Presidente:"
							icone="fa-user"
							conteudo="Martha Suzana Cabral Nunes (UFS)"
						/>
						<TextBox
							tipo="cargo"
							titulo="Vice-Presidente:"
							icone="fa-user"
							conteudo="Zaira Regina Zafalon (UFSCar)"
						/>
						<TextBox
							tipo="cargo"
							titulo="1ª Secretária:"
							icone="fa-user"
							conteudo="Márcia Ivo Braz (UFPE)"
						/>
						<TextBox
							tipo="cargo"
							titulo="2° Secretário:"
							icone="fa-user"
							conteudo="Márcio Bezerra da Silva (UnB)"
						/>
						<TextBox
							tipo="cargo"
							titulo="1ª Tesoureira:"
							icone="fa-user"
							conteudo="Alessandra dos Santos Araújo (UFS)"
						/>
						<TextBox
							tipo="cargo"
							titulo="2ª Tesoureira:"
							icone="fa-user"
							conteudo="Franciele Marques Redigolo (UFPA)"
						/>
					</div>
				</section>
				<section className="flex flex-col gap-14">
					<SectionTitle title="Conselho Fiscal" />
					<div className="mx-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-lg md:max-w-4xl">
						<TextBox
							tipo="cargo"
							icone="fa-user"
							conteudo="Aldinar Martins Bottentuit (UFMA)"
						/>
						<TextBox
							tipo="cargo"
							icone="fa-user"
							conteudo="Ieda Pelógia Martins Damian (USP/RP)"
						/>
						<TextBox
							tipo="cargo"
							icone="fa-user"
							conteudo="Meri Nadia Marques Gerlin (UFES)"
						/>
					</div>
				</section>
				<section className="flex flex-col gap-14">
					<SectionTitle title="Coordenação Regionais" />
					<div className="mx-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-lg md:max-w-4xl">
						<TextBox
							tipo="cargo"
							titulo="Coordenação Regional Centro-Oeste:"
							icone="fa-landmark"
							conteudo="Andréa Pereira dos Santos (UFG)"
						/>
						<TextBox
							tipo="cargo"
							titulo="Coordenação Regional Nordeste:"
							icone="fa-landmark"
							conteudo="Ivana Lins (UFBA)"
						/>
						<TextBox
							tipo="cargo"
							titulo="Coordenação Regional Norte:"
							icone="fa-landmark"
							conteudo="Danielly Oliveira Inomata (UFAM)"
						/>
						<TextBox
							tipo="cargo"
							titulo="Coordenação Regional São Paulo:"
							icone="fa-landmark"
							conteudo="Giovana Deliberali Maimone (USP)"
						/>
						<TextBox
							tipo="cargo"
							titulo="Coordenação Regional Sudeste:"
							icone="fa-landmark"
							conteudo="Naira Christofoletti Silveira (UNIRIO)"
						/>
						<TextBox
							tipo="cargo"
							titulo="Coordenação Regional Sul:"
							icone="fa-landmark"
							conteudo="Samile Andréa de Souza Vanz (UFRGS)"
						/>
					</div>
				</section>
				<section className="flex flex-col gap-14">
					<SectionTitle title="Comissão de Educação à Distância" />
					<div className="mx-auto flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-lg md:max-w-4xl">
						<TextBox
							tipo="cargo"
							icone="fa-user-graduate"
							conteudo="Célia Regina Simonetti Barbalho (UFAM)"
						/>
						<TextBox
							tipo="cargo"
							icone="fa-user-graduate"
							conteudo="Helen Beatriz Frota Rozados (UFRGS)"
						/>
						<TextBox
							tipo="cargo"
							icone="fa-user-graduate"
							conteudo="Henriette Ferreira Gomes (UFBA)"
						/>
						<TextBox
							tipo="cargo"
							icone="fa-user-graduate"
							conteudo="Marta Lígia Pomim Valentim (UNESP)"
						/>
					</div>
				</section>
			</div>
		</PageContent>
	)
}
