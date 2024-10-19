import { WhyTrustUsSectionData } from "@/data";
import { WhyTrustCards } from "./WhyTrustCards";

export function WhyTrustUs() {
    return (
        <section>
            <div>
                {WhyTrustUsSectionData.map((item, index) => {
                    return (
                        <div key={index} className="max-w-[1440px] mx-auto mt-20 flex flex-col justify-center items-center text-center lg:text-start lg:justify-start lg:items-start">
                            <h1 className="h2 font-primary title_section_gradient max-w-[850px]">{item.title}</h1>
                            <p className="text-white/80 max-w-[650px] mt-4">{item.description}</p>
                        </div>
                    )
                })}
            </div>
            <div className="bg-gradient-to-r from-black to-[#171717] p-12 mt-8 neon-border">
                <WhyTrustCards />
            </div>
        </section>
    )
}