import Image from "next/image"
export default function Navbar() {
  return (
    <header className="fixed top-0 z-10 w-screen bg-[#4A1861] py-4 px-14">
      <div className="flex flew-row items-center justify-between">
        <div className="relative">
          <Image width={146} height={53} src='/cropped_abecin.png' alt="Logo da Abecin"/>
        </div>
        <nav className="flex flew-row gap-5">
          <a href="/blank">teste1</a>
          <a href="/blank">teste1</a>
          <a href="/blank">teste1</a>
        </nav>
      </div>
    </header>
  )
}
