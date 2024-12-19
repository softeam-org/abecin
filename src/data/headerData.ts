import { MenuItem } from '@/types/MenuItem'

/**
 * Este módulo exporta os dados de navegação para a barra de navegação (Navbar) do site.
 * O objeto `headerData` contém informações sobre cada item de menu e seus respectivos submenus.
 * O comportamento de cada item de menu varia dependendo da existência de submenus:
 * - Se um item de menu tem submenus, ao ser clicado, o submenu será exibido.
 * - Caso contrário, o item de menu redireciona o usuário para o link especificado.
 *
 * @module
 *
 * @example
 * // Exemplo de uso:
 * const headerData: MenuItem[] = [
 *   {
 *     label: "A ABECIN",
 *     link: "/sobre",
 *     submenu: [
 *       { label: "Quem Somos", link: "/sobre/quem-somos" },
 *       { label: "Diretoria", link: "/sobre/diretoria" },
 *       { label: "História", link: "/sobre/historia" },
 *       { label: "Estatuto", link: "/sobre/estatuto" },
 *     ],
 *   },
 *   ...
 * ]
 *
 * @returns {MenuItem[]} Um array de objetos de menu, cada um com um `label`, `link` e (opcionalmente) um `submenu`.
 *
 * @example
 * headerData.map(item => (
 *   <button key={item.label} onClick={() => handleMenuClick(item)}>
 *     {item.label}
 *     {item.submenu.length > 0 && <i className="fa-solid fa-angle-down" />}
 *   </button>
 * ));
 */

const headerData: MenuItem[] = [
	{
		label: 'A ABECIN',
		link: '/sobre',
		submenu: [
			{ label: 'Quem Somos', link: '/sobre/' },
			{ label: 'Gestão 2022-2025', link: '/gestao' },
			{ label: 'Gestões Anteriores', link: '/sobre/historia' },
			{ label: 'Estatuto', link: '/sobre/estatuto' }
		]
	},
	{
		label: 'Associados',
		link: '/associados',
		submenu: [
			{ label: 'Seja associado', link: '/associados/como-se-associar' },
			{ label: 'Associados 2024', link: '/associados/vantagens' },
			{ label: 'Associados 2023', link: '/associados/vantagens' },
			{ label: 'Associados 2022', link: '/associados/vantagens' },
			{ label: 'Associados 2021', link: '/associados/vantagens' },
			{ label: 'Associados 2020', link: '/associados/vantagens' },
			{ label: 'Associados mais antigos', link: '/associados/lista' }
		]
	},
	{
		label: 'Prêmio TCC',
		link: '/premio-tcc',
		submenu: [
			{ label: 'Regulamento 2024', link: '/premio-tcc/edicoes-passadas' },
			{ label: 'Prêmio TCC 2023', link: '/premio-tcc/regulamento' },
			{ label: 'Prêmio TCC 2022', link: '/premio-tcc/regulamento' },
			{ label: 'Prêmio TCC 2021', link: '/premio-tcc/regulamento' }
		]
	},
	{
		label: 'Publicações',
		link: '/publicacoes',
		submenu: [
			{ label: 'ABECIN', link: '/publicacoes/abecin' },
			{ label: 'Outras publicações', link: '/publicacoes/outras' }
		]
	},
	{
		label: 'Documentos',
		link: '/documentos',
		submenu: [
      { label: 'ABECIN', link: '/documentos/abecin' },
      { label: 'Escolas', link: '/documentos/escolas'},
      { label: 'Prestações de contas', link: '/documentos/transparencia' },
    ]
	},
	{
		label: 'Notícias',
		link: '/noticias',
		submenu: []
	},
	{
		label: 'Contato',
		link: '/contato',
		submenu: []
	}
]

export default headerData
