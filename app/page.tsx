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
  Layers,
  Cpu,
  BadgeCheck,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Informações Oficiais — Aqualife Piscinas e Spas (Contagem - MG)
const COMPANY_NAME = "Aqualife Piscinas e Spas";
const COMPANY_FULL_NAME =
  "Aqualife Piscinas e Spas — Projetos, Venda de Equipamentos e Execução";
const BRAND_SLOGAN = "Há mais de 20 anos realizando sonhos em piscinas, spas e saunas!";
const BRAND_SUBTITLE =
  "Especialistas em projetos 3D, construção em alvenaria, vinil e fibra, aquecimento solar, spas de hidromassagem, saunas e loja completa em Contagem e Grande BH.";

const WHATSAPP_NUMBER = "5531984665062";
const PHONE_DISPLAY = "(31) 98466-5062";
const LANDLINE_DISPLAY = "(31) 2564-5327";
const EMAIL_CONTACT = "contato@aqualifepiscinas.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/piscinasaqualife/";
const INSTAGRAM_HANDLE = "@piscinasaqualife";
const WEBSITE_URL = "https://aqualifepiscinas.com.br";

const ADDRESS_STREET = "R. Maria da Conceição de São José, 175";
const ADDRESS_NEIGHBORHOOD = "Arcadia";
const ADDRESS_CITY = "Contagem - MG";
const ADDRESS_CEP = "32041-400";
const ADDRESS_DISPLAY =
  "R. Maria da Conceição de São José, 175 - Arcadia, Contagem - MG, 32041-400";
const CITIES_SERVED =
  "Contagem, Belo Horizonte, Betim, Nova Lima, Lagoa Santa, Ribeirão das Neves, Esmeraldas, Igarapé, Brumadinho e Região Metropolitana de BH";

const GOOGLE_REVIEW_COUNT = "40";
const GOOGLE_RATING = "4.9";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Aqualife+Piscinas+e+Projetos%0ABeatriz+%C2%B7+Contagem+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=R.+Maria+da+Concei%C3%A7%C3%A3o+de+S%C3%A3o+Jos%C3%A9%2C+175+-+Arcadia%2C+Contagem+-+MG%2C+32041-400";
const WAZE_MAPS_URL =
  "https://waze.com/ul?q=Rua+Maria+da+Conceicao+de+Sao+Jose+175+Arcadia+Contagem+MG";

// Assets Oficiais da Aqualife
const LOGO_SRC = "/logo-aqualife.png";
const LOGO_CLEAN_SRC = "/logo-clean.png";
const SUN_ICON_SRC = "/brand-sun.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá! Gostaria de um orçamento para piscinas, spas ou equipamentos com a equipe da Aqualife Piscinas.";
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
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

