'use client'

import { BlogData } from "@/data"
import { AdBanner } from "@/Scripts/AdBanner"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function BlogId({params}: {params:{blog: string}}) {

    const router = useRouter()

    const result = BlogData.find(item => item.name === params.blog)
    if(!result) {
        setTimeout (() => {
            router.push('/')
        }, 3000)
        return (<p className="text-white text-center h1 my-16 font-primary">Você será redirecionado em 3 segundos...</p>)
    }
    return (
        <section className="max-w-[1440px] mx-auto text-white/80 text-center mb-20">
             <div className="mt-20">
                <div className="bg-black">
                    <AdBanner dataAdFormat="auto" dataFullWidthResponsive={true} dataAdSlot="9163779460" />
                </div>
                <div className="mt-20">
                    <Image src={String(result?.image)} width={400} height={400} quality={100} priority layout="responsive" alt="" />
                </div>
                        <article className="flex flex-col justify-center items-center gap-4">
                            <h1 className="h1 title_section_gradient">{result?.pageName}</h1>
                            <h2 className="text-xl">{result?.title}</h2>
                            <div className="mt-20">
                                <p>{result?.description}</p>
                            </div>
                        </article>
                        <div className="bg-black mt-20">
                    <AdBanner dataAdFormat="auto" dataFullWidthResponsive={true} dataAdSlot="9163779460" />
                </div>
            </div>
            
        </section>
    )
}