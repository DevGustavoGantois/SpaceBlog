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


//Pages Blog
export interface Blog1 {
    pageName: string;
    title: string;
    description: string;
};

export interface Blog2 {
    pageName: string;
    title: string;
    description: string;
};

export interface Blog3 {
    pageName: string;
    title: string;
    description: string;
};

export interface Blog4 {
    pageName: string;
    title: string;
    description: string;
};

export interface Blog6 {
    pageName: string;
    title: string;
    description: string;
};

export interface Blog7 {
    pageName: string;
    title: string;
    description: string;
};

export interface Blog8 {
    pageName: string;
    title: string;
    description: string;
};

export interface Blog9 {
    pageName: string;
    title: string;
    description: string;
}

export interface Blog10 {
    pageName: string;
    title: string;
    description: string;
}

export const Blog1Data = [
        {
            pageName: "Mistérios e Fenômenos Fascinantes do Universo",
            title: "O Universo em Expansão: Buracos Negros, Matéria Escura e Energia Escura",
            description: `
                Buracos Negros — Os Senhores da Gravidade
                Desenvolvimento: Os buracos negros são formados quando estrelas massivas colapsam sob sua própria gravidade. O resultado é uma região do espaço com uma força gravitacional tão intensa que nada, nem mesmo a luz, pode escapar. Recentemente, a humanidade fez um feito histórico ao capturar a primeira imagem de um buraco negro, situado no centro da galáxia M87 .

                Informações Relevantes:

                Existem três tipos de buracos negros: buracos negros estelares (formados pelo colapso de estrelas), buracos negros supermassivos (encontrados no centro das galáxias) e buracos negros primordiais (hipotéticos, formados logo após o Big Bang).
                No centro da nossa galáxia, na Via Láctea , há um buraco negro supermassivo chamado Sagitário A *.
                As ondas gravitacionais , detectadas pela primeira vez em 2015, são geradas quando buracos negros colidem e fornecem uma nova maneira de explorar o universo.

                 Conclusão Geral:
            O estudo do universo nos leva a questões fundamentais sobre nossa existência, 
            a natureza do cosmos e o destino final de tudo o que conhecemos. 
            Desde a origem no Big Bang até os mistérios de buracos negros, 
            matéria escura e energia escura, a exploração do espaço é, ao mesmo tempo, 
            um dos maiores desafios científicos e uma fonte inesgotável de fascínio para a humanidade.
            `
        }
]

export const Blog2Data = [
    {
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
    }
];

export const Blog3Data = [
        {
            pageName: "A Origem e a Estrutura do Universo",
            title: "A Formação das Primeiras Estrelas e Galáxias",
            description: `
            Desenvolvimento: Após o Big Bang, o universo era um mar de partículas carregadas. Apenas cerca de 400 mil anos depois, a temperatura caiu o suficiente para que prótons e elétrons se combinassem, formando átomos neutros. Isso marcou o início da Era das Trevas Cósmicas , que durou milhões de anos até a formação das primeiras estrelas.

            Informações Relevantes:

            As primeiras estrelas, as chamadas população III , eram enormes e compostas principalmente de hidrogênio e hélio. Eles foram responsáveis pela "reionização" do universo, permitindo que a luz viajasse livremente pelo cosmos.
            Essas estrelas de grande massa queimaram rapidamente e explodiram como supernovas , espalhando elementos mais pesados que formariam a base para futuras estrelas, planetas e até a vida.

             Conclusão Geral:
            O estudo do universo nos leva a questões fundamentais sobre nossa existência, 
            a natureza do cosmos e o destino final de tudo o que conhecemos. 
            Desde a origem no Big Bang até os mistérios de buracos negros, 
            matéria escura e energia escura, a exploração do espaço é, ao mesmo tempo, 
            um dos maiores desafios científicos e uma fonte inesgotável de fascínio para a humanidade.
            `
        }
]