// 8 Pilares de Serviços da Aqualife Piscinas e Spas
interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  badge: string;
  icon: typeof Waves;
  image: string;
  fullDesc: string;
  benefits: string[];
  ctaText: string;
  whatsappMessage: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "projetos-3d",
    title: "Projetos Personalizados & Modelagem 3D",
    shortDesc:
      "Planejamento arquitetônico completo, compatibilização hidráulica e maquete 3D realista para visualizar sua área de lazer antes de iniciar a obra.",
    badge: "Engenharia & Arquitetura",
    icon: Compass,
    image: "/aqualife-projeto.jpg",
    fullDesc:
      "A Aqualife conta com equipe técnica qualificada com engenheiros civis, arquitetos e paisagistas há mais de 20 anos. Desenvolvemos o projeto exclusivo da sua piscina dimensionando topografia, orientação solar, profundidades ergonômicas, prainhas, iluminação cênica e áreas de descanso para que o resultado final supere todas as expectativas.",
    benefits: [
      "Visualização 3D realista com integração de deck, spa e paisagismo",
      "Cálculo estrutural e dimensionamento hidráulico normatizado",
      "Aproveitamento ideal da incidência solar no seu terreno",
      "Economia na execução ao evitar retrabalhos e desperdícios",
    ],
    ctaText: "Solicitar Projeto Personalizado",
    whatsappMessage:
      "Olá! Gostaria de um projeto 3D personalizado para minha área de lazer com a equipe da Aqualife Piscinas.",
  },
  {
    id: "construcao-piscinas",
    title: "Construção de Piscinas (Alvenaria, Vinil e Fibra)",
    shortDesc:
      "Execução técnica completa com fundação reforçada, estanqueidade garantida, revestimentos de alto padrão e cumprimento rigoroso de prazos.",
    badge: "Mais de 20 Anos de Obras",
    icon: Waves,
    image: "/aqualife-0001_piscinas.jpg",
    fullDesc:
      "Seja uma piscina imponente em alvenaria com pedras nobres e pastilhas de porcelana, um modelo versátil em vinil com estampas exclusivas, ou uma prática piscina de fibra com instalação ágil, a Aqualife cuida de todas as etapas: da escavação e concretagem à hidráulica e acabamento final com garantia comprovada.",
    benefits: [
      "Equipe experiente com centenas de piscinas construídas em Contagem e Grande BH",
      "Impermeabilização profissional de alta durabilidade e estanqueidade",
      "Variedade de revestimentos: Hijau, pedras atérmicas, pastilhas e vinil premium",
      "Supervisão técnica contínua e entrega pontual com qualidade de acabamento",
    ],
    ctaText: "Pedir Orçamento de Construção",
    whatsappMessage:
      "Olá! Tenho interesse em construir uma piscina e gostaria de um orçamento com a Aqualife.",
  },
  {
    id: "aquecimento-solar",
    title: "Aquecimento Solar & Bombas de Calor (Inverter)",
    shortDesc:
      "Água na temperatura perfeita os 365 dias do ano com máxima eficiência energética, coletores solares de alta absorção e termostato digital.",
    badge: "Conforto Térmico 365 Dias",
    icon: Flame,
    image: "/aqualife-0003_aquecimento.jpg",
    fullDesc:
      "Multiplique o uso da sua piscina! A Aqualife é referência no dimensionamento e instalação de sistemas de aquecimento solar ecológicos com coletores de alto rendimento e bombas de calor (trocadores de calor elétricos) com tecnologia inverter, garantindo água quente até nos dias nublados com baixo consumo de eletricidade.",
    benefits: [
      "Aquecimento solar sustentável com retorno rápido do investimento",
      "Trocadores de calor silenciosos de última geração para banho quente o ano todo",
      "Dimensionamento térmico exato para o volume de água da sua piscina",
      "Instalação hidráulica limpa com capas térmicas para retenção de calor",
    ],
    ctaText: "Dimensionar Aquecedor da Minha Piscina",
    whatsappMessage:
      "Olá! Gostaria de consultar opções de aquecimento solar ou bomba de calor para minha piscina com a Aqualife.",
  },
  {
    id: "spas-hidromassagem",
    title: "Spas de Hidromassagem & Banheiras de Relaxamento",
    shortDesc:
      "Refúgio de hidroterapia privativo: spas ergonômicos, jatos direcionais reguláveis, cromoterapia e aquecedor acoplado para seu bem-estar diário.",
    badge: "Hidroterapia & Conforto",
    icon: Bath,
    image: "/aqualife-spa-6-1.jpg",
    fullDesc:
      "Tenha um spa de hotel 5 estrelas no conforto do seu lar. A Aqualife fornece e instala spas completos com acentos anatômicos, jatos de alta pressão estrategicamente posicionados para alívio muscular, sistemas de filtragem independentes, decks de madeira ou porcelanato e controle digital de temperatura.",
    benefits: [
      "Modelos compactos e amplos para 2 até 8 pessoas com máxima ergonomia",
      "Jatos de hidromassagem terapêuticos e cromoterapia relaxante com LEDs",
      "Aquecimento rápido integrado e painel digital intuitivo",
      "Instalação hidráulica e elétrica segura executada por técnicos especializados",
    ],
    ctaText: "Conhecer Linha de Spas",
    whatsappMessage:
      "Olá! Gostaria de conhecer os modelos de spas e banheiras de hidromassagem disponíveis na Aqualife.",
  },
  {
    id: "saunas-vapor-seca",
    title: "Saunas a Vapor e Saunas Secas Sob Medida",
    shortDesc:
      "Ambientes térmicos completos para relaxamento, desintoxicação e saúde, com geradores elétricos e a gás certificados pelo Inmetro.",
    badge: "Saúde & Bem-Estar",
    icon: Sparkles,
    image: "/aqualife-sauna.jpg",
    fullDesc:
      "Invista na sua saúde e disposição diária. A Aqualife projeta e equipa saunas a vapor (úmidas) e secas com geradores de aço inox de alta durabilidade, portas herméticas em vidro temperado, quadros digitais de termostato, grelhas de ventilação corretas e luminárias blindadas à prova de umidade.",
    benefits: [
      "Geradores potentes de aquecimento rápido para uso residencial e coletivo",
      "Quadro de comando digital de fácil ajuste de temperatura e tempo",
      "Orientação técnica sobre isolamento térmico e revestimento cerâmico ou madeira",
      "Integração harmônica com a piscina e área de duchas",
    ],
    ctaText: "Consultar Projetos de Sauna",
    whatsappMessage:
      "Olá! Gostaria de mais informações e orçamento para equipamento e projeto de sauna com a Aqualife.",
  },
  {
    id: "iluminacao-cascatas",
    title: "Iluminação Cênica em LED & Cascatas Elegantes",
    shortDesc:
      "Cenografia aquática sofisticada: refletores subaquáticos RGB com controle remoto ou app e cascatas em aço inox de design marcante.",
    badge: "Design & Tecnologia",
    icon: Sun,
    image: "/aqualife-0002_iluminacao.jpg",
    fullDesc:
      "Transforme a sua piscina à noite em um espetáculo visual relaxante. Oferecemos refletores LED subaquáticos de alto brilho com consumo ultra baixo em 12V (total segurança), módulos com trocas de cores e sincronização musical, além de cascatas laminares e embutidas em aço inox 304 e 316 resistentes à maresia e ao cloro.",
    benefits: [
      "Iluminação LED de longa vida útil com padrão de segurança contra choques",
      "Controladores inteligentes via controle sem fio ou integração com automação",
      "Cascatas de parede, embutidas ou de piso com efeito cascata suave e sonoro",
      "Bordas e acessórios em inox que agregam alto valor ao imóvel",
    ],
    ctaText: "Ver Cascatas e Iluminação",
    whatsappMessage:
      "Olá! Gostaria de um orçamento para iluminação LED e cascatas para piscina com a Aqualife.",
  },
  {
    id: "quadro-comando",
    title: "Quadro de Comando, Bombas & Instalação Hidráulica",
    shortDesc:
      "Centralização elétrica inteligente e segura da casa de máquinas: disjuntores de proteção DR, temporizadores e motobombas silenciosas.",
    badge: "Segurança Elétrica & Automação",
    icon: Wrench,
    image: "/aqualife-quadro-de-comando.jpg",
    fullDesc:
      "A segurança elétrica e a eficiência da casa de máquinas são essenciais. A Aqualife monta quadros de comando normatizados (com proteção DR anti-choque), timers digitais para acionamento automático da filtragem, bombas autoescorvantes de baixo ruído e tubulações de PVC reforçadas sem vazamentos.",
    benefits: [
      "Montagem organizada que facilita manutenções e inspeções periódicas",
      "Proteção completa contra oscilações de energia e risco de choque elétrico",
      "Filtros de alta vazão dimensionados para água cristalina com menor tempo de bomba",
      "Instalação profissional com garantia e assistência técnica especializada",
    ],
    ctaText: "Falar com Técnico em Casa de Máquinas",
    whatsappMessage:
      "Olá! Preciso de montagem ou manutenção de quadro de comando, bomba ou filtro com a Aqualife.",
  },
  {
    id: "loja-produtos-quimicos",
    title: "Loja Física, Produtos Sem Cloro & Tratamento da Água",
    shortDesc:
      "Consultoria técnica especializada em Contagem: linha de produtos sem cloro (Peróxido e M20), areia para filtro, cloros, testes e químicos de alta pureza.",
    badge: "Loja em Contagem · Retirada Rápida",
    icon: Droplets,
    image: "/aqualife-limpeza.jpg",
    fullDesc:
      "Visite nossa loja na Rua Maria da Conceição de São José, 175 - Arcadia, Contagem. Contamos com estoque completo de produtos químicos certificados, consultoria personalizada para ajuste de pH e alcalinidade, orientação para troca de areia do filtro e produtos especiais sem cloro para quem busca banho sem irritação nos olhos e pele.",
    benefits: [
      "Estoque à pronta entrega com atendimento ágil por WhatsApp e balcão",
      "Especialistas em produtos alternativos sem cloro: Peróxido e M20",
      "Areia selecionada para filtros de piscina com instrução de troca correta",
      "Orientação técnica precisa para economia de produtos e água cristalina",
    ],
    ctaText: "Consultar Produtos na Loja",
    whatsappMessage:
      "Olá! Gostaria de consultar produtos químicos, troca de areia ou itens de manutenção na loja da Aqualife.",
  },
];

