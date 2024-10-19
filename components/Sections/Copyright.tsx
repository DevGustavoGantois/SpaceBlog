import Link from "next/link";

export function Copyright() {
    return (
        <div className=" border-t border-white mt-4 p-12 flex justify-center cursor-pointer">
            <Link href="https://www.instagram.com/devgustavogantois_/" target="_blank" className="text-white text-center hover:scale-[1.1] transition-all duration-700 hover:text-[#9B0FEC] cursor-pointer"> &copy; 2024 Todos os direitos reservados. @devgustavogantois_ | Space Blog</Link>
        </div>
    )
}