export const Blog4Data = [
        {
            pageName: "Mistérios e Fenômenos Fascinantes do Universo",
            title: "Matéria Escura — A Substância Invisível do Universo",
            description: `
            Embora a matéria comum, como estrelas, planetas e galáxias, seja visível, ela compõe apenas cerca de 5% do universo. O restante é dominado pela misteriosa matéria escura e energia escura . A matéria escura não emite, absorve ou reflete luz, tornando sua detecção direta impossível até o momento. No entanto, sabemos que ela existe graças à sua influência gravitacional sobre galáxias e aglomerados de galáxias.

            Informações Relevantes:

            A matéria escura representa cerca de 27% do universo. Sua principal evidência vem da curva de rotação das galáxias , que gira mais rápido do que o esperado pela quantidade de matéria visível.
            Pesquisadores tentando detectar diretamente a matéria escura usando experimentos estruturais, como o XENON1T .

             Conclusão Geral:
            O estudo do universo nos leva a questões fundamentais sobre nossa existência, 
            a natureza do cosmos e o destino final de tudo o que conhecemos. 
            Desde a origem no Big Bang até os mistérios de buracos negros, 
            matéria escura e energia escura, a exploração do espaço é, ao mesmo tempo, 
            um dos maiores desafios científicos e uma fonte inesgotável de fascínio para a humanidade.
            `
        }
]

export const Blog6Data = [
        {
            pageName: "O Futuro e as Grandes Questões do Universo",
            title: "O Futuro do Universo e a Busca por Vida Extraterrestre",
            description: `
                        : A Destino Final do Universo — Big Freeze, Big Rip ou Big Crunch?
            Desenvolvimento: Com o universo em constante expansão, os cientistas especulam como será seu destino final. Três cenários são os mais discutidos:

            Big Freeze: Se a expansão continuar indefinidamente, o universo se tornará frio e escuro, pois as estrelas morrerão e a energia será dissipada.
            Big Rip: Se a expansão acelerar de forma exponencial, pode chegar a um ponto em que o próprio tecido do espaço será destruído.
            Big Crunch: Em uma reviravolta, a gravidade poderia eventualmente superar a energia escura, fazendo o universo colapsar de volta em um ponto singular.
            Informações Relevantes:

            O cenário mais aceito atualmente é o do Big Freeze , com base nas observações da artilharia do universo.
            As simulações cosmológicas são uma ferramenta chave para explorar esses futuros possíveis.

             Conclusão Geral:
            O estudo do universo nos leva a questões fundamentais sobre nossa existência, 
            a natureza do cosmos e o destino final de tudo o que conhecemos. 
            Desde a origem no Big Bang até os mistérios de buracos negros, 
            matéria escura e energia escura, a exploração do espaço é, ao mesmo tempo, 
            um dos maiores desafios científicos e uma fonte inesgotável de fascínio para a humanidade.
            `
        }
]

export const Blog7Data = [
        {
            pageName: "O Futuro e as Grandes Questões do Universo",
            title: "A Busca por Vida Fora da Terra — Exoplanetas e Sinais Alienígenas",
            description: `
            Desenvolvimento: Uma das maiores perguntas que os cientistas buscam responder é: estamos sozinhos no universo? A descoberta de exoplanetas, planetas fora do nosso sistema solar, deu nova vida à busca por vida extraterrestre. Algumas dessas descobertas incluem planetas que orbitam na zona habitável de suas estrelas, onde água líquida — essencial para a vida — pode existir.

            Informações Relevantes:

            Até hoje, mais de 4.000 exoplanetas foram identificados, muitos deles em sistemas com características semelhantes às nossas.
            O telescópio espacial James Webb é uma ferramenta fundamental na busca por atmosferas de exoplanetas que possam conter sinais de vida.
            O Projeto SETI está buscando sinais de vida inteligente em outros planetas, explorando diferentes frequências de rádio. 

             Conclusão Geral:
            O estudo do universo nos leva a questões fundamentais sobre nossa existência, 
            a natureza do cosmos e o destino final de tudo o que conhecemos. 
            Desde a origem no Big Bang até os mistérios de buracos negros, 
            matéria escura e energia escura, a exploração do espaço é, ao mesmo tempo, 
            um dos maiores desafios científicos e uma fonte inesgotável de fascínio para a humanidade.
            `
        }
]

