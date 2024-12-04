import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="fixed top-0 z-10 w-screen bg-[#4A1861] py-4 px-14">
        <div className="flex flew-row items-center justify-between">
            <div className="relative">
                <Link href={'/'}>
                    <Image width={146} height={53} src='/cropped_abecin.png' alt="Logo da Abecin"/>
                </Link>
            </div>
            <nav className="flex flew-row gap-5">
                <a className="font-bold cursor-pointer">A ABECIN <i className="fa-solid fa-angle-down"></i></a>
                <a className="font-bold cursor-pointer">Associados <i className="fa-solid fa-angle-down"></i></a>
                <a className="font-bold cursor-pointer">Prêmio TCC <i className="fa-solid fa-angle-down"></i></a>
                <a className="font-bold cursor-pointer">Publicações <i className="fa-solid fa-angle-down"></i></a>
                <a className="font-bold cursor-pointer">Documentos <i className="fa-solid fa-angle-down"></i></a>
                <a href="/noticias" className="font-bold">Notícias</a>
                <a href="/contato" className="font-bold">Contato</a>
            </nav>
        </div>
    </header>
  )
}
