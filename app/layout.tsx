import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { CONFIG } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://inevitable-landing.vercel.app';

export const metadata: Metadata = {
  title: "Plantilla Álbum Día del Padre 2026 Mundial - Editable Canva | Inevitable",
  description: "Multiplica tus ventas este Día del Padre con nuestra plantilla de álbum del Mundial 2026. 100% editable en Canva gratuito, ideal para papelerías creativas y emprendedores. ¡Descarga inmediata por $6 USD! 29 láminas personalizables + diseños del combo completo.",
  keywords: ["plantilla día del padre", "plantilla canva día del padre", "álbum mundial 2026 editable", "plantilla álbum papá", "diseño álbum fútbol", "papelería creativa", "plantillas para papelerías", "descargar plantilla álbum", "canva editable día del padre", "emprendimiento papelería", "mundial 2026", "plantilla día del padre colombia"],
  authors: [{ name: "Inevitable" }],
  creator: "Inevitable",
  publisher: "Inevitable",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: "Inevitable",
    title: "Plantilla Álbum Día del Padre 2026 - Editable en Canva | $6 USD",
    description: "Empieza a vender HOY el álbum del Mundial 2026 para el Día del Padre. Plantilla 100% editable en Canva + diseños del combo completo. Descarga inmediata. Ideal para papelerías y emprendedores.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Plantilla Álbum Día del Padre 2026 Mundial - Inevitable",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plantilla Día del Padre 2026 - Mundial • Canva Editable",
    description: "Multiplica tus ventas: Plantilla completa + combo por solo $6 USD. Descarga inmediata.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        {/* Meta Pixel (Facebook) */}
        {!CONFIG.metaPixelId.includes('META_PIXEL_ID') && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${CONFIG.metaPixelId}');
                fbq('track', 'PageView');
              `}
            </Script>
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${CONFIG.metaPixelId}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}

        {/* Google Analytics 4 */}
        {!CONFIG.ga4MeasurementId.includes('GA4_MEASUREMENT_ID') && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${CONFIG.ga4MeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${CONFIG.ga4MeasurementId}');
              `}
            </Script>
          </>
        )}

        {/* Structured Data (Schema.org) para SEO */}
        <Script id="structured-data" type="application/ld+json" strategy="beforeInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Plantilla Álbum Día del Padre 2026 Mundial - Editable en Canva",
              "description": "Plantilla completa del álbum del Día del Padre temática Copa Mundial 2026. 100% editable en Canva gratuito. Incluye 29 láminas personalizables + diseños del combo completo + plantilla versión 2025 de regalo. Ideal para papelerías creativas y emprendedores.",
              "image": "${siteUrl}/og-image.png",
              "brand": {
                "@type": "Brand",
                "name": "Inevitable"
              },
              "offers": {
                "@type": "Offer",
                "url": "${siteUrl}#plantilla-digital",
                "priceCurrency": "USD",
                "price": "6.00",
                "availability": "https://schema.org/InStock",
                "priceValidUntil": "2026-06-21",
                "seller": {
                  "@type": "Organization",
                  "name": "Inevitable - Papelería Creativa"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "1"
              }
            }
          `}
        </Script>
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