export const Blog8Data = [
        {
            pageName: "A Origem e a Estrutura do Universo",
            title: "A Expansão do Universo — Como sabemos que está acontecendo?",
            description: `
            Desenvolvimento: Uma das descobertas mais importantes da cosmologia moderna foi que o universo está em constante expansão. Isso foi confirmado pelo astrônomo Edwin Hubble em 1929, ao observar que as galáxias estão se afastando umas das outras. Essa expansão está acelerando, impulsionada por uma força misteriosa chamada energia escura .

            Informações Relevantes:

            Lei de Hubble: A velocidade com que uma galáxia se longe de nós é proporcional à sua distância. Isso significa que galáxias mais distantes estão se movendo mais rapidamente.
            A energia escura representa cerca de 70% da composição do universo, mas ainda é um dos maiores mistérios da física moderna. Sua natureza exata continua sendo investigada.
            Os cientistas acreditam que, no futuro distante, essa expansão pode levar ao Big Freeze , onde todas as galáxias serão tão afastadas que o universo se tornará escuro e frio.

            Conclusão Geral:
            O estudo do universo nos leva a questões fundamentais sobre nossa existência, 
            a natureza do cosmos e o destino final de tudo o que conhecemos. 
            Desde a origem no Big Bang até os mistérios de buracos negros, 
            matéria escura e energia escura, a exploração do espaço é, ao mesmo tempo, 
            um dos maiores desafios científicos e uma fonte inesgotável de fascínio para a humanidade.

            `
        }    
];

export const Blog9Data = [
    {
        pageName: "Exploração Espacial",
        title: "Exploração Espacial as missões que modam o futuro",
        description: `
        Como as Missões Espaciais Estão Mudando Nossa Visão do Universo?

    A exploração espacial tem sido uma das empreitadas mais fascinantes da humanidade. Desde o lançamento dos primeiros satélites, como o Sputnik, até as missões revolucionárias da NASA e da SpaceX, a busca pelo desconhecido no espaço moldou o nosso entendimento do universo. Com cada nova missão, descobrimos mais sobre o cosmos, questionamos nossas próprias limitações e imaginamos novas possibilidades para o futuro da vida fora da Terra.

    Neste artigo, vamos explorar as missões espaciais que transformaram nossa visão do universo e discutir como elas continuam a moldar a ciência e a tecnologia.

    A Corrida Espacial: Como Tudo Começou

    A corrida espacial foi um dos momentos mais marcantes do século XX, marcada pela rivalidade entre os Estados Unidos e a União Soviética. Em 1957, o lançamento do Sputnik 1, o primeiro satélite artificial, deu início a uma era de competição tecnológica e exploração além da Terra. O evento foi rapidamente seguido pelo envio de Yuri Gagarin ao espaço, o primeiro ser humano a orbitar o planeta, solidificando a liderança soviética nos primeiros anos.

    A resposta dos Estados Unidos veio com o programa Apollo, que culminou com o famoso pouso na Lua em 1969. A missão Apollo 11, liderada por Neil Armstrong e Buzz Aldrin, foi o marco de um grande avanço na exploração espacial e simbolizou o potencial da humanidade em conquistar o espaço. A corrida espacial transformou profundamente a ciência e a tecnologia, incentivando a criação de novas áreas de pesquisa e o desenvolvimento de tecnologias que usamos até hoje.

    As Missões que Fizeram História (Apollo, Voyager, etc.)

    Algumas missões espaciais transcenderam as barreiras do tempo e se tornaram símbolos de inovação e coragem. Entre as mais notáveis estão:

	•	Programa Apollo: Com destaque para o Apollo 11, a série de missões Apollo não só levou o homem à Lua, mas também permitiu avanços em diversas áreas da ciência e engenharia espacial. Elas consolidaram a NASA como uma líder na exploração espacial.
	•	Voyager 1 e 2: Lançadas em 1977, as sondas Voyager têm explorado o sistema solar e além. A Voyager 1 tornou-se o primeiro objeto humano a entrar no espaço interestelar, e ambas as sondas continuam a enviar dados valiosos sobre os confins do nosso sistema solar.
	•	Hubble Space Telescope: Embora não seja uma “missão” no sentido convencional, o Telescópio Espacial Hubble, lançado em 1990, revolucionou nossa compreensão do universo, capturando imagens detalhadas de galáxias distantes, buracos negros e nebulosas, revelando a complexidade do cosmos.

            Essas missões foram fundamentais não apenas em termos de descobertas científicas, mas também em nos inspirar a continuar a jornada exploratória no espaço.

            O Futuro da Exploração Espacial: SpaceX e Além

            Nos últimos anos, a SpaceX, empresa privada fundada por Elon Musk, vem redefinindo os limites da exploração espacial. Com a ambição de tornar a humanidade uma espécie multiplanetária, a SpaceX já alcançou marcos históricos, como:

                •	Falcon 9: O primeiro foguete reutilizável a atingir a órbita e retornar à Terra de forma bem-sucedida. Essa inovação abriu portas para uma exploração espacial mais econômica e sustentável.
                •	Crew Dragon: Em 2020, a SpaceX lançou astronautas ao espaço a bordo da cápsula Crew Dragon, marcando o primeiro lançamento tripulado por uma empresa privada e o primeiro a partir dos Estados Unidos em quase uma década.
                •	Starship: O foguete em desenvolvimento pela SpaceX promete ser o veículo mais poderoso já construído, com o objetivo de levar humanos para a Lua, Marte e além. A visão de colonizar Marte, embora pareça ficção científica, está sendo tratada com seriedade pela empresa.

            Além da SpaceX, outras organizações como a Blue Origin (fundada por Jeff Bezos) e a NASA continuam a explorar o espaço com planos ambiciosos, incluindo a exploração de asteroides e o retorno à Lua com o programa Artemis. O futuro da exploração espacial parece mais brilhante do que nunca, com inúmeras missões planejadas para as próximas décadas.

    Curiosidades: Projetos Mais Ambiciosos para os Próximos Anos

    O que o futuro reserva para a exploração espacial? Aqui estão alguns dos projetos mais emocionantes que estão sendo planejados para os próximos anos:

        •	Missão Artemis: A NASA está planejando levar humanos de volta à Lua em 2025 com a missão Artemis, que visa estabelecer uma presença sustentável no satélite natural e servir como trampolim para missões a Marte.
        •	Telescópio James Webb: Considerado o sucessor do Hubble, o James Webb Space Telescope será capaz de olhar ainda mais longe no universo, estudando as primeiras galáxias e a formação de estrelas.
        •	Colonização de Marte: A SpaceX tem planos para começar a enviar humanos a Marte já na próxima década, com a visão de estabelecer uma colônia autossuficiente no planeta vermelho.
        •	Exploração de Europa e Encélado: Duas das luas mais promissoras para a busca por vida no sistema solar, Europa (lua de Júpiter) e Encélado (lua de Saturno), estão nos planos de futuras missões robóticas que buscarão sinais de vida nas águas subterrâneas desses corpos celestes.

        `,
    }
]