// Depoimentos Reais do Google Maps da Aqualife Piscinas (4,9 Estrelas · 40 Avaliações)
const REVIEWS = [
  {
    name: "Raiane Rodrigues",
    tag: "7 avaliações · Cliente Verificada",
    rating: 5,
    service: "Planejamento e Execução de Piscina",
    comment:
      "Trabalho impecável, valorizou super meu espaço com a piscina perfeitamente planejada. Indico de olhos fechados.",
  },
  {
    name: "Juliana Patrocinio",
    tag: "2 avaliações · Cliente Verificada",
    rating: 5,
    service: "Construção de Piscina Residencial",
    comment:
      "Excelente equipe! Fiz minha piscina com eles e não tinha como ter ficado melhor! Indico de olhos fechados!",
  },
  {
    name: "Andrea de souza",
    tag: "Local Guide · 25 avaliações · 4 fotos",
    rating: 5,
    service: "Produtos Sem Cloro (Peróxido e M20) & Agilidade",
    comment:
      "Uma ótima experiência, respondem rápido pelo WhatsApp. Pedi produtos sem cloro para piscina e eles tinham (peróxido e M20); fiz o pedido e antes do tempo os produtos já estavam comigo. Recomendo a loja. Seriedade e agilidade.",
  },
  {
    name: "Thais Rosária",
    tag: "6 avaliações · Cliente Verificada",
    rating: 5,
    service: "Consultoria e Produtos de Tratamento",
    comment:
      "Atendimento maravilhoso, tirou todas as minhas dúvidas e me ajudou em quais produtos certos levar. Super indico e comprarei sempre aqui.",
  },
  {
    name: "Industrial Implantes",
    tag: "1 avaliação · Cliente Corporativo",
    rating: 5,
    service: "Atendimento Rápido e Cordial",
    comment:
      "A Júlia me atendeu, super solicita e educada! Tirou todas minhas dúvidas por ligação e finalizamos o pedido pelo whats, virei cliente, obrigada pela cordialidade.",
  },
  {
    name: "Andréa Rejane",
    tag: "1 avaliação · Cliente Verificada",
    rating: 5,
    service: "Qualidade, Preço Justo e Rapidez",
    comment:
      "Produtos de ótima qualidade, atenciosos, profissionalismo no atendimento, preço justo e rápidos nos pedidos e entrega.",
  },
  {
    name: "Jose Nadir",
    tag: "Local Guide · 20 avaliações",
    rating: 5,
    service: "Compromisso e Prazo de Entrega",
    comment:
      "Serviço prestado de muito compromisso e entregue dentro do prazo.",
  },
  {
    name: "Reinaldo Bruno",
    tag: "Local Guide · 2 avaliações · 5 fotos",
    rating: 5,
    service: "Atendimento e Qualidade Surpreendente",
    comment:
      "Muito bom atendimento, prazo e qualidade surpreendente.",
  },
  {
    name: "Paula Carmo",
    tag: "1 avaliação · Cliente Verificada",
    rating: 5,
    service: "Orientação para Troca de Areia do Filtro",
    comment:
      "Trocar areia do filtro é necessário e a Aqualife piscinas te orienta qual tipo de areia para filtrar a água da sua piscina.",
  },
  {
    name: "Alexandre Rangel",
    tag: "8 avaliações · Cliente Verificado",
    rating: 5,
    service: "Atendimento e Preços Justos",
    comment:
      "Ótimo atendimento e preços justos!",
  },
  {
    name: "João Trevenzoli",
    tag: "4 avaliações · Cliente Verificado",
    rating: 5,
    service: "Profissionais de Altíssima Qualidade",
    comment:
      "Excelente empresa, com profissionais de altíssima qualidade!",
  },
  {
    name: "Marques Fernando Dos Santos",
    tag: "8 avaliações · Cliente Verificado",
    rating: 5,
    service: "Experiência e Atenção Técnica",
    comment:
      "Pessoal atencioso e experiente. Top!",
  },
];

// Galeria de Projetos Reais da Aqualife
interface GalleryProject {
  src: string;
  title: string;
  category: "todas" | "piscinas" | "spas" | "equipamentos";
  tag: string;
  desc: string;
}

const GALLERY_PROJECTS: GalleryProject[] = [
  {
    src: "/aqualife-vilagio-4-6-1.jpg",
    title: "Piscina Alto Padrão Residencial Vilagio",
    category: "piscinas",
    tag: "Piscina em Alvenaria",
    desc: "Projeto com borda atérmica, prainha molhada e integração arquitetônica de luxo.",
  },
  {
    src: "/aqualife-juliana-5-5-1.jpg",
    title: "Área de Lazer Completa com Prainha",
    category: "piscinas",
    tag: "Piscina & Deck",
    desc: "Projeto executado sob medida com paisagismo, escada interna e deck de madeira nobre.",
  },
  {
    src: "/aqualife-spa-6-1.jpg",
    title: "Spa de Hidroterapia Integrado",
    category: "spas",
    tag: "Spa & Relaxamento",
    desc: "Spa privativo com jatos terapêuticos de alta pressão, aquecedor e cromoterapia.",
  },
  {
    src: "/aqualife-francisco-5-11-1.jpg",
    title: "Piscina Iluminada com LED Subaquático",
    category: "piscinas",
    tag: "Iluminação Cênica",
    desc: "Iluminação RGB programável e paisagismo integrado para desfrutar a piscina à noite.",
  },
  {
    src: "/aqualife-olga-2-4-1.jpg",
    title: "Piscina Ampla com Borda Atérmica",
    category: "piscinas",
    tag: "Alvenaria & Revestimento",
    desc: "Construção de alto padrão com profundidade gradual e acabamento sofisticado.",
  },
  {
    src: "/aqualife-adilson-5-6-1.jpg",
    title: "Instalação Hidráulica & Casa de Máquinas",
    category: "equipamentos",
    tag: "Engenharia Hidráulica",
    desc: "Tubulação reforçada, bombas de alto rendimento e sistema de filtragem de máxima eficiência.",
  },
  {
    src: "/aqualife-banners-1.jpg",
    title: "Piscina com Cascata e Área Gourmet",
    category: "piscinas",
    tag: "Conceito Resort",
    desc: "Área de lazer projetada pela equipe da Aqualife com cascata em inox e aquecimento solar.",
  },
  {
    src: "/aqualife-eduardo-11-14-1.jpg",
    title: "Piscina Aquecida em Condomínio Fechado",
    category: "piscinas",
    tag: "Aquecimento Solar",
    desc: "Sistema com coletores de alta absorção mantendo a água aquecida em todas as estações.",
  },
];

