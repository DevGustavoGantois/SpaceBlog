import Image from 'next/image'; 
import { Button } from '../Button'; 

const PagesBlog = [
    {
        id: "1",
        page: "/blog-1",
        title: "Buraco Negro",
        image: "/Void.png"
    },
    {
        id: "2",
        page: "/blog-2",
        title: "A origem do Universo",
        image: "/OriginUniverse.png"
    },
    {
        id: "3",
        page: "/blog-3",
        title: "As primeiras Estrelas | Galáxias",
        image: "/SpaceArt.png"
    },
    {
        id: "4",
        page: "/blog-4",
        title: "Matéria Escura",
        image: "/BlackM.png"
    },
    {
        id: "5",
        page: "/blog-6",
        title: "A destino final do Universo",
        image: "/ImgFive.png"
    },
    {
        id: "6",
        page: "/blog-7",
        title: "Busca por vida fora da terra",
        image: "/ImgSeven.png"
    },
    {
        id: "7",
        page: "/blog-8",
        title: "A Expansão do Universo",
        image: "/ExpansionUniverse.png"
    },
    {
        id: "8",
        page: "/blog-9",
        title: "Exploração Espacial",
        image: "/Exploration.png"
    },
    {
        id: "9",
        page: "/blog-10",
        title: "Fatos Curiosos Sobre a Via Lactea",
        image: "/ViaLactea.png"
    }
];

export function CardsBlog() {
    return (
        <section className="flex justify-center items-center lg:mb-80 max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-32 animate-float">
                {PagesBlog.map(({ id, page, title, image }) => (
                    <div key={id} className="lg:p-12 bg-gradient-to-r from-black to-[#171717] rounded-xl neon-border">
                        <div className="flex justify-center items-center">
                            <Image src={image} layout="responsive" width={400} height={200} quality={100} priority alt={title} />
                        </div>
                        <div>
                            <h3 className="text-[20px] p-2 lg:text-[35px] font-primary text-gradient-white-gray text-center mb-10">{title}</h3>
                            <div className="flex justify-center mb-8">
                                <Button route={page} description="Saiba mais" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}