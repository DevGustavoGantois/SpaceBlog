import Image from "next/image";
import Link from "next/link";


export function Header() {
    return (
        <header className="mx-auto max-w-[1440px] mt-6">
            <nav className="flex items-center justify-between ">
                <div className="mt-6">
                    <Link href="/">
                    <Image src="/Logo.svg" width={250} height={100} alt="" />
                    </Link>
                </div>
                <div className="curspor-pointer">
                    <Link href="#Contact" className="font-primary px-6 py-3 border border-[#56379F] rounded-xl text-white animate-pulse cursor-pointer">
                        Contato
                    </Link>
                </div>
            </nav>
        </header>
    )
}