export const Blog10Data = [
    {
        pageName: "Via Láctea",
        title: "Fatos Surpreendentes sobre a Via Láctea que Você Não Sabia",
        description: `
        A Via Láctea é a galáxia que chamamos de lar. Embora possamos vê-la apenas como uma faixa nebulosa no céu noturno, ela é incrivelmente vasta e cheia de mistérios que continuam a intrigar cientistas e astrônomos. Através dos séculos, essa galáxia desempenhou um papel fundamental no entendimento da nossa posição no universo e na formação de novos conceitos astronômicos.

Vamos explorar alguns dos fatos mais intrigantes sobre a Via Láctea, como ela se formou e o que a torna tão especial entre as bilhões de galáxias do universo.

O Que é a Via Láctea e Qual Sua Importância?

A Via Láctea é uma galáxia espiral que contém nosso sistema solar e mais de 100 bilhões de outras estrelas. Seu nome vem do latim “via lactea”, que significa “caminho de leite”, uma referência à sua aparência esbranquiçada que se estende pelo céu noturno. Ao olharmos para a Via Láctea, estamos, na verdade, observando o disco denso de estrelas que compõe o centro da galáxia, e é por isso que ela aparece como uma faixa brilhante.

A importância da Via Láctea para a astronomia não pode ser subestimada. Estudá-la nos ajuda a entender não apenas como as galáxias se formam e evoluem, mas também a origem e o futuro de sistemas estelares como o nosso. Além disso, sua posição em relação a outras galáxias oferece pistas valiosas sobre a estrutura do universo.

Como a Via Láctea Foi Formada?

A formação da Via Láctea é um processo que começou há bilhões de anos, logo após o Big Bang. Cientistas acreditam que a Via Láctea começou como uma coleção de nuvens de gás e poeira, que eventualmente se uniram pela força da gravidade. Conforme essas nuvens colapsavam, começaram a formar estrelas, dando origem ao núcleo da galáxia.

A galáxia espiral que vemos hoje é o resultado de bilhões de anos de colisões e fusões com galáxias menores. A Via Láctea cresceu absorvendo outros sistemas estelares, o que ainda acontece atualmente. Essas interações galácticas influenciam sua estrutura espiral e sua composição, com braços preenchidos por estrelas jovens e brilhantes e regiões centrais compostas por estrelas mais velhas.

Além disso, no centro da Via Láctea há um buraco negro supermassivo, conhecido como Sagittarius A*. Esse buraco negro desempenha um papel crucial na dinâmica da galáxia, mantendo as estrelas em órbita ao seu redor.

Curiosidades: Como Vivemos Dentro da Via Láctea?

Viver dentro da Via Láctea oferece uma perspectiva única. Nosso sistema solar está localizado a cerca de 27 mil anos-luz do centro galáctico, em um dos braços espirais da galáxia, conhecido como Braço de Órion. Apesar de estarmos relativamente longe do centro, ainda somos parte de um gigantesco sistema galáctico em constante movimento.

Aqui estão algumas curiosidades fascinantes sobre a Via Láctea e como é viver nela:

	•	Movimento: A Terra, assim como o resto do sistema solar, está em constante movimento ao redor do centro da Via Láctea. A uma velocidade de cerca de 828.000 km/h, levamos aproximadamente 230 milhões de anos para completar uma única órbita ao redor do centro galáctico.
	•	Estrelas visíveis: Quando olhamos para o céu, estamos vendo apenas uma fração das estrelas que compõem a Via Láctea. Estima-se que existam mais de 100 bilhões de estrelas na galáxia, muitas das quais são impossíveis de ver a olho nu.
	•	Zona habitável galáctica: Assim como existe uma zona habitável ao redor de estrelas (onde a vida pode se formar), há também uma zona habitável dentro das galáxias. A localização do sistema solar no Braço de Órion coloca a Terra em uma região relativamente estável, longe do centro galáctico, onde a radiação seria mais intensa e inóspita para a vida.

Esses detalhes mostram como somos apenas uma pequena parte de algo incrivelmente vasto, em um equilíbrio cósmico que permite a vida como a conhecemos.

Quais os Vizinhos da Nossa Galáxia?

Embora a Via Láctea seja enorme, ela não está sozinha no universo. Nossa galáxia faz parte de um grupo de galáxias conhecido como o Grupo Local, que inclui cerca de 50 outras galáxias, sendo as mais notáveis a Galáxia de Andrômeda e a Galáxia do Triângulo.

	•	Andrômeda: A Galáxia de Andrômeda é a galáxia espiral mais próxima da Via Láctea e está a cerca de 2,5 milhões de anos-luz de distância. Andrômeda e a Via Láctea estão em rota de colisão, e em aproximadamente 4 bilhões de anos, as duas galáxias irão se fundir, criando uma galáxia ainda maior.
	•	Galáxias Anãs: Além de Andrômeda, a Via Láctea é cercada por várias galáxias anãs. A mais próxima é a Galáxia Anã de Sagitário, que atualmente está sendo “engolida” pela Via Láctea. Essas galáxias menores orbitam ao redor da Via Láctea e algumas acabarão sendo assimiladas ao longo de milhões de anos.

O Grupo Local é apenas uma pequena parte de uma estrutura muito maior chamada Superaglomerado de Virgem, que contém milhares de galáxias. Essa rede de galáxias e superaglomerados forma a estrutura em larga escala do universo, conectada por filamentos de matéria escura e gás.

Imagens e Gráficos

Para uma melhor compreensão visual, aqui estão algumas imagens e gráficos que mostram a posição da Via Láctea no universo e seus principais componentes:

	•	Diagrama da Via Láctea: Um gráfico ilustrando os braços espirais da Via Láctea e a localização do nosso sistema solar no Braço de Órion.
	•	Mapa do Grupo Local: Uma imagem mostrando a Via Láctea, Andrômeda e outras galáxias que fazem parte do nosso Grupo Local.

A Via Láctea é uma galáxia cheia de mistérios e surpresas. Com cada nova descoberta, aprendemos mais sobre nossa casa cósmica e o lugar que ocupamos no universo.
        `
        
    }
]