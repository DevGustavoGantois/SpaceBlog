import { TopicsSectionData } from "@/data";
import Image from "next/image";

export function Topics() {
    return (
        <section className="max-w-[1440px] mx-auto flex flex-col lg:flex-row mt-40">
          <div className="flex flex-col">
          {TopicsSectionData.map((item, index) => {
                return (
                    <div key={index} className="text-center lg:text-start mt-10 mb-4">
                        <p className="font-extralight mb-2">{item.pretitle}</p>
                        <h1 className="h2 title_section_gradient mb-6">{item.title}</h1>
                        <p className="text-white/80 max-w-[600px]">{item.description}</p>
                    </div>
                )
            })}
            <div className="mt-4 flex flex-col justify-center lg:justify-start items-center lg:items-start gap-4 text-center lg:text-start">
                <div className="border-2 border-bg-title_section_gradient p-4 rounded-xl max-w-[600px] neon-border">
                    <p>A Expansão do Universo — Como sabemos que está acontecendo?</p>
                </div>
                <div className="border-2 border-bg-title_section_gradient p-4 rounded-xl max-w-[450px] neon-border">
                    <p>Buracos Negros — Os Senhores da Gravidade</p>
                </div>
                <div className="border-2 border-bg-title_section_gradient p-4 rounded-xl max-w-[300px] neon-border">
                    <p>O Big Bang — O Início de Tudo</p>
                </div>
            </div>
          </div>
          <Image src="/Void.png" alt="" width={400} height={400} className="w-[900px]" />
        </section>
    )
}