// FAQ
const FAQS = [
  {
    question: "A Aqualife atende somente em Contagem ou em outras cidades também?",
    answer:
      "Atendemos toda a cidade de Contagem, Belo Horizonte, Betim, Nova Lima, Lagoa Santa, Ribeirão das Neves, Esmeraldas, Igarapé, Brumadinho e demais municípios da Região Metropolitana de BH. Nossa loja física está localizada no bairro Arcadia em Contagem, de fácil acesso e estacionamento.",
  },
  {
    question: "A Aqualife faz o projeto 3D da piscina antes de iniciar a obra?",
    answer:
      "Sim! Nossa equipe conta com engenheiros civis, arquitetos e paisagistas altamente capacitados. Criamos a modelagem 3D personalizada do seu espaço para que você visualize como ficará a piscina, deck, spa, iluminação e cascatas antes de iniciar a execução da obra.",
  },
  {
    question: "Quais são os tipos de piscinas que a Aqualife constrói e instala?",
    answer:
      "Trabalhamos com piscinas de alvenaria estrutural armada (revestidas com azulejo, pastilhas de porcelana ou pedras nobres como Hijau), piscinas em vinil com grande variedade de estampas modernas e estanqueidade total, além de piscinas de fibra de vidro de alta resistência mecânica.",
  },
  {
    question: "Tenho sensibilidade ou alergia a cloro. A Aqualife tem produtos sem cloro?",
    answer:
      "Sim! Conforme destacado nas avaliações dos nossos clientes, somos especialistas em tratamentos alternativos para piscina sem cloro, oferecendo Peróxido de Hidrogênio, M20 e sistemas ecológicos que mantêm a água cristalina e desinfetada sem ressecar a pele, irritar os olhos ou danificar cabelos.",
  },
  {
    question: "Qual a diferença entre aquecimento solar e bomba de calor (trocador de calor)?",
    answer:
      "O aquecimento solar utiliza placas coletoras instaladas no telhado que absorvem a radiação do sol com custo de energia praticamente zero. Já a bomba de calor (trocador de calor elétrico inverter) funciona como um ar-condicionado invertido, mantendo a água aquecida mesmo em dias nublados e no inverno. Muitas vezes recomendamos o sistema híbrido para conforto total 365 dias ao ano.",
  },
  {
    question: "Com que frequência devo trocar a areia do filtro da minha piscina?",
    answer:
      "A recomendação técnica varia de 1 a 2 anos dependendo da frequência de uso e do volume de sujeira da piscina. Com o tempo, a areia do filtro fica polida e perde a capacidade de reter micropartículas. Na Aqualife orientamos sobre a areia ideal para seu filtro e fornecemos o serviço de substituição.",
  },
  {
    question: "Como funciona para solicitar um orçamento sem compromisso?",
    answer:
      "É muito simples e rápido! Basta clicar em qualquer botão de WhatsApp aqui no site ou ligar diretamente para (31) 2564-5327 ou (31) 98466-5062. Você também pode visitar nossa loja na R. Maria da Conceição de São José, 175 - Arcadia, Contagem.",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [galleryFilter, setGalleryFilter] = useState<"todas" | "piscinas" | "spas" | "equipamentos">("todas");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Filtro de Galeria
  const filteredGallery =
    galleryFilter === "todas"
      ? GALLERY_PROJECTS
      : GALLERY_PROJECTS.filter((p) => p.category === galleryFilter);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0A1128] overflow-x-hidden">
      {/* 1. TOPBAR INSTITUCIONAL DE ALTO CONTRASTE */}
      <div className="bg-[#031445] text-white text-xs py-2 px-4 sm:px-6 border-b border-[#1E4BA8]/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-slate-200">
            <span className="inline-flex items-center gap-1.5 font-medium text-slate-100">
              <MapPin className="w-3.5 h-3.5 text-[#02B8FD]" />
              {ADDRESS_STREET} - Arcadia, Contagem - MG
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#FCCF04]" />
              Seg a Sex: 08h às 18h · Sáb: 08h às 13h
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#FCCF04] font-semibold hover:underline"
            >
              <Star className="w-3 h-3 fill-[#FCCF04]" />
              {GOOGLE_RATING}★ no Google ({GOOGLE_REVIEW_COUNT}+ avaliações)
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`tel:3125645327`}
              className="inline-flex items-center gap-1 text-slate-200 hover:text-white font-medium"
            >
              <Phone className="w-3 h-3 text-[#02B8FD]" />
              {LANDLINE_DISPLAY}
            </a>
          </div>
        </div>
      </div>

      {/* 2. HEADER & NAVEGAÇÃO PRINCIPAL */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          {/* Logo Oficial da Aqualife */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative h-12 w-44 sm:h-14 sm:w-52">
              <Image
                src={LOGO_SRC}
                alt="Aqualife Piscinas e Spas"
                fill
                priority
                className="object-contain object-left group-hover:scale-102 transition-transform duration-200"
              />
            </div>
          </a>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center gap-7 text-[14px] font-semibold text-slate-700">
            <a href="#inicio" className="hover:text-[#024395] transition-colors">
              Início
            </a>
            <a href="#servicos" className="hover:text-[#024395] transition-colors">
              Serviços &amp; Projetos
            </a>
            <a href="#galeria" className="hover:text-[#024395] transition-colors">
              Obras Entregues
            </a>
            <a href="#sobre" className="hover:text-[#024395] transition-colors">
              Sobre Nós
            </a>
            <a href="#loja" className="hover:text-[#024395] transition-colors">
              Loja em Contagem
            </a>
            <a href="#depoimentos" className="hover:text-[#024395] transition-colors">
              Avaliações (4.9★)
            </a>
            <a href="#contato" className="hover:text-[#024395] transition-colors">
              Contato
            </a>
          </nav>

          {/* Botões CTA Header */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Aqualife Piscinas"
              className="p-2.5 rounded-lg border border-slate-200 text-slate-600 hover:text-[#024395] hover:border-[#024395] hover:bg-slate-50 transition-colors"
            >
              <InstagramIcon size={18} />
            </a>

            <GlowingButton
              href={getWhatsAppUrl("Olá! Gostaria de falar com a Aqualife sobre um projeto de piscina ou spa.")}
              target="_blank"
              variant="whatsapp"
              size="sm"
            >
              <WhatsAppIcon size={17} />
              <span>WhatsApp</span>
            </GlowingButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-slate-200 px-4 py-6 space-y-4 shadow-xl"
            >
              <div className="flex flex-col space-y-3 font-semibold text-slate-800">
                <a
                  href="#inicio"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-[#024395]"
                >
                  Início
                </a>
                <a
                  href="#servicos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-[#024395]"
                >
                  Serviços &amp; Spas
                </a>
                <a
                  href="#galeria"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-[#024395]"
                >
                  Obras Entregues
                </a>
                <a
                  href="#sobre"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-[#024395]"
                >
                  Sobre a Empresa
                </a>
                <a
                  href="#loja"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-[#024395]"
                >
                  Loja em Contagem
                </a>
                <a
                  href="#depoimentos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-[#024395]"
                >
                  Avaliações (4.9★)
                </a>
                <a
                  href="#contato"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-[#024395]"
                >
                  Endereço &amp; Contato
                </a>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5">
                <GlowingButton
                  href={getWhatsAppUrl("Olá! Gostaria de atendimento via WhatsApp com a equipe da Aqualife Piscinas.")}
                  target="_blank"
                  variant="whatsapp"
                  size="md"
                  className="w-full"
                >
                  <WhatsAppIcon size={18} />
                  <span>Chamar no WhatsApp ({PHONE_DISPLAY})</span>
                </GlowingButton>
                <a
                  href="tel:3125645327"
                  className="flex items-center justify-center gap-2 py-2 text-slate-700 font-semibold text-sm hover:text-[#024395]"
                >
                  <Phone className="w-4 h-4 text-[#024395]" />
                  Telefone da Loja: {LANDLINE_DISPLAY}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 3. HERO SECTION COM O NOVO LOGO, FOTOS REAIS E BADGES DE CONFIANÇA */}
      <section
        id="inicio"
        className="relative bg-gradient-to-b from-[#031445] via-[#051C73] to-[#024395] text-white pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden"
      >
        {/* Elementos visuais de fundo inspirados no Sol e Ondas do Logo */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#FCCF04]/10 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#02B8FD]/15 rounded-full blur-3xl pointer-events-none -ml-40 -mb-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Coluna de Texto / Copy de Alta Conversão */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge Oficial com o Sol Radiante do Logo */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-[#FCCF04]">
                <div className="relative w-5 h-5 flex-shrink-0">
                  <Image src={SUN_ICON_SRC} alt="Sol Aqualife" fill className="object-contain" />
                </div>
                <span>★ 4.9 NO GOOGLE · MAIS DE 20 ANOS REALIZANDO SONHOS</span>
              </div>

              {/* H1 Principal com Tipografia Forte e Coesa */}
              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.15] text-white">
                Seu Projeto de <span className="text-[#02B8FD]">Piscina</span>,{" "}
                <span className="text-[#FCCF04]">Spa</span> e Área de Lazer com{" "}
                <span className="underline decoration-[#02B8FD] decoration-wavy decoration-2">
                  Excelência
                </span>
              </h1>

              {/* Proposta de Valor / Subtítulo */}
              <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Empresa especializada em criação de <strong>projetos 3D</strong>, construção em <strong>alvenaria, vinil e fibra</strong>, <strong>aquecimento solar</strong>, <strong>spas de hidromassagem</strong>, saunas e equipamentos completos com equipe própria de engenheiros e técnicos em <strong>Contagem e Grande BH</strong>.
              </p>

              {/* CTAs de Conversão Imediata */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <GlowingButton
                  href={getWhatsAppUrl("Olá! Gostaria de solicitar um orçamento para um projeto de piscina ou spa.")}
                  target="_blank"
                  variant="gold"
                  size="lg"
                  className="w-full sm:w-auto text-base shadow-xl"
                >
                  <WhatsAppIcon size={20} />
                  <span>Fazer Orçamento pelo WhatsApp</span>
                </GlowingButton>

                <GlowingButton
                  href="#servicos"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white/40 text-slate-900 bg-white hover:bg-slate-100"
                >
                  <span>Conhecer Nossos Serviços</span>
                  <ArrowRight className="w-4 h-4" />
                </GlowingButton>
              </div>

              {/* Pilares Rápidos de Confiança */}
              <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#FCCF04]">+20 Anos</div>
                  <div className="text-xs text-slate-300">de experiência sólida</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#02B8FD]">4.9★</div>
                  <div className="text-xs text-slate-300">nota máxima no Google</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
                  <div className="text-xs text-slate-300">projetos sob medida</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#FCCF04]">Loja Física</div>
                  <div className="text-xs text-slate-300">em Contagem - MG</div>
                </div>
              </div>
            </div>

            {/* Coluna Visual do Hero: Imagem Real da Obra + Card Flutuante de Avaliação */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Moldura da Foto Real de Piscina Entregue */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/3] sm:aspect-[16/11]">
                  <Image
                    src="/aqualife-banners-1.jpg"
                    alt="Piscina de luxo executada pela Aqualife Piscinas"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031445]/80 via-transparent to-transparent" />
                  
                  {/* Legenda interna */}
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#02B8FD] text-[#031445] font-extrabold text-[11px] uppercase tracking-wider mb-1">
                      Obra Real Entregue
                    </span>
                    <p className="font-semibold text-slate-100 drop-shadow-sm">
                      Projeto residencial com piscina, cascata e deck integrado
                    </p>
                  </div>
                </div>

                {/* Card Flutuante com Review Verificada Real (Raiane Rodrigues) */}
                <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white text-slate-900 rounded-xl p-4 shadow-2xl border border-slate-100 max-w-[290px] sm:max-w-[320px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-700">4.9 no Google</span>
                  </div>
                  <p className="text-xs italic text-slate-700 leading-snug">
                    &ldquo;Trabalho impecável, valorizou super meu espaço com a piscina perfeitamente planejada. Indico de olhos fechados.&rdquo;
                  </p>
                  <div className="mt-2 text-[11px] font-bold text-[#024395] flex items-center justify-between">
                    <span>— Raiane Rodrigues</span>
                    <span className="text-slate-400 font-normal">Contagem - MG</span>
                  </div>
                </div>

                {/* Badge Flutuante no Topo com o Logo Oficial */}
                <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md rounded-xl py-2 px-3 shadow-lg border border-slate-200 hidden sm:flex items-center gap-2.5">
                  <div className="relative w-24 h-7">
                    <Image src={LOGO_SRC} alt="Logo Aqualife" fill className="object-contain" />
                  </div>
                  <div className="text-[11px] font-bold text-[#024395] leading-tight border-l border-slate-200 pl-2">
                    Projetos &amp;<br />Equipamentos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BARRA DE DESTAQUE & DIFERENCIAIS DA AQUALIFE */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="p-2.5 rounded-lg bg-[#024395]/10 text-[#024395] flex-shrink-0">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Equipe Própria Especializada</h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Engenheiros, arquitetos e técnicos capacitados cuidando de cada detalhe.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="p-2.5 rounded-lg bg-[#02B8FD]/15 text-[#024395] flex-shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Garantia Estrutural Real</h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Estanqueidade perfeita, materiais certificados e execução normatizada.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="p-2.5 rounded-lg bg-[#FCCF04]/25 text-[#92400E] flex-shrink-0">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Conforto Térmico Total</h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Aquecimento solar e bombas de calor dimensionadas com máxima eficiência.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 flex-shrink-0">
                <Droplets className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Produtos Sem Cloro &amp; Loja</h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Linha de peróxido, M20, areia de filtro e químicos à pronta entrega.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO DE PILARES DE ATUAÇÃO & SERVIÇOS (COM FOTOS REAIS E MODAL INTERATIVO) */}
      <section id="servicos" className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="eyebrow">Soluções Completas</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#031445] tracking-tight">
              Tudo o Que Seu Espaço de Lazer Precisa em um Só Lugar
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Desde a concepção e cálculo estrutural até a venda de equipamentos de última geração e manutenção contínua.
            </p>
          </div>

          {/* Grid dos 8 Serviços da Aqualife */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((serv) => {
              const IconComp = serv.icon;
              return (
                <div
                  key={serv.id}
                  className="card-aqualife rounded-2xl overflow-hidden flex flex-col group cursor-pointer"
                  onClick={() => setSelectedService(serv)}
                >
                  {/* Foto do Serviço */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={serv.image}
                      alt={serv.title}
                      fill
                      className="object-cover group-hover:scale-106 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031445]/70 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#024395] text-white shadow-xs">
                      {serv.badge}
                    </span>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[#024395]">
                        <IconComp className="w-5 h-5 text-[#02B8FD]" />
                        <h3 className="font-bold text-base text-slate-900 group-hover:text-[#024395] transition-colors leading-snug">
                          {serv.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {serv.shortDesc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#024395]">
                      <span>Ver Detalhes do Serviço</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MODAL INTERATIVO DE DETALHES DO SERVIÇO SELECIONADO */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#031445]/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Header do Modal com Imagem */}
              <div className="relative h-56 sm:h-64 w-full bg-slate-900 flex-shrink-0">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031445] via-[#031445]/40 to-transparent" />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#02B8FD] text-[#031445] text-[11px] font-bold uppercase tracking-wider">
                    {selectedService.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold mt-1">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Corpo do Modal */}
              <div className="p-6 overflow-y-auto space-y-5 text-slate-700">
                <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                  {selectedService.fullDesc}
                </p>

                <div className="space-y-2.5">
                  <h4 className="font-bold text-sm text-[#031445] uppercase tracking-wider">
                    Vantagens &amp; Diferenciais da Aqualife:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                    {selectedService.benefits.map((b, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs no Modal */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
                  <GlowingButton
                    href={getWhatsAppUrl(selectedService.whatsappMessage)}
                    target="_blank"
                    variant="whatsapp"
                    size="md"
                    className="flex-1"
                  >
                    <WhatsAppIcon size={18} />
                    <span>{selectedService.ctaText}</span>
                  </GlowingButton>
                  <GlowingButton
                    onClick={() => setSelectedService(null)}
                    variant="white"
                    size="md"
                  >
                    Fechar
                  </GlowingButton>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 6. GALERIA DE PROJETOS E OBRAS ENTREGUES PELA AQUALIFE */}
      <section id="galeria" className="py-16 sm:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-2">
              <span className="eyebrow">Portfólio Real</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#031445] tracking-tight">
                Obras Executadas em Contagem e Grande BH
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-xl">
                Confira registros fotográficos de projetos reais entregues com alto padrão de acabamento, estanqueidade e clientes satisfeitos.
              </p>
            </div>

            {/* Filtros da Galeria */}
            <div className="flex flex-wrap items-center gap-2">
              {(
                [
                  { id: "todas", label: "Todas as Obras" },
                  { id: "piscinas", label: "Piscinas" },
                  { id: "spas", label: "Spas & Hidro" },
                  { id: "equipamentos", label: "Equipamentos" },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setGalleryFilter(tab.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    galleryFilter === tab.id
                      ? "bg-[#024395] text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Fotos Reais da Galeria */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGallery.map((proj, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-slate-900 aspect-[4/3] shadow-md border border-slate-100"
              >
                <Image
                  src={proj.src}
                  alt={proj.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031445] via-[#031445]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-[#FCCF04] text-[#031445] uppercase tracking-wider">
                    {proj.tag}
                  </span>
                  <h3 className="font-bold text-sm leading-snug text-white">
                    {proj.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 line-clamp-2">
                    {proj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#031445] to-[#024395] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold">
                Quer ver mais fotos de projetos semelhantes ao seu espaço?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200">
                Nossos consultores enviam fotos e vídeos detalhados das nossas obras no seu WhatsApp.
              </p>
            </div>
            <GlowingButton
              href={getWhatsAppUrl("Olá! Gostaria de ver mais fotos e modelos de piscinas construídas pela Aqualife.")}
              target="_blank"
              variant="gold"
              size="md"
            >
              <WhatsAppIcon size={18} />
              <span>Solicitar Catálogo Completo</span>
            </GlowingButton>
          </div>
        </div>
      </section>

      {/* 7. SOBRE A EMPRESA: MAIS DE 20 ANOS DE TRADIÇÃO & EQUIPE MULTIDISCIPLINAR */}
      <section id="sobre" className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Coluna Visual: Imagem Institucional */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/5]">
                <Image
                  src="/aqualife-banners-2.jpg"
                  alt="Aqualife Piscinas e Spas - Mais de 20 anos de tradição"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031445]/85 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#FCCF04]" />
                    <span className="font-extrabold text-sm uppercase tracking-wider text-[#FCCF04]">
                      Tradição &amp; Confiança
                    </span>
                  </div>
                  <p className="text-sm font-medium text-slate-200">
                    Sede própria em Contagem - MG com engenheiros, arquitetos, paisagistas e equipe técnica experiente.
                  </p>
                </div>
              </div>

              {/* Selo Flutuante de 20 Anos */}
              <div className="absolute -top-6 -right-4 sm:-right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200 text-center max-w-[150px]">
                <div className="text-3xl font-black text-[#024395]">+20</div>
                <div className="text-[11px] font-bold text-slate-700 leading-tight">
                  Anos Realizando Sonhos
                </div>
              </div>
            </div>

            {/* Coluna Textual: História, Missão e Diferenciais */}
            <div className="lg:col-span-7 space-y-6">
              <span className="eyebrow">Quem Somos</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#031445] tracking-tight">
                Mais de 20 Anos de Dedicação à Qualidade e Respeito com Você
              </h2>
              
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Empresa especializada em piscinas há mais de duas décadas no mercado mineiro, a <strong>Aqualife</strong> oferece os serviços e equipamentos mais modernos do setor: desde a criação do projeto arquitetônico em 3D, fornecimento das melhores marcas de bombas, filtros e aquecedores, até a instalação hidráulica e acabamento de alto requinte.
                </p>
                <p>
                  Com uma equipe composta de <strong>engenheiros, arquitetos, paisagistas e técnicos altamente capacitados</strong>, a Aqualife se mantém como referência no mercado através do compromisso com a qualidade técnica e, principalmente, pelo atendimento humanizado e respeito com o cliente.
                </p>
              </div>

              {/* Grade de Pilares Institucionais */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                  <div className="p-2 rounded-lg bg-[#024395]/10 text-[#024395] flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-[#02B8FD]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Do Projeto à Entrega</h4>
                    <p className="text-xs text-slate-500">Sem terceirizações confusas: suporte técnico do início ao fim.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                  <div className="p-2 rounded-lg bg-[#024395]/10 text-[#024395] flex-shrink-0">
                    <HeartHandshake className="w-5 h-5 text-[#FCCF04]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Consultoria Honesta</h4>
                    <p className="text-xs text-slate-500">Indicamos exatamente os produtos certos sem gastos supérfluos.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                  <div className="p-2 rounded-lg bg-[#024395]/10 text-[#024395] flex-shrink-0">
                    <Cpu className="w-5 h-5 text-[#024395]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Tecnologia &amp; Automação</h4>
                    <p className="text-xs text-slate-500">Quadros elétricos normatizados, bombas inverter e LEDs RGB.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                  <div className="p-2 rounded-lg bg-[#024395]/10 text-[#024395] flex-shrink-0">
                    <BadgeCheck className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">4.9★ no Google Maps</h4>
                    <p className="text-xs text-slate-500">Reconhecida com dezenas de avaliações públicas 5 estrelas.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <GlowingButton
                  href={getWhatsAppUrl("Olá! Gostaria de conversar com a equipe técnica da Aqualife Piscinas.")}
                  target="_blank"
                  variant="primary"
                  size="md"
                >
                  <WhatsAppIcon size={18} />
                  <span>Falar com Nossos Especialistas</span>
                </GlowingButton>

                <a
                  href={`tel:3125645327`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-[#024395] px-4 py-2"
                >
                  <Phone className="w-4 h-4 text-[#024395]" />
                  Ligue: {LANDLINE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SEÇÃO DA LOJA FÍSICA EM CONTAGEM: PRODUTOS QUÍMICOS, PERÓXIDO, M20 & AREIA DE FILTRO */}
      <section id="loja" className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Texto da Loja */}
            <div className="lg:col-span-7 space-y-6">
              <span className="eyebrow">Loja &amp; Showroom em Contagem</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#031445] tracking-tight">
                Produtos de Ponta, Linha Sem Cloro e Atendimento Especializado
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Nossa loja na <strong>Rua Maria da Conceição de São José, 175 - Arcadia, Contagem</strong> conta com tudo o que você precisa para manter a água da sua piscina saudável e cristalina. Destaque especial para quem busca tratamentos alternativos:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex items-start gap-3">
                  <Droplets className="w-5 h-5 text-[#024395] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[#031445]">Tratamento Sem Cloro (Peróxido &amp; M20)</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Ideal para quem tem sensibilidade ou alergia a cloro. Água sem cheiro forte, sem irritar olhos ou ressecar pele e cabelos.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-100 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-amber-900">Troca de Areia para Filtros</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Orientação técnica exata sobre a granulometria correta e a quantidade necessária para o modelo do seu filtro.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <CheckCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">Acessórios, Peças e Linha Tradicional</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Cloros estabilizados, algicidas, clarificantes, aspiradores, cabos telescópicos, peneiras, escadas e peças Albacete.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <GlowingButton
                  href={getWhatsAppUrl("Olá! Gostaria de consultar produtos químicos, peróxido ou areia para filtro na loja da Aqualife.")}
                  target="_blank"
                  variant="whatsapp"
                  size="md"
                >
                  <WhatsAppIcon size={18} />
                  <span>Pedir Produtos via WhatsApp</span>
                </GlowingButton>
                
                <GlowingButton
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  variant="outline"
                  size="md"
                >
                  <MapPin className="w-4 h-4 text-[#024395]" />
                  <span>Como Chegar à Loja</span>
                </GlowingButton>
              </div>
            </div>

            {/* Imagem da Loja e Químicos */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-square">
                <Image
                  src="/aqualife-limpeza.jpg"
                  alt="Produtos e equipamentos de limpeza na Aqualife Piscinas em Contagem"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#031445]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <span className="px-2 py-0.5 rounded bg-[#FCCF04] text-[#031445] font-bold text-[10px] uppercase">
                    Pronta Entrega
                  </span>
                  <p className="font-bold text-sm mt-1">Estoque Completo em Contagem - MG</p>
                  <p className="text-slate-200 text-xs">R. Maria da Conceição de São José, 175 - Arcadia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. DEPOIMENTOS REAIS DO GOOGLE MAPS (4,9 ESTRELAS · 40 AVALIAÇÕES) */}
      <section id="depoimentos" className="py-16 sm:py-24 bg-[#031445] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="eyebrow-cyan">Prova Social Transparente</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              O Que Nossos Clientes Dizem no Google
            </h2>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-300">
              <div className="flex text-[#FCCF04]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FCCF04]" />
                ))}
              </div>
              <span className="font-bold text-white">4.9 de 5.0</span>
              <span>•</span>
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#02B8FD] hover:underline inline-flex items-center gap-1 font-semibold"
              >
                Ver 40 avaliações no Google <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Grid de Depoimentos Reais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((rev, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-[#051C73] border border-[#1E4BA8] flex flex-col justify-between space-y-4 shadow-lg hover:border-[#02B8FD] transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-[#FCCF04]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FCCF04]" />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase font-bold text-[#02B8FD] bg-[#031445] px-2 py-0.5 rounded">
                      Google Review
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1E4BA8]/60 flex items-center justify-between text-xs">
                  <div>
                    <h3 className="font-bold text-white text-sm">{rev.name}</h3>
                    <p className="text-[11px] text-slate-400">{rev.tag}</p>
                  </div>
                  <span className="text-[11px] text-[#FCCF04] font-semibold text-right max-w-[120px] truncate">
                    {rev.service}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Chamada para Avaliar ou Conhecer */}
          <div className="mt-12 text-center">
            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors border border-white/20"
            >
              <span>Ver todas as avaliações públicas no perfil oficial do Google da Aqualife</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#02B8FD]" />
            </a>
          </div>
        </div>
      </section>

      {/* 10. FAQ: PERGUNTAS FREQUENTES ESPECÍFICAS DA AQUALIFE */}
      <section id="faq" className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-3 mb-14">
            <span className="eyebrow">Dúvidas Frequentes</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#031445] tracking-tight">
              Tudo o Que Você Precisa Saber
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Respostas claras e transparentes para suas principais dúvidas sobre projetos, obras e produtos.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#024395] transition-colors"
                  >
                    <span className="text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#024395] transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center text-xs sm:text-sm text-slate-600">
            Ainda ficou alguma dúvida?{" "}
            <a
              href={getWhatsAppUrl("Olá! Tenho uma dúvida específica e gostaria de atendimento da Aqualife.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#024395] font-bold hover:underline"
            >
              Fale diretamente com nossa equipe técnica pelo WhatsApp &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* 11. LOCALIZAÇÃO, MAPA & CONTATO */}
      <section id="contato" className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Informações de Contato e Horário */}
            <div className="lg:col-span-5 space-y-6">
              <span className="eyebrow">Venha nos Conhecer</span>
              <h2 className="text-3xl font-extrabold text-[#031445] tracking-tight">
                Estamos Prontos para Atender Você
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Venha tomar um café em nosso showroom em Contagem, ver amostras de revestimentos, equipamentos em funcionamento e tirar dúvidas técnicas direto com quem entende do assunto.
              </p>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#024395]/10 text-[#024395] flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#024395]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Endereço da Loja &amp; Showroom</h3>
                    <p className="text-slate-600 text-xs mt-0.5">{ADDRESS_DISPLAY}</p>
                    <p className="text-slate-500 text-[11px] mt-0.5">Estacionamento fácil e seguro no local</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#024395]/10 text-[#024395] flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#024395]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Telefones Oficiais</h3>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Fixo da Loja: <a href="tel:3125645327" className="font-semibold text-[#024395] hover:underline">{LANDLINE_DISPLAY}</a>
                    </p>
                    <p className="text-slate-600 text-xs">
                      WhatsApp: <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-600 hover:underline">{PHONE_DISPLAY}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#024395]/10 text-[#024395] flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#FCCF04]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Horário de Funcionamento</h3>
                    <p className="text-slate-600 text-xs mt-0.5">Segunda a Sexta-feira: 08:00 às 18:00</p>
                    <p className="text-slate-600 text-xs">Sábados: 08:00 às 13:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#024395]/10 text-[#024395] flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#024395]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">E-mail de Contato</h3>
                    <p className="text-slate-600 text-xs mt-0.5">{EMAIL_CONTACT}</p>
                  </div>
                </div>
              </div>

              {/* Botões Rápidos de Acesso */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                >
                  <Navigation className="w-4 h-4 text-[#024395]" />
                  <span>Abrir no Google Maps</span>
                </a>

                <a
                  href={WAZE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                >
                  <Navigation className="w-4 h-4 text-[#02B8FD]" />
                  <span>Navegar pelo Waze</span>
                </a>
              </div>
            </div>

            {/* Mapa Interativo / Embed do Google Maps */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg h-[400px] w-full bg-slate-100 relative">
                <iframe
                  title="Localização da Aqualife Piscinas em Contagem - MG"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.2778841490987!2d-44.0534571!3d-19.9126488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa695a43586abdb%3A0x6b9701d7350742cd!2sR.%20Maria%20da%20Concei%C3%A7%C3%A3o%20de%20S%C3%A3o%20Jos%C3%A9%2C%20175%20-%20Arc%C3%A1dia%2C%20Contagem%20-%20MG%2C%2032041-400!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FOOTER COMPLETO COM NOVO LOGO E ZERO RASTROS DE OUTRO CLIENTE */}
      <footer className="bg-[#031445] text-slate-300 pt-16 pb-12 border-t border-[#1E4BA8]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1E4BA8]/60">
            {/* Coluna 1: Logo & Apresentação */}
            <div className="lg:col-span-4 space-y-4">
              <div className="relative h-12 w-48">
                <Image
                  src={LOGO_SRC}
                  alt="Aqualife Piscinas e Spas"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
                Empresa especializada em criação de projetos 3D, construção de piscinas, spas, saunas, aquecimento solar e venda de equipamentos em Contagem e Grande BH há mais de 20 anos.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Aqualife"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp da Aqualife"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-emerald-400 transition-colors"
                >
                  <WhatsAppIcon size={18} />
                </a>
              </div>
            </div>

            {/* Coluna 2: Links Rápidos */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-white text-xs font-bold uppercase tracking-wider">Navegação</h3>
              <ul className="space-y-2 text-xs">
                <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors">Serviços &amp; Projetos</a></li>
                <li><a href="#galeria" className="hover:text-white transition-colors">Galeria de Obras</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors">Quem Somos</a></li>
                <li><a href="#loja" className="hover:text-white transition-colors">Loja em Contagem</a></li>
                <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos Google</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a></li>
              </ul>
            </div>

            {/* Coluna 3: Principais Serviços */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-white text-xs font-bold uppercase tracking-wider">Serviços Especializados</h3>
              <ul className="space-y-2 text-xs">
                <li><a href="#servicos" className="hover:text-white transition-colors">Projetos 3D de Piscinas</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors">Construção em Alvenaria, Vinil e Fibra</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors">Aquecimento Solar &amp; Bombas de Calor</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors">Spas &amp; Banheiras de Hidromassagem</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors">Saunas a Vapor e Secas</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors">Iluminação LED Cênica &amp; Cascatas</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors">Produtos Sem Cloro (Peróxido &amp; M20)</a></li>
              </ul>
            </div>

            {/* Coluna 4: Contato & Atendimento */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-white text-xs font-bold uppercase tracking-wider">Atendimento Oficial</h3>
              <div className="space-y-2 text-xs text-slate-300">
                <p className="font-semibold text-white">{COMPANY_NAME}</p>
                <p>{ADDRESS_STREET}</p>
                <p>Bairro Arcadia — Contagem - MG</p>
                <p className="pt-1">
                  Telefone Loja: <span className="text-[#FCCF04] font-bold">{LANDLINE_DISPLAY}</span>
                </p>
                <p>
                  WhatsApp: <span className="text-emerald-400 font-bold">{PHONE_DISPLAY}</span>
                </p>
                <p className="text-[11px] text-slate-400 pt-1">
                  Atendimento em Contagem, BH, Betim e toda a Região Metropolitana.
                </p>
              </div>
            </div>
          </div>

          {/* Linha Inferior com Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} {COMPANY_NAME}. Todos os direitos reservados. CNPJ e operação regularizada em Contagem - MG.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-[#FCCF04]">★ 4.9 no Google</span>
              <span>•</span>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* 13. BOTÃO FLUTUANTE DE WHATSAPP COM STATUS ONLINE */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Balão de notificação sutil */}
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-xl border border-slate-200 text-xs font-bold text-slate-800 animate-subtle-pulse">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span>Equipe online · Orçamento rápido</span>
        </div>

        <a
          href={getWhatsAppUrl("Olá! Gostaria de um orçamento com a Aqualife Piscinas e Spas.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar pelo WhatsApp com a Aqualife"
          className="w-14 h-14 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white flex items-center justify-center shadow-2xl hover:scale-108 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        >
          <WhatsAppIcon size={30} />
        </a>
      </div>
    </div>
  );
}
