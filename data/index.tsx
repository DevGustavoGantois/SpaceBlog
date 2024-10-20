export interface TopicsPropsData {
    pretitle: string;
    title: string;
    description: string;
}

export interface BlogPropsData {
    pretitle: string;
    title: string;
}

export interface ContactPropsData {
    title: string;
    description: string;
}

interface FooterLink {
    title: string;
    navLinks: string[]; 
}

export interface FooterPropsData {
    description: string;
    navigation: FooterLink[]; 
    socialLinks: FooterLink[]; 
}


export interface WhyTrustUsPropsData {
    title: string;
    descripion: string;
}

export const TopicsSectionData = [
    {
        pretitle: "Algumas dos",
        title: "Tópicos que abordaremos no nosso Blog",
        description: "Se encante com o universo e as formas que ele tem de surpreender leigos e especialistas todos os dias! Fique por dentro de todas as informações"
    }
];

export const BlogSectionData = [
    {
        pretile: "Saiba mais do Universo através do nosso",
        title: "Blog",
    },

];

export const WhyTrustUsSectionData = [
    {
        title: "Por que confiar nas nossas informações?",
        description: "Nosso compromisso é oferecer informações claras e confiáveis para que você tome decisões informadas e aumente seu conhecimento com segurança."
    }
]

export const ContactSectionData = [
    {
        title: "Contato",
        description: "Entre em contato conosco e compartilhe sua visão de sucesso! Qual tipo de blog você gostaria que criássemos para você? Nos ajude a melhorar!"
    }
]

export const FooterSectionData: FooterPropsData = {
    description: "Acompanhe nossas últimas postagens e fique sempre por dentro das novidades! Estamos aqui para trazer conteúdo relevante e inspirador. Tem uma ideia ou dúvida? Fale conosco e ajude-nos a criar um espaço ainda mais conectado com você.",
    navigation: [
        { title: "Navegação", navLinks: ["Home", "Sobre", "Blogs", "Contato"] },
    ],
    socialLinks: [
        { title: "Siga-nos", navLinks: ["LinkedIn: Gustavo Caria", "Instagram - @devgustavogantois_"] },
    ],
};


//Pages blog

