import type { Metadata, Viewport } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const headingFont = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#024395",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aqualifepiscinas.com.br"),
  title:
    "Aqualife Piscinas e Spas — Projetos, Equipamentos, Saunas e Aquecimento em Contagem e Grande BH | 4.9★",
  description:
    "Especialistas há mais de 20 anos em projetos personalizados, construção de piscinas (vinil, fibra e alvenaria), spas de hidromassagem, saunas, aquecimento solar e loja de equipamentos em Contagem - MG. R. Maria da Conceição de São José, 175 - Arcadia. Telefone: (31) 2564-5327 / WhatsApp: (31) 98466-5062.",
  keywords: [
    "Aqualife",
    "Aqualife Piscinas",
    "Aqualife Piscinas e Spas",
    "Aqualife Piscinas e Projetos",
    "Piscinas em Contagem",
    "Piscinas Contagem MG",
    "Construção de piscinas Contagem",
    "Projetos de piscinas Contagem",
    "Spas de hidromassagem Contagem",
    "Saunas a vapor Contagem",
    "Aquecimento solar piscina Contagem",
    "Trocador de calor piscina MG",
    "Produtos para piscina Contagem",
    "Tratamento de piscina sem cloro",
    "Peróxido de hidrogênio piscina",
    "M20 piscina",
    "Troca de areia do filtro Contagem",
    "Loja de piscinas Arcadia Contagem",
    "Piscinas Grande BH",
  ],
  authors: [{ name: "Aqualife Piscinas e Spas — Contagem - MG" }],
  creator: "Aqualife Piscinas e Spas",
  publisher: "Aqualife Piscinas e Spas",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=aqualife2", sizes: "any" },
      { url: "/icon-32x32.png?v=aqualife2", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=aqualife2", type: "image/png", sizes: "16x16" },
      { url: "/icon-48x48.png?v=aqualife2", type: "image/png", sizes: "48x48" },
      { url: "/icon-192x192.png?v=aqualife2", type: "image/png", sizes: "192x192" },
      { url: "/icon.png?v=aqualife2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=aqualife2",
    apple: [{ url: "/apple-icon.png?v=aqualife2", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://aqualifepiscinas.com.br",
    title:
      "Aqualife Piscinas e Spas — Projetos, Venda de Equipamentos e Execução",
    description:
      "Há mais de 20 anos realizando sonhos. Piscinas, Spas, Saunas e Aquecimento sob medida em Contagem e Grande BH. Avaliação 4.9★ no Google. WhatsApp: (31) 98466-5062.",
    siteName: "Aqualife Piscinas e Spas",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aqualife Piscinas e Spas — Contagem - MG",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeGoodsStore",
    name: "Aqualife Piscinas e Spas",
    alternateName: "Aqualife Piscinas e Projetos",
    description:
      "Empresa especializada em criação de projetos, construção de piscinas, spas, saunas, aquecimento solar e loja de equipamentos em Contagem e Grande BH há mais de 20 anos.",
    telephone: "+553125645327",
    url: "https://aqualifepiscinas.com.br",
    image: "https://aqualifepiscinas.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Maria da Conceição de São José, 175",
      addressLocality: "Arcadia, Contagem",
      addressRegion: "MG",
      postalCode: "32041-400",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "40",
    },
    areaServed: [
      "Contagem",
      "Belo Horizonte",
      "Betim",
      "Nova Lima",
      "Lagoa Santa",
      "Ribeirão das Neves",
      "Esmeraldas",
      "Igarapé",
      "Brumadinho",
      "Grande BH",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "13:00",
      },
    ],
  };

  return (
    <html lang="pt-BR" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] text-[#0A1128] font-sans antialiased selection:bg-[#02B8FD] selection:text-[#031445]">
        {children}
      </body>
    </html>
  );
}
