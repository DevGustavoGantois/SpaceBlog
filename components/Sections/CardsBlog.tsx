import Image from 'next/image'; 
import { Button } from '../Button'; 

export const PagesBlog = [
    {
        id: "1",
        page: "/buraco-negro",
        title: "Buraco Negro",
        image: "/Void.png",
        name: "buraco-negro"
    },
    {
        id: "2",
        page: "/a-origem-do-universo",
        title: "A origem do Universo",
        image: "/OriginUniverse.png",
        name: "a-origem-do-universo"
    },
    {
        id: "3",
        page: "/as-primeiras-estrelas-galaxias",
        title: "As primeiras Estrelas | Galáxias",
        image: "/SpaceArt.png",
        name: "as-primeiras-estrelas-galaxias"
    },
    {
        id: "4",
        page: "/materia-escura",
        title: "Matéria Escura",
        image: "/BlackM.png",
        name: "materia-escura"
    },
    {
        id: "5",
        page: "/a-destino-final-do-universo",
        title: "A destino final do Universo",
        image: "/ImgFive.png",
        name: "a-destino-final-do-universo"
    },
    {
        id: "6",
        page: "/busca-por-vida-fora-da-terra",
        title: "Busca por vida fora da terra",
        image: "/ImgSeven.png",
        name: "busca-por-vida-fora-da-terra"
    },
   
    {
        id: "8",
        page: "/exploracao-espacial",
        title: "Exploração Espacial",
        image: "/Exploration.png",
        name: "exploracao-espacial"
    },
    {
        id: "9",
        page: "/fatos-curiosos-sobre-a-via-lactea",
        title: "Fatos Curiosos Sobre a Via Lactea",
        image: "/ViaLactea.png",
        name: "fatos-curiosos-sobre-a-via-lactea"
    },
    {
        id: "10",
        page: "/a-origem-e-estrutura-do-universo",
        title: "A Origem e a Estrutura do Universo",
        image: "/ExpansionUniverse.png",
        name: "a-origem-e-estrutura-do-universo",
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