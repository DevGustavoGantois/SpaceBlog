import { Blog6Data } from "@/data"
import Image from "next/image"

export function Blog6() {
    return (
        <section className="max-w-[1440px] mx-auto">
             <div>
                <div className="mt-20">
                    <Image src="/Void.png" width={400} height={400} quality={100} priority layout="responsive" alt="" />
                </div>
                {Blog6Data.map((item, index) => {
                    return (
                        <article key={index} className="flex flex-col justify-center items-center gap-4">
                            <h1>{item.pageName}</h1>
                            <h2>{item.title}</h2>
                            <div className="mt-20">
                                <p>{item.description}</p>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}