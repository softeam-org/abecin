import { MenuItem } from "@/types/MenuItem";

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
      label: "A ABECIN",
      link: "/sobre",
      submenu: [
        { label: "Quem Somos", link: "/sobre/" },
        { label: "Diretoria", link: "/sobre/diretoria" },
        { label: "História", link: "/sobre/historia" },
        { label: "Estatuto", link: "/sobre/estatuto" },
      ],
    },
    {
      label: "Associados",
      link: "/associados",
      submenu: [
        { label: "Como se Associar", link: "/associados/como-se-associar" },
        { label: "Vantagens", link: "/associados/vantagens" },
        { label: "Lista de Associados", link: "/associados/lista" },
      ],
    },
    {
      label: "Prêmio TCC",
      link: "/premio-tcc",
      submenu: [
        { label: "Edições Passadas", link: "/premio-tcc/edicoes-passadas" },
        { label: "Regulamento", link: "/premio-tcc/regulamento" },
        { label: "Inscrição", link: "/premio-tcc/inscricao" },
      ],
    },
    {
      label: "Publicações",
      link: "/publicacoes",
      submenu: [],
    },
    {
      label: "Documentos",
      link: "/documentos",
      submenu: [],
    },
    {
        label: "Notícias",
        link: "/noticias",
        submenu: [],
    },
    {
        label: "Contato",
        link: "/contato",
        submenu: [],
    }
  ];

export default headerData;