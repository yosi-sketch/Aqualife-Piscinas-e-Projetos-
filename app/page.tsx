"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Shield,
  ArrowRight,
  ArrowUpRight,
  Star,
  Menu,
  X,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Waves,
  Flame,
  Droplets,
  Wrench,
  Bath,
  Sun,
  Camera,
  Navigation,
  Compass,
  Check,
  HelpCircle,
  ExternalLink,
  MessageCircle,
  CheckCheck,
  HeartHandshake,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Informações Oficiais — Sol e Piscina (Belo Horizonte - MG)
const COMPANY_NAME = "Sol e Piscina";
const COMPANY_FULL_NAME =
  "Sol e Piscina — Especializados em Construção, Manutenção e Aquecimento de Piscinas, Spas e Saunas";
const BRAND_SLOGAN = "Renovamos a sua piscina! Mais de MIL sonhos realizados.";
const BRAND_SUBTITLE =
  "Especialistas em construção em vinil, fibra e alvenaria, aquecimento solar, saunas, spas e loja completa de produtos e manutenção em Belo Horizonte.";

const WHATSAPP_NUMBER = "5531986421424";
const PHONE_DISPLAY = "(31) 98642-1424";
const LANDLINE_DISPLAY = "(31) 3517-3669";
const EMAIL_CONTACT = "contato@solepiscina.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/solepiscinabh/";
const INSTAGRAM_HANDLE = "@solepiscinabh";
const WEBSITE_URL = "https://www.solepiscina.com.br";

const ADDRESS_STREET = "Av. José Cândido da Silveira, 297";
const ADDRESS_NEIGHBORHOOD = "Cidade Nova";
const ADDRESS_CITY = "Belo Horizonte - MG";
const ADDRESS_CEP = "31170-193";
const ADDRESS_DISPLAY =
  "Av. José Cândido da Silveira, 297 - Cidade Nova, Belo Horizonte - MG, 31170-193";
const CITIES_SERVED =
  "Belo Horizonte (Cidade Nova, Pampulha, Centro-Sul, Mangabeiras, Buritis), Nova Lima, Lagoa Santa, Vespasiano, Contagem, Betim e Região Metropolitana";

const GOOGLE_REVIEW_COUNT = "35";
const GOOGLE_RATING = "4.1";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Sol+e+Piscina%0ACidade+Nova+%C2%B7+Belo+Horizonte+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Jos%C3%A9+C%C3%A2ndido+da+Silveira%2C+297+-+Cidade+Nova%2C+Belo+Horizonte+-+MG%2C+31170-193";
const WAZE_MAPS_URL =
  "https://waze.com/ul?q=Avenida+Jose+Candido+da+Silveira+297+Cidade+Nova+Belo+Horizonte+MG";

