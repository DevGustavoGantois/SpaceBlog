import { BlogSectionData } from "@/data";
import { CardsBlog } from "./CardsBlog";

export function BlogSection() {
    return (
        <section>
            {BlogSectionData.map((item, index) => {
                return (
                    <div key={index} className="flex justify-center flex-col items-center gap-2 mt-20 lg:mt-96">
                        <p className="font-extralight">{item.pretile}</p>
                        <h1 className="font-primary h1 title_section_gradient">{item.title}</h1>
                    </div>
                )
            })}
            <div className="mt-20">
                <CardsBlog />
            </div>
        </section>
    )
}