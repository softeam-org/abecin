import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import headerData from '@/data/headerData'
import { useRouter } from 'next/navigation'
import { MenuItem } from '@/types/MenuItem'

/**
 * Componente de Navegação (Navbar) que exibe a barra de navegação do site.
 * O componente lida com a exibição de submenus para itens de menu que os possuem e a navegação do usuário para links específicos.
 * Ele também inclui suporte para a navegação no mobile através de um menu hamburguer.
 *
 * Funcionalidades principais:
 * - Exibe uma logo clicável que redireciona para a página inicial.
 * - Exibe os itens principais do menu de navegação, com submenus que podem ser expandidos ao clicar.
 * - No caso de itens de menu sem submenu, ao clicar, o usuário é redirecionado para o link correspondente.
 * - Implementa lógica para fechar submenus ao clicar fora da área de navegação.
 * - No mobile, a navegação é exibida por meio de um menu hambúrguer.
 *
 * Melhorias recentes:
 * - Adicionado tratamento para fechar submenus ao clicar fora do menu utilizando um `useEffect` com `menuRef`.
 * - `menuRef` agora abrange o contêiner principal de navegação para englobar todos os elementos que devem estar protegidos do clique externo.
 * - Adicionada lógica condicional para alternar a visibilidade de submenus e suporte para navegação no mobile.
 *
 * @component
 * @example
 * // Exemplo de uso:
 * return <Navbar />;
 *
 * @returns {JSX.Element} Componente Navbar com menu de navegação e suporte para submenus e navegação no mobile.
 */

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [openSubmenu, setOpenSubmenu] = useState<number | null>(null)
	const router = useRouter()
	const menuDesktopRef = useRef<HTMLDivElement | null>(null)
	const menuMobileRef = useRef<HTMLDivElement | null>(null)

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

	/**
	 * Função chamada ao clicar em um item do menu.
	 * Se o item não possui submenu, o usuário é redirecionado para o link do item.
	 * Se o item possui submenu, a visibilidade do submenu é alternada.
	 *
	 * @param {MenuItem} item - O item de menu clicado.
	 * @param {number} index - O índice do item de menu clicado.
	 */
	const handleButtonClick = (item: MenuItem, index: number) => {
		if (item.submenu.length < 1) {
			router.push(item.link!)
		} else {
			setOpenSubmenu(prev => (prev === index ? null : index))
		}
	}

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (
				menuDesktopRef.current &&
				!menuDesktopRef.current.contains(event.target as Node)
			) {
				setOpenSubmenu(null)
			}
		}

		document.addEventListener('mousedown', handleOutsideClick)

		return () => {
			document.removeEventListener('mousedown', handleOutsideClick)
		}
	}, [])

	return (
		<header className="fixed top-0 z-10 w-full bg-[#4A1861] py-4 px-8 text-white">
			<div className="flex flex-row items-center justify-between">
				{/* Logo */}
				<div className="relative h-[53px] flex items-center">
					<Link href="/" aria-label="Página Inicial">
						<Image
							src="/cropped_abecin.png"
							alt="Logo da Abecin"
							width={146}
							height={53}
							priority
							className="h-auto"
						/>
					</Link>
				</div>

				{/* Button para a versão mobile*/}
				<div className="lg:hidden">
					<button
						className="text-white"
						aria-label="Abrir Menu"
						onClick={toggleMenu}
					>
						<i
							className={`fa-solid ${
								isMenuOpen ? 'fa-xmark' : 'fa-bars'
							}`}
						></i>
					</button>
				</div>

				{/* Navegação Desktop */}
				<nav
					ref={menuDesktopRef}
					className="hidden lg:flex flex-row gap-4 items-center relative"
				>
					{headerData.map((item, index) => (
						<div key={index} className="relative">
							<button
								className="font-bold cursor-pointer flex items-center"
								onClick={() => handleButtonClick(item, index)}
							>
								{item.label}
								<i
									className={`${
										item.submenu.length < 1
											? ''
											: 'fa-solid fa-angle-down ml-1'
									} `}
								></i>
							</button>

							{/* Submenu no Desktop */}
							{openSubmenu === index && (
								<div className="absolute top-full mt-7 bg-[#4A1861] text-white rounded shadow-md w-48 flex flex-col">
									{item.submenu.map(
										(submenuItem, subIndex) => (
											<Link
												key={subIndex}
												href={submenuItem.link}
												className="px-4 py-2 hover:bg-[#670396]"
											>
												{submenuItem.label}
											</Link>
										)
									)}
								</div>
							)}
						</div>
					))}
				</nav>
			</div>

			{/* Navegação Mobile */}
			{isMenuOpen && (
				<nav className="lg:hidden mt-14 h-screen text-2xl flex flex-col items-start gap-6 bg-[#4A1861] text-white px-4 py-2">
					{headerData.map((item, index) => (
						<div key={index} className="w-full">
							<button
								className="font-bold cursor-pointer flex items-center"
								onClick={() => handleButtonClick(item, index)}
							>
								{item.label}{' '}
								<i
									className={`${
										item.submenu.length < 1
											? ''
											: 'fa-solid fa-angle-down ml-1'
									} `}
								></i>
							</button>
							{/* Submenu no Mobile */}
							{openSubmenu === index && (
								<div
									ref={menuMobileRef}
									className="ml-4 mt-2 flex flex-col"
								>
									{item.submenu.map(
										(submenuItem, subIndex) => (
											<Link
												key={subIndex}
												href={submenuItem.link}
												className="py-2 hover:underline"
											>
												{submenuItem.label}
											</Link>
										)
									)}
								</div>
							)}
						</div>
					))}
				</nav>
			)}
		</header>
	)
}
