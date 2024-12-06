/** Interface representativa do items que compõem o menu do header */

/** Subitems que estão presente em alguns items do header */
interface SubmenuItem {
    label: string;
    link: string;
  }
  
/** Items principais que compõem o menu e o header */
export interface MenuItem {
    label: string;
    link?: string; // O link pode ser opcional, caso o item não tenha submenu
    submenu: SubmenuItem[];
}