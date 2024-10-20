import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Space Blog - Curiosidades do Espaço",
    description: "Descubra curiosidades fascinantes sobre o espaço sideral. Explore temas como astronomia, exploração espacial e muito mais no Space Blog.",
    openGraph: {
        type: "website", 
        url: "https://space-blog-mu.vercel.app/", 
        title: "Space Blog - Curiosidades do Espaço",
        description: "Descubra curiosidades fascinantes sobre o espaço sideral. Explore temas como astronomia, exploração espacial e muito mais.",
        images: [
            {
                url: "https://space-blog-mu.vercel.app/Logo.svg", 
                width: 800,
                height: 600,
                alt: "Logo do Space Blog"
            }
        ],
        siteName: "Space Blog",
    },
    twitter: {
        card: "summary_large_image", 
        site: "@SpaceBlog",
        creator: "@devgustavogantois",
        title: "Space Blog - Curiosidades do Espaço",
        description: "Explore as maravilhas do espaço sideral e fique por dentro das últimas curiosidades.",
        images: ['https://space-blog-mu.vercel.app/Logo.svg'], 
    },
    robots: {
        index: true,
        follow: true,
    },
    keywords: "blog, espaço, curiosidades, astronomia, exploração espacial, ciência",  
    viewport: "width=device-width, initial-scale=1.0", 
};
