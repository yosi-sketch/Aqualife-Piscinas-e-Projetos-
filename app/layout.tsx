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
  themeColor: "#00206D",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://solepiscina.com.br"),
  title:
    "Sol e Piscina — Piscinas, Spas, Saunas & Aquecimento Solar em BH | Mais de 30 Anos de Tradição",
  description:
    "Especializados em construção e reforma de piscinas (vinil, fibra e alvenaria), aquecimento solar, saunas, spas e manutenção em Belo Horizonte. Mais de 1.000 sonhos realizados. Av. José Cândido da Silveira, 297 - Cidade Nova. WhatsApp: (31) 98642-1424.",
  keywords: [
    "Sol e Piscina",
    "Sol e Piscina BH",
    "Piscinas Belo Horizonte",
    "Piscinas Cidade Nova BH",
    "Construção de piscinas BH",
    "Reforma de piscinas BH",
    "Piscinas de vinil Belo Horizonte",
    "Piscinas de fibra BH",
    "Piscinas de alvenaria",
    "Aquecimento solar piscina BH",
    "Trocador de calor piscina BH",
    "Saunas em Belo Horizonte",
    "Spas e hidromassagem BH",
    "Manutenção de piscinas BH",
    "Loja de piscinas Av Jose Candido da Silveira",
    "Produtos para piscina Belo Horizonte",
    "Tratamento de água de piscina BH",
    "Filtros e bombas para piscina BH",
  ],
  authors: [{ name: "Sol e Piscina — Belo Horizonte - MG" }],
  creator: "Sol e Piscina",
  publisher: "Sol e Piscina",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=sol1", sizes: "any" },
      { url: "/icon-32x32.png?v=sol1", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=sol1", type: "image/png", sizes: "16x16" },
      { url: "/icon-48x48.png?v=sol1", type: "image/png", sizes: "48x48" },
      { url: "/icon-192x192.png?v=sol1", type: "image/png", sizes: "192x192" },
      { url: "/icon.png?v=sol1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=sol1",
    apple: [{ url: "/apple-icon.png?v=sol1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://solepiscina.com.br",
    title:
      "Sol e Piscina — Especializados em Construção, Manutenção e Aquecimento em BH",
    description:
      "Construção e reforma de piscinas (vinil, fibra e alvenaria), aquecimento solar, saunas, spas e manutenção especializada. Mais de 30 anos no mercado. WhatsApp: (31) 98642-1424.",
    siteName: "Sol e Piscina",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sol e Piscina — Belo Horizonte - MG",
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
    name: "Sol e Piscina",
    alternateName: "Sol e Piscina BH - Piscinas, Spas & Saunas",
    description:
      "Loja e empresa especializada em construção, manutenção e aquecimento de piscinas, spas e saunas em Belo Horizonte - MG.",
    telephone: "+553135173669",
    url: "https://solepiscina.com.br",
    image: "https://solepiscina.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. José Cândido da Silveira, 297",
      addressLocality: "Cidade Nova, Belo Horizonte",
      addressRegion: "MG",
      postalCode: "31170-193",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.1",
      reviewCount: "35",
    },
    areaServed: [
      "Belo Horizonte",
      "Cidade Nova",
      "Silveira",
      "União",
      "Santa Inês",
      "Sagrada Família",
      "Mangabeiras",
      "Buritis",
      "Nova Lima",
      "Lagoa Santa",
      "Vespasiano",
      "Contagem",
      "Betim",
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
        opens: "08:30",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:30",
        closes: "12:30",
      },
    ],
    sameAs: [
      "https://www.instagram.com/solepiscinabh/",
      "https://wa.me/5531986421424",
      "https://solepiscina.com.br/",
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
      <body className="min-h-screen bg-[#F8FAFC] text-[#0A1128] antialiased selection:bg-[#FE7600] selection:text-[#FFFFFF]">
        {children}
      </body>
    </html>
  );
}
