import { Blog9Data } from "@/data";
import Image from "next/image";

export function Blog9() {
    return (
        <section className="max-w-[1440px] mx-auto">
             <div>
                <div>
                    <Image src="" width={400} height={400} layout="responsive" alt="" />
                </div>
                {Blog9Data.map((item, index) => {
                    return (
                        <article key={index}>
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