'use client'

import Navbar from '../navbar/Navbar'

interface LayoutProps {
	/** Elementos filhos a serem renderizados dentro do layout */
	children: React.ReactNode
}

/**
 * Componente de Layout que organiza a estrutura principal da página.
 * Este componente exibe a barra de navegação (Navbar) e renderiza os elementos filhos.
 *
 * @component
 * @example
 * return (
 *   <Layout>
 *     <main>Conteúdo principal</main>
 *   </Layout>
 * );
 *
 * @param {LayoutProps} props - Propriedades do componente, incluindo os filhos.
 * @returns {JSX.Element} Componente de Layout com Navbar e conteúdo dinâmico.
 */
export default function Layout({ children }: LayoutProps) {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-grow">{children}</main>
		</div>
	)
}
