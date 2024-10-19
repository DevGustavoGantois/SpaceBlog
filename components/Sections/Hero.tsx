import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button";

export function Hero() {
    return (
        <section className="max-w-[1440px] mx-auto mt-40">
            <h1 className="text-gradient-white-gray text-[35px] lg:text-[80px] font-primary text-center">Explore o Universo</h1>
            <h1 className="text-center h1 font-normal lg:text-[85px] text-[#9B0FEC]">Conosco</h1>
            <div className="flex justify-center items-center gap-6">
            <p className="mt-6 text-sm lg:text-lg max-w-[850px] text-center text-white/80">Descubra os mistérios do cosmos, as últimas descobertas astronômicas e as curiosidades sobre o espaço. Inscreva-se agora e não perca nenhuma atualização!</p>
            </div>
            <div className="flex justify-center items-center mt-6 gap-3">
            <Button route="#Blog" description="Saiba mais" />
            <Link href="#Blog" className="font-primary px-6 py-3 border border-[#56379F] rounded-xl text-white hover:bg-[#9B0FEC] transition-all duration-700 hover:scale-[1.1] ">
                Explore
            </Link>
            </div>
           <div className="flex justify-center items-center mt-20 animate-float ">
           <Image 
            src="/SpaceImgHero.png" 
            alt="Descrição da imagem"
            width={1300} 
            height={500} 
            priority
            layout="responsive"
            quality={100} 
            
            />
           </div>
        </section>
    )
}