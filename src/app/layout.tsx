import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://zayintour.com.br"),
  title: "Zayin Tour | Turismo em Foz do Iguaçu — Cataratas, Itaipu, Parque das Aves",
  description: "Agência de turismo em Foz do Iguaçu. Pacotes para Cataratas do Iguaçu, Usina de Itaipu, Parque das Aves, Marco das Três Fronteiras. Transfer incluso e atendimento 24/7.",
  keywords: ["Foz do Iguaçu", "Cataratas do Iguaçu", "Itaipu", "Parque das Aves", "turismo", "viagem", "pacotes turísticos", "Zayin Tour"],
  authors: [{ name: "Zayin Tour" }],
  creator: "Ylvorix Digital Ltda",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["es_AR", "en_US"],
    url: "https://zayintour.com.br",
    siteName: "Zayin Tour",
    title: "Zayin Tour | Turismo em Foz do Iguaçu",
    description: "Pacotes exclusivos para Cataratas do Iguaçu, Itaipu, Parque das Aves e mais. Atendimento personalizado e transfer incluso.",
    images: [
      {
        url: "/images/cataratas-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Cataratas do Iguaçu — Zayin Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zayin Tour | Turismo em Foz do Iguaçu",
    description: "Pacotes exclusivos para Cataratas do Iguaçu, Itaipu, Parque das Aves e mais.",
    images: ["/images/cataratas-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Zayin Tour",
              "description": "Agência de turismo em Foz do Iguaçu. Pacotes para Cataratas do Iguaçu, Itaipu, Parque das Aves e mais.",
              "url": "https://zayintour.com.br",
              "telephone": "+5545984039246",
              "email": "contato@zayintour.com.br",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Foz do Iguaçu",
                "addressRegion": "PR",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-25.5163",
                "longitude": "-54.5854"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": ["https://github.com/Portinhogithub"]
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <GoogleAnalytics />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
