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
  title: "Inevitable • Álbum del Día del Padre 2026",
  description: "Sorprende a papá con el Álbum Oficial de tu Familia temática Copa Mundial 2026. Entregas en Bucaramanga. O compra la plantilla digital para tu emprendimiento. 29 láminas personalizadas.",
  keywords: ["día del padre", "álbum personalizado", "mundial 2026", "regalo papá", "papelería creativa", "bucaramanga", "plantilla canva", "emprendimiento"],
  authors: [{ name: "Inevitable" }],
  creator: "Inevitable",
  publisher: "Inevitable",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: "Inevitable",
    title: "Inevitable • Álbum del Día del Padre 2026",
    description: "El regalo perfecto para papá: 22 láminas personalizadas con tu familia + momentos históricos del fútbol. Entregas en Bucaramanga y Área Metropolitana.",
    images: [
      {
        url: "/og-image.jpg", // ⚠️ Crear esta imagen en /public/og-image.jpg (1200x630px)
        width: 1200,
        height: 630,
        alt: "Álbum del Día del Padre 2026 - Inevitable",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inevitable • Álbum del Día del Padre 2026",
    description: "Sorprende a papá con un álbum personalizado con tu familia. 29 láminas únicas.",
    images: ["/og-image.jpg"],
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
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
