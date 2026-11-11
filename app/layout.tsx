import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "../components/LanguageContext";
import { CustomCursor } from "../components/CustomCursor";
import { Preloader } from "../components/Preloader";
import { CookieBanner } from "../components/CookieBanner";

export const viewport: Viewport = {
  themeColor: "#F7F5F2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "ATELIER LUMEN | The AI Fashion Photo Studio Without a Set",
  description: "Virtual haute couture & commercial photography for global luxury fashion brands. From garment packshot to full multi-angle editorial campaign in minutes. Exclusive brand models and photorealistic textile drape.",
  keywords: [
    "AI fashion photography",
    "virtual photo studio",
    "AI lookbook generator",
    "on-model packshot conversion",
    "luxury e-commerce photography",
    "high fashion AI editorial",
    "textile physics rendering"
  ],
  authors: [{ name: "Lumen Studios Technologies" }],
  openGraph: {
    title: "ATELIER LUMEN | The AI Fashion Photo Studio Without a Set",
    description: "From your product to a full shoot. In minutes. Luxury AI editorial fashion photography.",
    url: "https://atelier-lumen.fashion",
    siteName: "ATELIER LUMEN",
    images: [
      {
        url: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "ATELIER LUMEN Editorial Campaign",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ATELIER LUMEN | Virtual Haute Couture Photo Studio",
    description: "From product packshot to high-fashion on-model campaign in 3 minutes.",
    images: ["https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-[#F7F5F2] text-[#111111] selection:bg-[#6B1425] selection:text-white relative">
        <LanguageProvider>
          {/* Subtle film grain texture overlay */}
          <div className="film-grain" aria-hidden="true" />

          {/* Interactive custom camera cursor on images */}
          <CustomCursor />

          {/* Editorial curtain-reveal preloader */}
          <Preloader />

          {/* Interactive Cookie Compliance Banner */}
          <CookieBanner />

          {/* Page contents */}
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