export const BlogData = [
    {
        image: "/Void.png",
        name: "buraco-negro",
        pageName: "Mistérios e Fenômenos Fascinantes do Universo",
        title: "O Universo em Expansão: Buracos Negros, Matéria Escura e Energia Escura",
        description: `
            Buracos Negros — Os Senhores da Gravidade
            Desenvolvimento: Os buracos negros são formados quando estrelas massivas colapsam sob sua própria gravidade. O resultado é uma região do espaço com uma força gravitacional tão intensa que nada, nem mesmo a luz, pode escapar. Recentemente, a humanidade fez um feito histórico ao capturar a primeira imagem de um buraco negro, situado no centro da galáxia M87 .

            Informações Relevantes:

            Existem três tipos de buracos negros: buracos negros estelares (formados pelo colapso de estrelas), buracos negros supermassivos (encontrados no centro das galáxias) e buracos negros primordiais (hipotéticos, formados logo após o Big Bang).
            No centro da nossa galáxia, na Via Láctea, há um buraco negro supermassivo chamado Sagitário A*.
            As ondas gravitacionais, detectadas pela primeira vez em 2015, são geradas quando buracos negros colidem e fornecem uma nova maneira de explorar o universo.

            Conclusão Geral:
            O estudo do universo nos leva a questões fundamentais sobre nossa existência, 
            a natureza do cosmos e o destino final de tudo o que conhecemos. 
            Desde a origem no Big Bang até os mistérios de buracos negros, 
            matéria escura e energia escura, a exploração do espaço é, ao mesmo tempo, 
            um dos maiores desafios científicos e uma fonte inesgotável de fascínio para a humanidade.
        `
    },
    {
        image: "/Void.png",
        name: "a-origem-do-universo",
        pageName: "A Origem e a Estrutura do Universo",
        title: "Desvendando a Origem do Universo: O Big Bang e suas Consequências",
        description: `
            Introdução:
            O universo, em toda sua imensidão, sempre despertou a curiosidade humana. Estudar sua origem e estrutura não só nos ajuda a entender o cosmos, mas também revela mistérios sobre a própria existência. Nesta primeira página, exploraremos o surgimento do universo e os principais elementos que o compõem.

            Tópico 1: O Big Bang — O Início de Tudo
            A Teoria do Big Bang descreve o início do universo como uma expansão rápida a partir de um estado extremamente denso e quente. Essa expansão aconteceu há aproximadamente 13,8 bilhões de anos e continua até hoje. Antes do Big Bang, não existia tempo, espaço ou matéria como conhecemos. A ideia de que o universo surgiu de uma singularidade — um ponto infinitamente pequeno e denso — mudou para sempre nossa compreensão sobre o cosmos.

            Informações Relevantes para Estudantes e Pesquisadores:
            - O conceito de "tempo" só passou a existir com o Big Bang. Essa é uma das razões pelas quais é tão difícil entender o que havia "antes" do Big Bang.
            - As evidências do Big Bang vêm da observação da radiação cósmica de fundo, um "eco" da explosão original detectada por telescópios em todo o mundo.
            - O modelo do Big Bang também prevê a criação de elementos leves, como hidrogênio e hélio, que compõem grande parte do universo observável.

            Conclusão Geral:
            O estudo do universo nos leva a questões fundamentais sobre nossa existência, 
            a natureza do cosmos e o destino final de tudo o que conhecemos. 
            Desde a origem no Big Bang até os mistérios de buracos negros, 
            matéria escura e energia escura, a exploração do espaço é, ao mesmo tempo, 
            um dos maiores desafios científicos e uma fonte inesgotável de fascínio para a humanidade.
        `
    },
    {
        image: "/Void.png",
        name: "as-primeiras-estrelas-galaxias",
        pageName: "A Origem e a Estrutura do Universo",
        title: "A Formação das Primeiras Estrelas e Galáxias",
        description: `
            Desenvolvimento: Após o Big Bang, o universo era um mar de partículas carregadas. Apenas cerca de 400 mil anos depois, a temperatura caiu o suficiente para que prótons e elétrons se combinassem, formando átomos neutros. Isso marcou o início da Era das Trevas Cósmicas, que durou milhões de anos até a formação das primeiras estrelas.

            Informações Relevantes:

            As primeiras estrelas, as chamadas população III, eram enormes e compostas principalmente de hidrogênio e hélio. Eles foram responsáveis pela "reionização" do universo, permitindo que a luz viajasse livremente pelo cosmos.
            Essas estrelas de grande massa queimaram rapidamente e explodiram como supernovas, espalhando elementos mais pesados que formariam a base para futuras estrelas, planetas e até a vida.

            Conclusão Geral:
            O estudo do universo nos leva a questões fundamentais sobre nossa existência, 
            a natureza do cosmos e o destino final de tudo o que conhecemos. 
            Desde a origem no Big Bang até os mistérios de buracos negros, 
            matéria escura e energia escura, a exploração do espaço é, ao mesmo tempo, 
            um dos maiores desafios científicos e uma fonte inesgotável de fascínio para a humanidade.
        `
    },
    {
        image: "/Void.png",
        name: "materia-escura",
        pageName: "Mistérios e Fenômenos Fascinantes do Universo",
        title: "Matéria Escura — A Substância Invisível do Universo",
        description: `
            Embora a matéria comum, como estrelas, planetas e galáxias, seja visível, ela compõe apenas cerca de 5% do universo. O restante é dominado pela misteriosa matéria escura e energia escura. A matéria escura não emite, absorve ou reflete luz, tornando sua detecção direta impossível até o momento. No entanto, sabemos que ela existe graças à sua influência gravitacional sobre galáxias e aglomerados de galáxias.

            Informações Relevantes:

            A matéria escura representa cerca de 27% do universo. Sua principal evidência vem da curva de rotação das galáxias, que gira mais rápido do que o esperado pela quantidade de matéria visível.
            Pesquisadores estão tentando detectar diretamente a matéria escura usando experimentos estruturais, como o XENON1T.

            Conclusão Geral:
            O estudo do universo nos leva a questões fundamentais sobre nossa existência, 
            a natureza do cosmos e o destino final de tudo o que conhecemos. 
            Desde a origem no Big Bang até os mistérios de buracos negros, 
            matéria escura e energia escura, a exploração do espaço é, ao mesmo tempo, 
            um dos maiores desafios científicos e uma fonte inesgotável de fascínio para a humanidade.
        `
    },
    {
        image: "/Void.png",
        name: "a-destino-final-do-universo",
        pageName: "O Futuro e as Grandes Questões do Universo",
        title: "O Futuro do Universo e a Busca por Vida Extraterrestre",
        description: `
            A Destino Final do Universo — Big Freeze, Big Rip ou Big Crunch?
            Desenvolvimento: Com o universo em constante expansão, os cientistas especulam como será seu destino final. Três cenários são os mais discutidos:

            Big Freeze: Se a expansão continuar indefinidamente, o universo se tornará frio e escuro, pois as estrelas morrerão e a energia será dissipada.
            Big Rip: Se a expansão acelerar de forma exponencial, pode chegar a um ponto em que o próprio tecido do espaço será destruído.
            Big Crunch: Em uma reviravolta, a gravidade poderia eventualmente superar a energia escura, fazendo o universo colapsar de volta em um ponto singular.

            Informações Relevantes:

            O cenário mais aceito atualmente é o do Big Freeze, com base nas observações da artilharia do universo.
            As simulações cosmológicas são uma ferramenta chave para explorar esses futuros possíveis.

            Conclusão Geral:
            O estudo do universo nos leva a questões fundamentais sobre nossa existência, 
            a natureza do cosmos e o destino final de tudo o que conhecemos. 
            Desde a origem no Big Bang até os mistérios de buracos negros, 
            matéria escura e energia escura, a exploração do espaço é, ao mesmo tempo, 
            um dos maiores desafios científicos e uma fonte inesgotável de fascínio para a humanidade.
        `
    },
    {
        image: "/Void.png",
        name: "busca-por-vida-fora-da-terra",
        pageName: "O Futuro e as Grandes Questões do Universo",
        title: "A Busca por Vida Fora da Terra — Exoplanetas e Sinais Alienígenas",
        description: `
            Desenvolvimento: Uma das maiores perguntas que os cientistas buscam responder é: estamos sozinhos no universo? A descoberta de exoplanetas, planetas fora do nosso sistema solar, deu nova vida à busca por vida extraterrestre. Algumas dessas descobertas incluem planetas que orbitam na zona habitável de suas estrelas, onde água líquida — essencial para a vida — pode existir.

            Informações Relevantes:

            Até hoje, mais de 4.000 exoplanetas foram identificados, muitos deles em sistemas com características semelhantes às nossas.
            O telescópio espacial James Webb é uma ferramenta fundamental na busca por atmosferas habitáveis e sinais de vida em planetas distantes.
            SETI (Search for Extraterrestrial Intelligence) continua sendo uma iniciativa importante na busca por sinais de rádio ou outras evidências de civilizações avançadas.

            Conclusão Geral:
            O estudo do universo nos leva a questões fundamentais sobre nossa existência, 
            a natureza do cosmos e o destino final de tudo o que conhecemos. 
            Desde a origem no Big Bang até os mistérios de buracos negros, 
            matéria escura e energia escura, a exploração do espaço é, ao mesmo tempo, 
            um dos maiores desafios científicos e uma fonte inesgotável de fascínio para a humanidade.
        `
    },
    {
        image: "/Void.png",
        name: "a-origem-e-estrutura-do-universo",
        pageName: "A Origem e a Estrutura do Universo",
        title: "A Expansão do Universo — Como sabemos que está acontecendo?",
        description: `
          Desenvolvimento: Uma das descobertas mais importantes da cosmologia moderna foi que o universo está em constante expansão. Isso foi confirmado pelo astrônomo Edwin Hubble em 1929, ao observar que as galáxias estão se afastando umas das outras. Essa expansão está acelerando, impulsionada por uma força misteriosa chamada energia escura.
    
          Informações Relevantes:
    
          Lei de Hubble: A velocidade com que uma galáxia se longe de nós é proporcional à sua distância. Isso significa que galáxias mais distantes estão se movendo mais rapidamente.
          A energia escura representa cerca de 70% da composição do universo, mas ainda é um dos maiores mistérios da física moderna. Sua natureza exata continua sendo investigada.
          Os cientistas acreditam que, no futuro distante, essa expansão pode levar ao Big Freeze, onde todas as galáxias serão tão afastadas que o universo se tornará escuro e frio.
    
          Conclusão Geral:
          O estudo do universo nos leva a questões fundamentais sobre nossa existência, 
          a natureza do cosmos e o destino final de tudo o que conhecemos. 
          Desde a origem no Big Bang até os mistérios de buracos negros, 
          matéria escura e energia escura, a exploração do espaço é, ao mesmo tempo, 
          um dos maiores desafios científicos e uma fonte inesgotável de fascínio para a humanidade.
        `
      },
      {
        image: "/Void.png",
        name: "exploracao-espacial",
        pageName: "Exploração Espacial",
        title: "Exploração Espacial as missões que modam o futuro",
        description: `
          Como as Missões Espaciais Estão Mudando Nossa Visão do Universo?
    
          A exploração espacial tem sido uma das empreitadas mais fascinantes da humanidade. Desde o lançamento dos primeiros satélites, como o Sputnik, até as missões revolucionárias da NASA e da SpaceX, a busca pelo desconhecido no espaço moldou o nosso entendimento do universo. Com cada nova missão, descobrimos mais sobre o cosmos, questionamos nossas próprias limitações e imaginamos novas possibilidades para o futuro da vida fora da Terra.
    
          Neste artigo, vamos explorar as missões espaciais que transformaram nossa visão do universo e discutir como elas continuam a moldar a ciência e a tecnologia.
        `
      },
      {
        image: "/Void.png",
        name: "fatos-curiosos-sobre-a-via-lactea",
        pageName: "Via Láctea",
        title: "Fatos Surpreendentes sobre a Via Láctea que Você Não Sabia",
        description: `
          A Via Láctea é a galáxia que chamamos de lar. Embora possamos vê-la apenas como uma faixa nebulosa no céu noturno, ela é incrivelmente vasta e cheia de mistérios que continuam a intrigar cientistas e astrônomos. Através dos séculos, essa galáxia desempenhou um papel fundamental no entendimento da nossa posição no universo e na formação de novos conceitos astronômicos.
        `
      }
];

