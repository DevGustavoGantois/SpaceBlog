import { ContactSectionData } from "@/data";
import { Button } from "../Button";

export function Contact() {
    return (
        <section className="max-w-[1440px] mx-auto mt-20 lg:mt-40 mb-20">
            <div>
                {ContactSectionData.map((item, index) => {
                    return (
                        <div key={index} className="flex justify-center flex-col items-center gap-1">
                            <h1 className="h2 title_section_gradient">{item.title}</h1>
                            <p className="text-center text-white/80 max-w-[600px] mt-2">{item.description}</p>
                        </div>
                    )
                })}
                <div className="flex justify-center mt-6">
                    <Button route="#Contato" description="Entrar em contato" />
                </div>
            </div>
        </section>
    )
}