// Assets Oficiais
const LOGO_SRC = "/logo-sol-e-piscina.png";
const LOGO_CLEAN_SRC = "/logo-sol-e-piscina-clean.png";
const STOREFRONT_PHOTO_SRC = "/loja-showroom-pool.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá! Gostaria de um orçamento para piscinas, aquecimento ou produtos com a equipe da Sol e Piscina.";
  return `https://wa.me/${number}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

function WhatsAppIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.39 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

function InstagramIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0ZM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM18.406 4.155a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  badge: string;
  icon: any;
  image: string;
  fullDesc: string;
  benefits: string[];
  ctaText: string;
  whatsappMessage: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "construcao",
    title: "Construção de Piscinas em Vinil, Fibra e Alvenaria",
    shortDesc:
      "Projetos personalizados do tamanho do seu terreno, com máxima estanqueidade, elegância e acabamento impecável.",
    badge: "Construção & Instalação",
    icon: Waves,
    image: "/sol-piscina-obra-1.jpg",
    fullDesc:
      "A Sol e Piscina atua há mais de 30 anos transformando áreas externas em verdadeiros refúgios de lazer para a família. Executamos projetos residenciais, para sítios e condomínios em vinil de alta resistência (com diversas estampas modernas), fibra reforçada e alvenaria tradicional com azulejo ou pastilha.",
    benefits: [
      "Mais de 1.000 piscinas entregues com satisfação garantida",
      "Modelos em vinil com flexibilidade total para qualquer geometria",
      "Acompanhamento técnico direto do Sr. Robson em todas as fases da obra",
      "Estrutura com reforço técnico, garantia real e cumprimento rigoroso de prazos",
    ],
    ctaText: "Solicitar Orçamento de Construção",
    whatsappMessage:
      "Olá! Gostaria de um orçamento para construção de piscina com a Sol e Piscina.",
  },
  {
    id: "reforma-vinil",
    title: "Troca de Vinil & Reforma Completa",
    shortDesc:
      "Renovamos a sua piscina! Substituição de bolsão de vinil, correção de vazamentos e modernização de acabamentos.",
    badge: "Renovamos Sua Piscina",
    icon: Sparkles,
    image: "/sol-piscina-obra-6.jpg",
    fullDesc:
      "Sua piscina antiga está desbotada, com bolsão ressecado, vazamentos ou aspecto desgastado? Somos especialistas em renovação de piscinas em Belo Horizonte! Fazemos a troca do vinil com encaixe perfeito, impermeabilização, restauração de bordas em granito e reposição de perfis sem quebrar seu quintal.",
    benefits: [
      "Troca rápida de bolsão de vinil com o mínimo de transtorno",
      "Estampas modernas de vinil que simulam pedras nobres e água caribenha",
      "Identificação e reparo de infiltrações e perdas de nível d'água",
      "Piscina novinha em folha com custo muito menor que uma obra do zero",
    ],
    ctaText: "Pedir Reforma da Minha Piscina",
    whatsappMessage:
      "Olá! Tenho uma piscina e gostaria de um orçamento para troca de vinil / reforma com a Sol e Piscina.",
  },
  {
    id: "aquecimento",
    title: "Aquecimento Solar & Bombas de Calor",
    shortDesc:
      "Piscina aquecida e convidativa os 365 dias do ano, com máxima eficiência térmica e economia na conta de luz.",
    badge: "Conforto Térmico 365 Dias",
    icon: Flame,
    image: "/sol-piscina-obra-4.jpg",
    fullDesc:
      "Aproveite a sua piscina em qualquer estação! A Sol e Piscina é referência em Belo Horizonte em sistemas de aquecimento solar com coletores de alta absorção e trocadores de calor (bombas de calor elétricas inverter). Dimensionamos exatamente a potência correta para o volume de água da sua piscina.",
    benefits: [
      "Aquecimento solar com energia 100% limpa, gratuita e renovável",
      "Trocadores de calor silenciosos para banho quente mesmo em dias nublados",
      "Dimensionamento preciso para evitar subdimensionamento térmico",
      "Instalação hidráulica profissional com quadros de comando automatizados",
    ],
    ctaText: "Dimensionar Aquecimento Ideal",
    whatsappMessage:
      "Olá! Gostaria de consultar opções de aquecimento solar ou trocador de calor para minha piscina.",
  },
  {
    id: "saunas-spas",
    title: "Spas de Hidromassagem & Saunas a Vapor e Secas",
    shortDesc:
      "Seu spa privativo em casa: banheiras de hidromassagem relaxantes e geradores de sauna certificados.",
    badge: "Saúde & Relaxamento",
    icon: Bath,
    image: "/sauna-spa.jpg",
    fullDesc:
      "Crie um santuário de bem-estar na sua casa ou condomínio. Oferecemos spas ergonômicos com jatos de hidromassagem terapêuticos, aquecedor acoplado e cromoterapia, além de equipamentos completos para saunas a vapor (geradores elétricos e a gás) e saunas secas com revestimento térmico seguro.",
    benefits: [
      "Spas com jatos reguláveis de massagem e design ergonômico",
      "Geradores de sauna a vapor compactos e de acionamento ultrarrápido",
      "Painéis de comando digital com controle preciso de temperatura",
      "Projetos integrados com a área da piscina e deck",
    ],
    ctaText: "Ver Spas e Saunas",
    whatsappMessage:
      "Olá! Gostaria de informações sobre instalação de spas de hidro e equipamentos para sauna.",
  },
  {
    id: "casa-maquinas",
    title: "Casa de Máquinas, Filtros & Bombas",
    shortDesc:
      "Instalação e reparo de sistemas hidráulicos, filtros de areia de alto rendimento e motobombas silenciosas.",
    badge: "Coração da Piscina",
    icon: Wrench,
    image: "/filtro-bomba.jpg",
    fullDesc:
      "A casa de máquinas é o coração de qualquer piscina saudável. Realizamos montagens hidráulicas limpas e organizadas, substituição de areia de filtro, troca de bombas com defeito ou ruído, instalação de registros de controle e automação para recirculação eficiente.",
    benefits: [
      "Bombas autoescorvantes de alta eficiência e baixo consumo elétrico",
      "Filtros dimensionados para garantir água límpida com menor tempo de filtragem",
      "Troca e reposição periódica de carga de areia filtrante especial",
      "Organização e correção de casas de máquinas com vazamentos ou ruído",
    ],
    ctaText: "Consultar Bombas e Filtros",
    whatsappMessage:
      "Olá! Preciso de ajuda com bomba, filtro ou manutenção de casa de máquinas de piscina.",
  },
  {
    id: "quimicos-tratamento",
    title: "Produtos Químicos & Tratamento da Água",
    shortDesc:
      "Consultoria técnica assertiva e produtos de ponta para manter a água cristalina, equilibrada e segura.",
    badge: "Loja & Showroom em BH",
    icon: Droplets,
    image: "/tratamento-agua.jpg",
    fullDesc:
      "Na loja da Sol e Piscina na Av. José Cândido da Silveira, você encontra produtos químicos de alta qualidade (cloro multiação, clarificantes, algicidas, barrilha e elevadores de pH), além da orientação técnica atenciosa do Benedito e de toda a equipe para sanar qualquer problema de água turva ou verde.",
    benefits: [
      "Estoque pronto para retirada na loja física na Cidade Nova (BH)",
      "Orientação técnica gratuita: saiba exatamente a dosagem sem gastar à toa",
      "Produtos concentrados e certificados para máxima eficácia bactericida",
      "Kits de teste de pH, cloro e alcalinidade para controle diário",
    ],
    ctaText: "Falar com Consultor de Produtos",
    whatsappMessage:
      "Olá! Gostaria de consultar produtos químicos para tratamento e manutenção de piscina na loja.",
  },
  {
    id: "cascatas-iluminacao",
    title: "Cascatas, Iluminação LED & Acessórios",
    shortDesc:
      "Refletores LED coloridos, cascatas em inox e fibra, capas térmicas, escadas e aspiradores completos.",
    badge: "Design & Automação",
    icon: Sun,
    image: "/iluminacao-cascata.jpg",
    fullDesc:
      "Valorize seu ambiente com o som relaxante de uma cascata e o impacto visual da iluminação cênica subaquática com refletores LED RGB controlados por controle remoto ou celular. Fornecemos também capas de proteção, capas térmicas sob medida e kits de aspiração completos.",
    benefits: [
      "Cascatas elegantes em inox 304 e 316 resistentes ao cloro e sol",
      "Refletores LED de alta luminosidade com baixo consumo em 12V seguro",
      "Capas térmicas que evitam evaporação e retêm a caloria da água aquecida",
      "Kits completos de limpeza com cabo telescópico, escova e mangueira",
    ],
    ctaText: "Ver Cascatas e Iluminação",
    whatsappMessage:
      "Olá! Gostaria de conhecer os modelos de cascatas, iluminação LED e acessórios para piscina.",
  },
];

// Depoimentos Reais do Google Maps da Sol e Piscina (4,1 Estrelas · 35 Avaliações)
const REVIEWS = [
  {
    name: "Antonio Luis Gervasio",
    tag: "Local Guide · 16 avaliações",
    rating: 5,
    service: "Construção de Piscina & Entrega da Obra",
    comment:
      "Foi Excelente. Prontidão e gentileza no atendimento, preço com o melhor custo benefício, cumpre prazos e entrega com qualidade. Oferece uma garantia que não foi preciso usar. Pois não houve problemas após a entrega da obra.",
  },
  {
    name: "Gustavo Araujo",
    tag: "Local Guide · 132 avaliações",
    rating: 5,
    service: "Piscina com Aquecimento Solar",
    comment:
      "Foi ótimo! Minha piscina ficou linda e muito funcional (graças ao aquecimento solar). O Robson é uma pessoa muito experiente e atenciosa. Serviço nota 10! Valeu cada centavo!!!",
  },
  {
    name: "Liliana Galvão",
    tag: "Cliente Verificada",
    rating: 5,
    service: "Atendimento & Produtos para Piscina",
    comment:
      "Experiência incrível, Benedito presta um atendimento formidável! Indica produtos assertivos e perfeitos. Virei cliente e não largo mais!",
  },
  {
    name: "Alexandra Fontoura",
    tag: "Cliente Verificada · 4 avaliações",
    rating: 5,
    service: "Construção e Qualidade de Entrega",
    comment:
      "Belíssimas piscinas, entrega no prazo combinado. Há 28 anos no mercado, é muita experiência e competência!!!!",
  },
  {
    name: "Rosana Zica",
    tag: "Cliente Verificada",
    rating: 5,
    service: "Aquecimento Solar em Pleno Funcionamento",
    comment:
      "Empresa séria. Serviço foi entregue no prazo. Ótimo atendimento, aquecimento solar funcionando perfeitamente. Graças...",
  },
  {
    name: "Ricardo Silvério",
    tag: "Cliente Verificado · 8 avaliações",
    rating: 5,
    service: "Consultoria Técnica de Produtos",
    comment:
      "Gostaria de parabenizar o excelente atendimento prestado pelo seu proprietário, Sr. ROBSON, que nos orientou sobre os produtos e formas de aplicação. Recomendo!!!!",
  },
  {
    name: "Gomes Antonio",
    tag: "Local Guide · 12 avaliações",
    rating: 5,
    service: "Conhecimento Técnico Especializado",
    comment:
      "Atendimento fora de série os meninos entende tudo de piscina e um pouco mais",
  },
  {
    name: "Miriam Gomes",
    tag: "Cliente Verificada",
    rating: 5,
    service: "Mais de 30 Anos de Tradição",
    comment:
      "Há 30 anos proporcionando lazer com cada vez mais dedicação e atendimento atencioso com várias atividades.",
  },
  {
    name: "Elbert Morais Martins",
    tag: "Local Guide · 28 avaliações",
    rating: 5,
    service: "Variedade de Serviços & Preço Justo",
    comment:
      "Ótimos preços, qualidade, variedade de serviços e atendimento nota 10. Recomendo!!",
  },
];

// Obras reais no portfólio da Sol e Piscina
const GALLERY_ITEMS = [
  {
    src: "/sol-piscina-obra-1.jpg",
    title: "Piscina em Vinil com Deck & Paisagismo",
    category: "Construção Residencial",
    desc: "Obra realizada com vinil premium personalizado, degraus integrados e deck em madeira nobre.",
  },
  {
    src: "/sol-piscina-obra-2.jpg",
    title: "Piscina com Borda e Iluminação Noturna",
    category: "Projetos em Belo Horizonte",
    desc: "Acabamento de alto padrão com água cristalina, iluminação subaquática e hidromassagem.",
  },
  {
    src: "/sol-piscina-obra-3.jpg",
    title: "Área de Lazer Completa com Cascata",
    category: "Lazer Familiar",
    desc: "Piscina com cascata, ducha externa e sistema de filtragem de alto rendimento.",
  },
  {
    src: "/sol-piscina-obra-4.jpg",
    title: "Piscina com Sistema de Aquecimento Solar",
    category: "Aquecimento Solar",
    desc: "Instalação térmica com coletores solares, mantendo a temperatura perfeita para o banho o ano todo.",
  },
  {
    src: "/sol-piscina-obra-5.jpg",
    title: "Área Gourmet Integrada à Piscina",
    category: "Áreas de Convivência",
    desc: "Piscina sob medida integrada ao espaço gourmet, valorizando o imóvel e o convívio.",
  },
  {
    src: "/sol-piscina-obra-6.jpg",
    title: "Reforma e Troca de Revestimento em Vinil",
    category: "Renovamos Sua Piscina",
    desc: "Substituição total de bolsão de vinil antigo, deixando a piscina com aspecto de nova.",
  },
  {
    src: "/hero-pool.jpg",
    title: "Design Moderno e Água Cristalina",
    category: "Projetos Sob Medida",
    desc: "Execução com máxima precisão hidráulica, equipamentos silenciosos e durabilidade comprovada.",
  },
  {
    src: "/loja-showroom-pool.jpg",
    title: "Área de Lazer e Projetos Exclusivos",
    category: "Projetos em BH",
    desc: "Ambientes projetados com acabamento de alto padrão, deck, cascata e iluminação.",
  },
];

// Perguntas Frequentes
const FAQS = [
  {
    question: "A Sol e Piscina realmente tem mais de 30 anos no mercado?",
    answer:
      "Sim! A Sol e Piscina é uma das empresas mais tradicionais e respeitadas de Belo Horizonte no ramo de construção, reforma, aquecimento e manutenção de piscinas, spas e saunas. Ao longo de mais de três décadas, acumulamos mais de 1.000 obras concluídas com sucesso, acompanhadas diretamente pelo proprietário, Sr. Robson, e nossa equipe técnica.",
  },
  {
    question: "Como funciona o serviço 'Renovamos a sua piscina' (troca de vinil)?",
    answer:
      "Se sua piscina de vinil desbotou, furou ou perdeu a elasticidade após anos de sol, você não precisa fazer uma obra cara do zero. Nossa equipe vai até o local, confere todas as medidas exatas da piscina e confecciona um novo bolsão de vinil sob medida com estampas modernas. A instalação é rápida, sem quebradeira, e sua piscina fica novinha em poucos dias!",
  },
  {
    question: "O aquecimento solar funciona bem nos dias frios de BH?",
    answer:
      "O sistema de aquecimento solar funciona com placas coletoras instaladas em telhado ou laje com boa incidência solar, sendo a opção mais econômica e ecológica (custo de energia zero de operação). Em períodos de inverno com dias ensolarados, ele aquece muito bem a água. Para quem deseja água quente 24 horas por dia inclusive à noite ou em dias nublados, indicamos o sistema híbrido com trocador de calor (bomba de calor elétrica). Dimensionamos a melhor solução para sua necessidade.",
  },
  {
    question: "Quais regiões de Belo Horizonte e Minas Gerais vocês atendem?",
    answer:
      "Nossa loja e sede física estão localizadas na Av. José Cândido da Silveira, 297 - Cidade Nova, BH. Atendemos todos os bairros de Belo Horizonte (Cidade Nova, Santa Inês, Sagrada Família, Mangabeiras, Buritis, Pampulha, etc.) e cidades da Região Metropolitana como Nova Lima, Lagoa Santa, Vespasiano, Contagem, Betim e condomínios de sítios em Minas Gerais.",
  },
  {
    question: "Vocês realizam manutenção de casas de máquinas e troca de areia de filtro?",
    answer:
      "Sim! Cuidamos de todo o coração da sua piscina: diagnóstico e conserto de motores/bombas barulhentas, conserto de vazamentos hidráulicos em registros, montagem de quadros elétricos de comando e a troca periódica da areia do filtro (que deve ser feita a cada 2 a 3 anos para manter a água sempre transparente).",
  },
  {
    question: "Onde fica a loja física da Sol e Piscina e qual o horário de funcionamento?",
    answer:
      "Nossa loja fica na Av. José Cândido da Silveira, 297 - Bairro Cidade Nova, Belo Horizonte - MG (CEP 31170-193). Funcionamos de segunda a sexta-feira, das 08h30 às 17h, e aos sábados das 08h30 às 12h30. Você pode vir tomar um café conosco, conhecer nossos produtos e conversar com os especialistas Robson e Benedito, ou nos chamar direto no WhatsApp: (31) 98642-1424.",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null
  );
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [diagnosticTab, setDiagnosticTab] = useState<
    "construir" | "reforma" | "aquecimento" | "sauna" | "maquinas" | "quimicos"
  >("construir");

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A1128] selection:bg-[#FE7600] selection:text-white">
      {/* 1. TOPBAR DE CREDIBILIDADE & CONTATO RÁPIDO */}
      <div className="bg-[#001954] text-white text-[12.5px] border-b border-[#13398D] py-2 px-4 sm:px-6 relative z-30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Esquerda: Google Review & Autoridade */}
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#00267F] hover:bg-[#00206D] transition-colors px-2.5 py-0.5 rounded-full text-white text-[12px] font-semibold border border-[#FE7600]/40"
            >
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="font-bold text-white">Google {GOOGLE_RATING}</span>
              <span className="text-orange-200">
                ({GOOGLE_REVIEW_COUNT} avaliações reais)
              </span>
            </a>
            <span className="hidden sm:inline text-blue-300/40">•</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-200">
              <MapPin size={13} className="text-[#FE7600]" />
              Av. José Cândido da Silveira, 297 - Cidade Nova, BH
            </span>
          </div>

          {/* Direita: Horários & Telefones */}
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-end text-[12px]">
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-300">
              <Clock size={13} className="text-[#FE7600]" />
              Seg a Sex: 08h30-17h | Sáb: 08h30-12h30
            </span>
            <span className="hidden sm:inline text-blue-300/40">•</span>
            <a
              href={`tel:${LANDLINE_DISPLAY.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-1 text-slate-200 hover:text-white transition-colors"
            >
              <Phone size={13} className="text-[#FE7600]" />
              <span className="font-semibold">{LANDLINE_DISPLAY}</span>
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
            >
              <WhatsAppIcon size={14} />
              <span>{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. NAVBAR MODERNA */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 sm:h-24 flex items-center justify-between gap-4">
          {/* Logo Sol e Piscina */}
          <a
            href="#"
            className="flex items-center gap-3 group transition-transform hover:scale-[1.02]"
          >
            <div className="relative w-52 sm:w-64 h-16 sm:h-20">
              <Image
                src={LOGO_CLEAN_SRC}
                alt="Sol e Piscina — Piscinas, Spas, Saunas e Aquecimento em Belo Horizonte"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </a>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[14px] font-semibold text-slate-700">
            <a
              href="#servicos"
              className="hover:text-[#FE7600] transition-colors py-1 relative group"
            >
              Serviços &amp; Piscinas
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FE7600] transition-all group-hover:w-full" />
            </a>
            <a
              href="#reforma"
              className="hover:text-[#FE7600] transition-colors py-1 relative group text-[#FE7600] font-bold"
            >
              Troca de Vinil
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FE7600]" />
            </a>
            <a
              href="#aquecimento"
              className="hover:text-[#FE7600] transition-colors py-1 relative group"
            >
              Aquecimento Solar
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FE7600] transition-all group-hover:w-full" />
            </a>
            <a
              href="#galeria"
              className="hover:text-[#FE7600] transition-colors py-1 relative group"
            >
              Obras Realizadas
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FE7600] transition-all group-hover:w-full" />
            </a>
            <a
              href="#depoimentos"
              className="hover:text-[#FE7600] transition-colors py-1 relative group"
            >
              Avaliações ({GOOGLE_RATING}★)
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FE7600] transition-all group-hover:w-full" />
            </a>
            <a
              href="#loja"
              className="hover:text-[#FE7600] transition-colors py-1 relative group"
            >
              Nossa Loja em BH
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FE7600] transition-all group-hover:w-full" />
            </a>
            <a
              href="#faq"
              className="hover:text-[#FE7600] transition-colors py-1 relative group"
            >
              Dúvidas
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FE7600] transition-all group-hover:w-full" />
            </a>
          </nav>

          {/* Botões de Ação na Direita */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Sol e Piscina"
              className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-600 hover:text-[#FE7600] hover:bg-orange-50 border border-slate-200 transition-colors"
            >
              <InstagramIcon size={18} />
            </a>
            <GlowingButton
              href={getWhatsAppUrl("Olá! Gostaria de falar com o atendimento da Sol e Piscina.")}
              target="_blank"
              variant="orange"
              size="sm"
              className="shadow-sm font-bold"
            >
              <WhatsAppIcon size={16} />
              <span>Solicitar Orçamento</span>
            </GlowingButton>
          </div>

          {/* Botão Menu Mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu"
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Drawer Mobile */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-6 flex flex-col gap-3 shadow-lg"
            >
              <div className="relative w-48 h-14 mb-1">
                <Image
                  src={LOGO_CLEAN_SRC}
                  alt="Sol e Piscina BH"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <a
                href="#servicos"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-slate-800 font-semibold border-b border-slate-100"
              >
                Serviços &amp; Piscinas
              </a>
              <a
                href="#reforma"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-[#FE7600] font-bold border-b border-slate-100"
              >
                Renovamos Sua Piscina (Troca de Vinil)
              </a>
              <a
                href="#aquecimento"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-slate-800 font-semibold border-b border-slate-100"
              >
                Aquecimento Solar &amp; Trocadores
              </a>
              <a
                href="#galeria"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-slate-800 font-semibold border-b border-slate-100"
              >
                Galeria de Obras
              </a>
              <a
                href="#depoimentos"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-slate-800 font-semibold border-b border-slate-100"
              >
                Depoimentos do Google ({GOOGLE_RATING}★)
              </a>
              <a
                href="#loja"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-slate-800 font-semibold border-b border-slate-100"
              >
                Loja Física (Cidade Nova - BH)
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-slate-800 font-semibold border-b border-slate-100"
              >
                Perguntas Frequentes
              </a>

              <div className="pt-2 flex flex-col gap-2">
                <GlowingButton
                  href={getWhatsAppUrl("Olá! Gostaria de um orçamento com a Sol e Piscina.")}
                  target="_blank"
                  variant="whatsapp"
                  size="md"
                  className="w-full justify-center"
                >
                  <WhatsAppIcon size={18} />
                  <span>WhatsApp: {PHONE_DISPLAY}</span>
                </GlowingButton>
                <a
                  href={`tel:${LANDLINE_DISPLAY.replace(/\D/g, "")}`}
                  className="w-full py-2.5 rounded-lg border border-slate-200 text-center font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-2"
                >
                  <Phone size={16} className="text-[#00206D]" />
                  <span>Ligar para a Loja: {LANDLINE_DISPLAY}</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 3. HERO SECTION — VIBRANTE, PROFISSIONAL E MODERNA COM PALETA DO LOGO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#001038] via-[#001954] to-[#00206D] text-white pt-10 pb-16 lg:pt-16 lg:pb-24">
        {/* Glow e Ondas de Fundo */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#FE7600]/25 via-[#FE7600]/10 to-transparent rounded-full blur-3xl pointer-events-none -mr-40 -mt-40" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#0284C7]/20 via-sky-500/10 to-transparent rounded-full blur-3xl pointer-events-none -ml-40 -mb-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Coluna Esquerda: Textos & Proposta de Valor */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Badge de Autoridade */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00267F]/80 border border-[#FE7600]/50 text-white text-[12.5px] font-semibold mb-5 shadow-xs">
                <span className="flex h-2 w-2 rounded-full bg-[#FE7600] animate-pulse" />
                <span className="text-[#FE7600] font-bold">Mais de 30 Anos de Mercado</span>
                <span className="text-blue-200">•</span>
                <span className="text-slate-200">Mais de MIL sonhos realizados</span>
              </div>

              {/* Headline H1 com cores do logotipo */}
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold tracking-tight leading-[1.12] mb-5 text-white">
                Especialistas em{" "}
                <span className="text-[#FE7600] underline decoration-[#FE7600]/40 decoration-4 underline-offset-4">
                  Construção
                </span>
                ,{" "}
                <span className="text-[#FE7600]">
                  Reforma
                </span>{" "}
                e{" "}
                <span className="text-[#38BDF8]">
                  Aquecimento de Piscinas
                </span>{" "}
                em Belo Horizonte
              </h1>

              {/* Subtítulo */}
              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-6 max-w-2xl">
                Renovamos a sua piscina! Piscinas sob medida em vinil, fibra e
                alvenaria, sistemas eficientes de aquecimento solar, spas, saunas e
                loja completa de produtos na Av. José Cândido da Silveira.
              </p>

              {/* Destaques Rápidos com Ícones */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl mb-8">
                <div className="bg-[#00206D]/70 border border-[#13398D] rounded-lg p-2.5 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-md bg-[#FE7600]/20 flex items-center justify-center text-[#FE7600] shrink-0">
                    <Award size={18} />
                  </div>
                  <div className="text-[12px] leading-tight">
                    <p className="font-bold text-white">+30 Anos</p>
                    <p className="text-slate-300">Tradição em BH</p>
                  </div>
                </div>

                <div className="bg-[#00206D]/70 border border-[#13398D] rounded-lg p-2.5 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-md bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <CheckCheck size={18} />
                  </div>
                  <div className="text-[12px] leading-tight">
                    <p className="font-bold text-white">+1.000 Obras</p>
                    <p className="text-slate-300">Concluídas</p>
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1 bg-[#00206D]/70 border border-[#13398D] rounded-lg p-2.5 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-md bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Shield size={18} />
                  </div>
                  <div className="text-[12px] leading-tight">
                    <p className="font-bold text-white">Garantia Real</p>
                    <p className="text-slate-300">Pós-venda sério</p>
                  </div>
                </div>
              </div>

              {/* Grupo de Botões CTA */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-6">
                <GlowingButton
                  href={getWhatsAppUrl("Olá! Gostaria de solicitar um orçamento para piscina, reforma ou aquecimento com a Sol e Piscina.")}
                  target="_blank"
                  variant="orange"
                  size="lg"
                  className="font-extrabold text-[15.5px] justify-center shadow-lg shadow-orange-500/25"
                >
                  <WhatsAppIcon size={20} />
                  <span>Solicitar Orçamento Grátis</span>
                  <ArrowRight size={18} />
                </GlowingButton>

                <GlowingButton
                  href="#servicos"
                  variant="outlineNavy"
                  size="lg"
                  className="bg-white/10 text-white hover:bg-white hover:text-[#00206D] border-white/30 justify-center font-bold text-[14.5px]"
                >
                  <span>Conhecer Nossos Serviços</span>
                  <ChevronDown size={16} />
                </GlowingButton>
              </div>

              {/* Avaliação Social Prova */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex -space-x-2">
                  {["A", "G", "R", "L"].map((initial, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-[#00267F] border-2 border-[#001954] text-[#FE7600] font-bold text-xs flex items-center justify-center"
                    >
                      {initial}
                    </div>
                  ))}
                </div>
                <div className="text-xs text-slate-300">
                  <div className="flex items-center gap-1 text-amber-400 font-bold">
                    <span>{GOOGLE_RATING}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={11}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="text-white ml-1">
                      ({GOOGLE_REVIEW_COUNT} avaliações no Google)
                    </span>
                  </div>
                  <p className="text-slate-300">
                    &quot;Preço justo, cumpre prazos e entrega com qualidade.&quot; — Antonio Luis
                  </p>
                </div>
              </div>
            </div>

            {/* Coluna Direita: Imagem de Destaque Desobstruída */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-900 group">
                <div className="relative h-[380px] sm:h-[460px] w-full">
                  <Image
                    src="/sol-piscina-obra-1.jpg"
                    alt="Piscina de vinil e alvenaria construída pela Sol e Piscina em Belo Horizonte"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001038] via-transparent to-transparent opacity-80" />
                </div>

                {/* Badge Superior */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-md border border-white/30">
                    <div className="relative w-24 h-7">
                      <Image
                        src={LOGO_CLEAN_SRC}
                        alt="Sol e Piscina"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#001954]/85 text-white backdrop-blur-sm border border-white/20">
                    Belo Horizonte - MG
                  </span>
                </div>

                {/* Informações Sobrepostas na Imagem */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#001954]/90 backdrop-blur-md border border-[#13398D] rounded-xl p-3.5 text-white shadow-xl">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs text-[#FE7600] font-bold uppercase tracking-wider">
                        Construção &amp; Reforma
                      </p>
                      <p className="text-sm font-bold text-white">
                        Piscinas em Vinil, Fibra &amp; Alvenaria
                      </p>
                      <p className="text-[11.5px] text-slate-300">
                        Com aquecimento solar e casa de máquinas completa
                      </p>
                    </div>
                    <a
                      href={getWhatsAppUrl("Olá! Vi a foto da obra de piscina no site e gostaria de um orçamento similar.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-lg bg-[#FE7600] hover:bg-[#E06800] text-white text-xs font-bold shrink-0 transition-colors flex items-center gap-1"
                    >
                      <span>Orçar</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SELETOR RÁPIDO DE NECESSIDADE — O QUE VOCÊ PRECISA HOJE? */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="eyebrow-orange mb-2">SOLUÇÕES PERSONALIZADAS</span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#00206D] tracking-tight">
              O que você precisa para a sua piscina ou área de lazer hoje?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Selecione o que você procura para ver a solução ideal e falar direto com nossos especialistas.
            </p>
          </div>

          {/* Abas Interativas */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
            {[
              {
                id: "construir" as const,
                label: "Construir Piscina",
                icon: Waves,
              },
              {
                id: "reforma" as const,
                label: "Troca de Vinil / Reforma",
                icon: Sparkles,
              },
              {
                id: "aquecimento" as const,
                label: "Aquecimento Solar",
                icon: Flame,
              },
              {
                id: "sauna" as const,
                label: "Spas & Saunas",
                icon: Bath,
              },
              {
                id: "maquinas" as const,
                label: "Bomba & Filtro",
                icon: Wrench,
              },
              {
                id: "quimicos" as const,
                label: "Produtos Químicos",
                icon: Droplets,
              },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = diagnosticTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setDiagnosticTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#00206D] text-white shadow-md shadow-blue-900/20"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <Icon
                    size={16}
                    className={isActive ? "text-[#FE7600]" : "text-slate-500"}
                  />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Painel do Diagnóstico */}
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto shadow-sm">
            {diagnosticTab === "construir" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <span className="text-xs font-bold text-[#FE7600] uppercase tracking-wider">
                    Construção sob Medida
                  </span>
                  <h3 className="text-xl font-bold text-[#00206D] mt-1 mb-3">
                    Quer construir a piscina dos seus sonhos?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Projetamos piscinas em vinil, fibra e alvenaria para qualquer tamanho de lote, quintal ou sítio em Belo Horizonte e região. Mais de 1.000 piscinas entregues com acabamento de alto padrão.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span>Dimensionamento estrutural e hidráulico completo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span>Vinil com estampas exclusivas de alta durabilidade</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span>Acompanhamento direto do Sr. Robson em todas as fases</span>
                    </li>
                  </ul>
                  <GlowingButton
                    href={getWhatsAppUrl("Olá! Gostaria de um orçamento para construir uma piscina na minha residência.")}
                    target="_blank"
                    variant="orange"
                    size="md"
                    className="font-bold"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Pedir Projeto &amp; Orçamento</span>
                  </GlowingButton>
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/sol-piscina-obra-2.jpg"
                    alt="Construção de piscina Sol e Piscina"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {diagnosticTab === "reforma" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <span className="text-xs font-bold text-[#FE7600] uppercase tracking-wider">
                    Renovamos a Sua Piscina
                  </span>
                  <h3 className="text-xl font-bold text-[#00206D] mt-1 mb-3">
                    Piscina com vinil velho, furado ou desbotado?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Troque o bolsão de vinil e tenha uma piscina completamente nova sem quebradeira nem dor de cabeça! Medição rápida e encaixe milimétrico com garantia.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span>Troca de vinil limpa, ágil e sem quebrar seu piso</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span>Estampas modernas que valorizam sua área gourmet</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span>Fim dos vazamentos e perdas de água misteriosas</span>
                    </li>
                  </ul>
                  <GlowingButton
                    href={getWhatsAppUrl("Olá! Minha piscina precisa de reforma / troca de vinil. Gostaria de uma avaliação.")}
                    target="_blank"
                    variant="orange"
                    size="md"
                    className="font-bold"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Orçar Troca de Vinil</span>
                  </GlowingButton>
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/sol-piscina-obra-6.jpg"
                    alt="Troca de vinil de piscina Sol e Piscina"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {diagnosticTab === "aquecimento" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <span className="text-xs font-bold text-[#FE7600] uppercase tracking-wider">
                    Conforto Térmico 365 Dias
                  </span>
                  <h3 className="text-xl font-bold text-[#00206D] mt-1 mb-3">
                    Água quentinha e aconchegante o ano inteiro
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Não deixe sua piscina parada nos meses frios! Sistemas solares de alta absorção ou trocadores de calor com tecnologia inverter que mantêm a temperatura sem susto na conta de luz.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span>Placas solares com certificação e resistência UV</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span>Trocadores de calor silenciosos de alta eficiência</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span>Garantia de funcionamento aprovada por centenas de clientes</span>
                    </li>
                  </ul>
                  <GlowingButton
                    href={getWhatsAppUrl("Olá! Gostaria de consultar um sistema de aquecimento para minha piscina.")}
                    target="_blank"
                    variant="orange"
                    size="md"
                    className="font-bold"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Consultar Aquecimento Solar</span>
                  </GlowingButton>
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/sol-piscina-obra-4.jpg"
                    alt="Aquecimento de piscina Sol e Piscina"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {diagnosticTab === "sauna" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <span className="text-xs font-bold text-[#FE7600] uppercase tracking-wider">
                    Saúde &amp; Bem-Estar
                  </span>
                  <h3 className="text-xl font-bold text-[#00206D] mt-1 mb-3">
                    Spas de Hidromassagem e Saunas Completas
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Equipamentos completos para saunas a vapor (elétricas ou a gás), saunas secas e spas com hidromassagem terapêutica para seu descanso merecido.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span>Geradores de vapor compactos e econômicos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span>Spas ergonômicos com jatos de alta pressão</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span>Painéis de controle digital intuitivos</span>
                    </li>
                  </ul>
                  <GlowingButton
                    href={getWhatsAppUrl("Olá! Gostaria de saber mais sobre opções de spas e saunas com a Sol e Piscina.")}
                    target="_blank"
                    variant="orange"
                    size="md"
                    className="font-bold"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Ver Catálogo de Spas &amp; Saunas</span>
                  </GlowingButton>
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/sauna-spa.jpg"
                    alt="Saunas e Spas Sol e Piscina"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {diagnosticTab === "maquinas" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <span className="text-xs font-bold text-[#FE7600] uppercase tracking-wider">
                    Equipamentos &amp; Hidráulica
                  </span>
                  <h3 className="text-xl font-bold text-[#00206D] mt-1 mb-3">
                    Bomba com ruído ou filtro sem pressão?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Fornecemos e instalamos bombas silenciosas, filtros de alta vazão, quadros de comando automatizados e fazemos a substituição da areia filtrante para sua água ficar cristalina.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span>Bombas autoescorvantes de alta durabilidade</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span>Troca periódica de areia de filtro especial</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span>Peças de reposição, registros e conexões originais</span>
                    </li>
                  </ul>
                  <GlowingButton
                    href={getWhatsAppUrl("Olá! Preciso de bomba, filtro ou manutenção de casa de máquinas para minha piscina.")}
                    target="_blank"
                    variant="orange"
                    size="md"
                    className="font-bold"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Falar com Técnico de Equipamentos</span>
                  </GlowingButton>
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/filtro-bomba.jpg"
                    alt="Filtros e bombas Sol e Piscina"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {diagnosticTab === "quimicos" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <span className="text-xs font-bold text-[#FE7600] uppercase tracking-wider">
                    Tratamento da Água
                  </span>
                  <h3 className="text-xl font-bold text-[#00206D] mt-1 mb-3">
                    Água verde, turva ou com excesso de cloro?
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Temos a linha completa de produtos químicos à pronta entrega em nossa loja na Av. José Cândido da Silveira: cloros multiação, clarificantes, algicidas, barrilha e elevadores de pH com a orientação formidável da nossa equipe.
                  </p>
                  <ul className="text-xs text-slate-700 space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span>Orientação técnica assertiva para não desperdiçar produtos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span>Estoque à pronta entrega na loja na Cidade Nova</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span>Kits de teste e reagentes para análise de água</span>
                    </li>
                  </ul>
                  <GlowingButton
                    href={getWhatsAppUrl("Olá! Gostaria de consultar produtos químicos para tratamento da água da minha piscina.")}
                    target="_blank"
                    variant="orange"
                    size="md"
                    className="font-bold"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Consultar Produtos Químicos</span>
                  </GlowingButton>
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/tratamento-agua.jpg"
                    alt="Tratamento de água Sol e Piscina"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO DE PRODUTOS & SERVIÇOS — GRID MODERNO */}
      <section id="servicos" className="py-16 sm:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="eyebrow-orange mb-2">PILARES DE ATUAÇÃO</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#00206D] tracking-tight">
              Tudo para sua piscina, spa e sauna em um só lugar
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              Da construção inicial ao tratamento diário da água, a Sol e Piscina entrega excelência técnica, materiais certificados e acompanhamento dedicado.
            </p>
          </div>

          {/* Grid de Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map((serv) => {
              const IconComp = serv.icon;
              return (
                <div
                  key={serv.id}
                  className="card-sol rounded-2xl overflow-hidden flex flex-col group"
                >
                  {/* Foto de Capa do Card */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={serv.image}
                      alt={serv.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#001954]/90 text-white backdrop-blur-sm border border-white/20">
                        {serv.badge}
                      </span>
                    </div>
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FE7600] flex items-center justify-center mb-4 border border-orange-200">
                        <IconComp size={20} />
                      </div>
                      <h3 className="text-lg font-bold text-[#00206D] mb-2 leading-snug group-hover:text-[#FE7600] transition-colors">
                        {serv.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {serv.shortDesc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedService(serv)}
                        className="text-xs font-bold text-[#00206D] hover:text-[#FE7600] transition-colors inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>Ver Detalhes</span>
                        <ChevronDown size={14} className="-rotate-90" />
                      </button>

                      <GlowingButton
                        href={getWhatsAppUrl(serv.whatsappMessage)}
                        target="_blank"
                        variant="orange"
                        size="sm"
                        className="text-xs py-1.5 px-3 font-bold"
                      >
                        <WhatsAppIcon size={14} />
                        <span>Orçar</span>
                      </GlowingButton>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. MODAL INTERATIVO DE DETALHES DO SERVIÇO */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative"
            >
              {/* Header do Modal com Imagem */}
              <div className="relative h-48 w-full bg-slate-900">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001038] via-transparent to-transparent opacity-90" />
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  aria-label="Fechar"
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                >
                  <X size={18} />
                </button>
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FE7600] text-white">
                    {selectedService.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Corpo do Modal */}
              <div className="p-6">
                <p className="text-sm text-slate-700 leading-relaxed mb-5">
                  {selectedService.fullDesc}
                </p>

                <h4 className="text-xs font-bold uppercase tracking-wider text-[#00206D] mb-3">
                  Principais Vantagens &amp; Diferenciais:
                </h4>
                <ul className="space-y-2.5 mb-6">
                  {selectedService.benefits.map((b, i) => (
                    <li
                      key={i}
                      className="text-xs sm:text-sm text-slate-600 flex items-start gap-2"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-[#FE7600] shrink-0 mt-0.5"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer do Modal com CTA */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                  <GlowingButton
                    href={getWhatsAppUrl(selectedService.whatsappMessage)}
                    target="_blank"
                    variant="orange"
                    size="md"
                    className="flex-1 justify-center font-bold"
                  >
                    <WhatsAppIcon size={18} />
                    <span>{selectedService.ctaText}</span>
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setSelectedService(null)}
                    className="px-4 py-2.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-semibold transition-colors"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 7. DIFERENCIAL EXCLUSIVO — TRADIÇÃO DE MAIS DE 30 ANOS EM BH */}
      <section id="sobre" className="py-16 sm:py-20 bg-gradient-to-b from-[#001954] to-[#001038] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Coluna Esquerda: História & Pilares */}
            <div className="lg:col-span-7">
              <span className="eyebrow-orange mb-3">SOBRE A SOL E PISCINA</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Mais de 30 anos transformando quintais e sítios em refúgios de lazer
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
                Fundada em Belo Horizonte, a <strong className="text-white">Sol e Piscina</strong> construiu uma trajetória sólida pautada pelo respeito aos prazos, qualidade técnica irretocável e atendimento cordial. Sob a liderança do <strong className="text-[#FE7600]">Sr. Robson</strong> e com a consultoria atenciosa do <strong className="text-[#FE7600]">Benedito</strong>, já realizamos mais de 1.000 projetos em toda a região metropolitana.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-[#00267F]/70 border border-[#13398D] rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#FE7600]/20 flex items-center justify-center text-[#FE7600]">
                      <Award size={18} />
                    </div>
                    <h3 className="font-bold text-white text-sm">Mais de MIL Sonhos</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Piscinas construídas e reformadas para famílias, condomínios e áreas recreativas em toda Minas Gerais.
                  </p>
                </div>

                <div className="bg-[#00267F]/70 border border-[#13398D] rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-[#38BDF8]">
                      <HeartHandshake size={18} />
                    </div>
                    <h3 className="font-bold text-white text-sm">Atendimento Formidável</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Elogiado nominalmente por clientes no Google: orientação técnica honesta sem tentar empurrar produtos desnecessários.
                  </p>
                </div>

                <div className="bg-[#00267F]/70 border border-[#13398D] rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Shield size={18} />
                    </div>
                    <h3 className="font-bold text-white text-sm">Garantia que Cumpre</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Instalações hidráulicas e estruturais executadas dentro das normas técnicas ABNT, com suporte pós-obra de verdade.
                  </p>
                </div>

                <div className="bg-[#00267F]/70 border border-[#13398D] rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
                      <MapPin size={18} />
                    </div>
                    <h3 className="font-bold text-white text-sm">Loja e Showroom em BH</h3>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Localização privilegiada na Av. José Cândido da Silveira, 297 - Cidade Nova, com estacionamento e pronta entrega.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <GlowingButton
                  href={getWhatsAppUrl("Olá! Gostaria de conversar com a Sol e Piscina sobre um projeto para minha casa.")}
                  target="_blank"
                  variant="orange"
                  size="md"
                  className="font-bold justify-center"
                >
                  <WhatsAppIcon size={18} />
                  <span>Falar com o Sr. Robson / Benedito</span>
                </GlowingButton>
                <a
                  href={`tel:${LANDLINE_DISPLAY.replace(/\D/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300/40 text-slate-200 hover:text-white hover:bg-white/10 text-sm font-semibold transition-colors"
                >
                  <Phone size={16} className="text-[#FE7600]" />
                  <span>{LANDLINE_DISPLAY}</span>
                </a>
              </div>
            </div>

            {/* Coluna Direita: Imagem de Destaque da Fachada / Equipe */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-900 group">
                <div className="relative h-[420px] w-full">
                  <Image
                    src="/sobre-lazer-pool.jpg"
                    alt="Área de lazer com piscina construída pela Sol e Piscina em Belo Horizonte"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001038] via-transparent to-transparent opacity-80" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-[#001954]/90 backdrop-blur-md border border-[#13398D] rounded-xl p-4 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FE7600] flex items-center justify-center font-bold text-white shrink-0">
                      30+
                    </div>
                    <div>
                      <p className="text-xs text-[#FE7600] font-bold">TRADIÇÃO FAMILIAR</p>
                      <p className="text-sm font-bold">Sol e Piscina BH</p>
                      <p className="text-xs text-slate-300">
                        Compromisso com cada cliente e excelência comprovada
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. GALERIA DE OBRAS & PROJETOS REAIS */}
      <section id="galeria" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="eyebrow-orange mb-2">PORTFÓLIO REAL</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#00206D] tracking-tight">
                Obras Concluídas em Belo Horizonte &amp; Região
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Conheça alguns dos mais de 1.000 projetos entregues com piscinas de vinil, fibra, alvenaria e aquecimento solar.
              </p>
            </div>
            <GlowingButton
              href={getWhatsAppUrl("Olá! Gostaria de ver mais fotos de obras e modelos de piscinas da Sol e Piscina.")}
              target="_blank"
              variant="orange"
              size="sm"
              className="font-bold shrink-0"
            >
              <WhatsAppIcon size={16} />
              <span>Solicitar Catálogo Completo</span>
            </GlowingButton>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 bg-slate-900 flex flex-col"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#FE7600] text-white">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-bold text-sm leading-snug drop-shadow-sm">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-200 line-clamp-2 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. LOJA FÍSICA NA AV. JOSÉ CÂNDIDO DA SILVEIRA, 297 — CIDADE NOVA BH */}
      <section id="loja" className="py-16 sm:py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Foto Real da Fachada / Estrutura */}
              <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-slate-900">
                <Image
                  src="/loja-showroom-pool.jpg"
                  alt="Estrutura e projetos da Sol e Piscina em Belo Horizonte"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001038] via-transparent to-transparent opacity-75" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FE7600] text-white shadow-md">
                    Loja Física &amp; Showroom
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs text-[#FE7600] font-bold uppercase tracking-wider">
                    Venha nos Visitar
                  </p>
                  <p className="text-lg font-bold">Sol e Piscina BH</p>
                  <p className="text-xs text-slate-300">
                    Av. José Cândido da Silveira, 297 - Cidade Nova, Belo Horizonte - MG
                  </p>
                </div>
              </div>

              {/* Informações de Localização & Rotas */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="eyebrow-orange mb-2">LOJA &amp; ATENDIMENTO</span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#00206D] mb-4">
                    Tudo para sua piscina com fácil acesso e estacionamento em BH
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Em nossa loja física você encontra produtos químicos (cloros, algicidas, clarificantes), filtros, bombas, cascatas, iluminação e pode conversar pessoalmente com os especialistas da Sol e Piscina para planejar sua obra ou reforma.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#FE7600] flex items-center justify-center shrink-0 border border-orange-200 mt-0.5">
                        <MapPin size={16} />
                      </div>
                      <div className="text-xs sm:text-sm">
                        <p className="font-bold text-slate-800">Endereço:</p>
                        <p className="text-slate-600">Av. José Cândido da Silveira, 297</p>
                        <p className="text-slate-500">Cidade Nova · BH - MG · 31170-193</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#00206D] flex items-center justify-center shrink-0 border border-blue-200 mt-0.5">
                        <Clock size={16} />
                      </div>
                      <div className="text-xs sm:text-sm">
                        <p className="font-bold text-slate-800">Horário de Funcionamento:</p>
                        <p className="text-slate-600">Segunda a Sexta: 08h30 às 17h00</p>
                        <p className="text-slate-500">Sábado: 08h30 às 12h30</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200 mt-0.5">
                        <WhatsAppIcon size={16} />
                      </div>
                      <div className="text-xs sm:text-sm">
                        <p className="font-bold text-slate-800">WhatsApp Direto:</p>
                        <p className="text-emerald-700 font-bold">{PHONE_DISPLAY}</p>
                        <p className="text-slate-500">Atendimento ágil para orçamentos</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 text-[#00206D] flex items-center justify-center shrink-0 border border-indigo-200 mt-0.5">
                        <Phone size={16} />
                      </div>
                      <div className="text-xs sm:text-sm">
                        <p className="font-bold text-slate-800">Telefone Fixo da Loja:</p>
                        <p className="text-slate-700 font-bold">{LANDLINE_DISPLAY}</p>
                        <p className="text-slate-500">Tire dúvidas por telefone</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botões de Rotas em 1 Clique */}
                <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-3">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#00206D] hover:bg-[#001954] text-white text-xs sm:text-sm font-bold shadow-xs transition-colors"
                  >
                    <Navigation size={16} className="text-[#FE7600]" />
                    <span>Abrir no Google Maps</span>
                    <ExternalLink size={13} className="opacity-70" />
                  </a>

                  <a
                    href={WAZE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 hover:border-[#FE7600] text-slate-700 hover:text-[#FE7600] text-xs sm:text-sm font-bold transition-colors"
                  >
                    <Compass size={16} className="text-[#FE7600]" />
                    <span>Como Chegar pelo Waze</span>
                    <ExternalLink size={13} className="opacity-70" />
                  </a>

                  <GlowingButton
                    href={getWhatsAppUrl("Olá! Gostaria de confirmar a disponibilidade de um produto para retirada na loja da Sol e Piscina.")}
                    target="_blank"
                    variant="orange"
                    size="sm"
                    className="font-bold"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Falar com o Balcão</span>
                  </GlowingButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. PROVA SOCIAL — DEPOIMENTOS REAIS DO GOOGLE */}
      <section id="depoimentos" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            {/* Badge Google */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#E06800] text-xs font-bold mb-3">
              <Star size={14} className="fill-[#FE7600] text-[#FE7600]" />
              <span>Avaliações Reais de Clientes no Google Maps</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#00206D] tracking-tight">
              A confiança de quem já realizou o sonho da piscina conosco
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Confira depoimentos públicos deixados por moradores de Belo Horizonte e região na nossa página do Google.
            </p>
          </div>

          {/* Grid de Depoimentos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((rev, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-[#FED7AA] hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={15}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-[#FE7600] bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
                      {rev.service}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-5">
                    &quot;{rev.comment}&quot;
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#00206D] text-white font-bold text-xs flex items-center justify-center">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-[#00206D]">
                      {rev.name}
                    </h3>
                    <p className="text-[11px] text-slate-500">{rev.tag}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#00206D] hover:text-[#FE7600] transition-colors"
            >
              <span>Ver todas as avaliações no perfil do Google</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* 11. FAQ — PERGUNTAS FREQUENTES */}
      <section id="faq" className="py-16 sm:py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="eyebrow-orange mb-2">TIRE SUAS DÚVIDAS</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#00206D] tracking-tight">
              Perguntas Frequentes sobre Piscinas &amp; Aquecimento
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Respostas claras para as dúvidas mais comuns de quem quer construir, reformar ou cuidar da piscina.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-[#FE7600] transition-colors cursor-pointer text-sm sm:text-base"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`text-[#FE7600] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Dúvida adicional CTA */}
          <div className="mt-10 p-6 rounded-2xl bg-orange-50 border border-orange-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h3 className="font-bold text-[#00206D] text-sm sm:text-base">
                Ficou com alguma dúvida específica sobre a sua piscina?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Nossa equipe técnica atende prontamente pelo WhatsApp sem compromisso.
              </p>
            </div>
            <GlowingButton
              href={getWhatsAppUrl("Olá! Tenho uma dúvida sobre piscina/aquecimento e gostaria de falar com a Sol e Piscina.")}
              target="_blank"
              variant="orange"
              size="sm"
              className="font-bold shrink-0"
            >
              <WhatsAppIcon size={16} />
              <span>Tirar Dúvida no WhatsApp</span>
            </GlowingButton>
          </div>
        </div>
      </section>

      {/* 12. BANNER FINAL DE CONVERSÃO / CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#001038] via-[#001954] to-[#00206D] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FE7600]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#FE7600] text-white uppercase tracking-wider mb-4 inline-block shadow-md">
            Mais de 30 Anos de Confiança
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-5">
            Pronto para transformar a área de lazer da sua família?
          </h2>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8">
            Solicite um orçamento gratuito sem compromisso para construção, troca de vinil, aquecimento solar ou equipamentos com a equipe da Sol e Piscina.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <GlowingButton
              href={getWhatsAppUrl("Olá! Gostaria de receber um orçamento gratuito para piscina com a Sol e Piscina.")}
              target="_blank"
              variant="orange"
              size="lg"
              className="w-full sm:w-auto font-black text-base px-8 py-4 shadow-xl shadow-orange-500/25 justify-center"
            >
              <WhatsAppIcon size={20} />
              <span>Chamar no WhatsApp: {PHONE_DISPLAY}</span>
              <ArrowRight size={18} />
            </GlowingButton>

            <a
              href={`tel:${LANDLINE_DISPLAY.replace(/\D/g, "")}`}
              className="w-full sm:w-auto px-6 py-4 rounded-lg bg-white/10 hover:bg-white text-white hover:text-[#00206D] font-bold text-sm transition-all border border-white/30 flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              <span>Ligar: {LANDLINE_DISPLAY}</span>
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-300 flex-wrap">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#FE7600]" />
              Atendimento rápido em BH e região
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#FE7600]" />
              Projetos sob medida em vinil, fibra e alvenaria
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-[#FE7600]" />
              Garantia e mais de 30 anos de credibilidade
            </span>
          </div>
        </div>
      </section>

      {/* 13. FOOTER COMPLETO COM DADOS DA EMPRESA */}
      <footer className="bg-[#001038] text-slate-300 text-xs sm:text-sm border-t border-[#13398D]/60 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Coluna 1: Logo & Missão */}
            <div>
              <div className="inline-block bg-white px-3.5 py-2 rounded-2xl shadow-sm mb-4 border border-white/20">
                <div className="relative w-48 sm:w-56 h-16">
                  <Image
                    src={LOGO_CLEAN_SRC}
                    alt="Sol e Piscina BH"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Especializados em construção, manutenção e aquecimento de piscinas, spas e saunas em Belo Horizonte. Mais de 30 anos no mercado e mais de MIL sonhos realizados.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Sol e Piscina"
                  className="w-9 h-9 rounded-lg bg-[#001954] border border-[#13398D] flex items-center justify-center text-slate-200 hover:text-[#FE7600] hover:border-[#FE7600] transition-colors"
                >
                  <InstagramIcon size={16} />
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp da Sol e Piscina"
                  className="w-9 h-9 rounded-lg bg-[#001954] border border-[#13398D] flex items-center justify-center text-emerald-400 hover:text-emerald-300 hover:border-emerald-400 transition-colors"
                >
                  <WhatsAppIcon size={16} />
                </a>
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Perfil Google da Sol e Piscina"
                  className="w-9 h-9 rounded-lg bg-[#001954] border border-[#13398D] flex items-center justify-center text-amber-400 hover:text-amber-300 hover:border-amber-400 transition-colors"
                >
                  <Star size={16} />
                </a>
              </div>
            </div>

            {/* Coluna 2: Produtos & Serviços */}
            <div>
              <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4 text-[#FE7600]">
                Produtos &amp; Serviços
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#servicos" className="hover:text-white transition-colors">
                    Construção de Piscinas de Vinil
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition-colors">
                    Piscinas de Fibra e Alvenaria
                  </a>
                </li>
                <li>
                  <a href="#reforma" className="hover:text-white transition-colors text-[#FE7600] font-semibold">
                    Troca de Vinil (Renovamos Sua Piscina)
                  </a>
                </li>
                <li>
                  <a href="#aquecimento" className="hover:text-white transition-colors">
                    Aquecimento Solar para Piscinas
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition-colors">
                    Trocadores de Calor / Bombas de Calor
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition-colors">
                    Spas de Hidromassagem &amp; Saunas
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition-colors">
                    Bombas, Filtros e Areia Especial
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="hover:text-white transition-colors">
                    Produtos Químicos para Tratamento da Água
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Links Rápidos & Cidades */}
            <div>
              <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4 text-[#FE7600]">
                Regiões Atendidas
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>Belo Horizonte (Cidade Nova, Santa Inês, Centro-Sul)</li>
                <li>Pampulha, Mangabeiras e Buritis</li>
                <li>Nova Lima e Alphaville</li>
                <li>Lagoa Santa e Vespasiano</li>
                <li>Contagem e Betim</li>
                <li>Condomínios de Sítios na Grande BH</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-[#13398D]/60 text-xs">
                <p className="font-bold text-white mb-1">Horário de Funcionamento:</p>
                <p>Segunda a Sexta: 08h30 às 17h00</p>
                <p>Sábado: 08h30 às 12h30</p>
              </div>
            </div>

            {/* Coluna 4: Contato & Endereço */}
            <div>
              <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4 text-[#FE7600]">
                Contato &amp; Localização
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2">
                  <MapPin size={15} className="text-[#FE7600] shrink-0 mt-0.5" />
                  <span>{ADDRESS_DISPLAY}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={15} className="text-[#FE7600] shrink-0" />
                  <span>Fixo: {LANDLINE_DISPLAY}</span>
                </div>
                <div className="flex items-center gap-2">
                  <WhatsAppIcon size={15} className="text-emerald-400 shrink-0" />
                  <span className="font-bold text-emerald-400">WhatsApp: {PHONE_DISPLAY}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={15} className="text-[#FE7600] shrink-0" />
                  <span>{EMAIL_CONTACT}</span>
                </div>
              </div>
              <div className="mt-4">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#FE7600] hover:underline font-bold"
                >
                  <span>Ver rotas no Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright e Assinatura */}
          <div className="pt-8 border-t border-[#13398D]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              © {new Date().getFullYear()} {COMPANY_NAME}. Todos os direitos reservados.
            </p>
            <p className="text-slate-500">
              {ADDRESS_STREET} · {ADDRESS_NEIGHBORHOOD} · {ADDRESS_CITY}
            </p>
          </div>
        </div>
      </footer>

      {/* 14. BOTÃO FLUTUANTE DE WHATSAPP COM AVISO DE RESPOSTA RÁPIDA */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2 group">
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Atendimento Sol e Piscina BH</span>
        </div>
        <a
          href={getWhatsAppUrl("Olá! Estava no site da Sol e Piscina e gostaria de tirar uma dúvida sobre piscina/aquecimento.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar pelo WhatsApp com a Sol e Piscina"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white"
        >
          <WhatsAppIcon size={30} />
        </a>
      </div>
    </main>
  );
}
