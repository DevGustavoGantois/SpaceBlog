import { Audiowide, Poppins } from 'next/font/google';
import "./globals.css";
import { Footer } from "@/components/Sections/Footer";
import { Header } from "@/components/Sections/Header";
import { AdSense } from '@/Scripts/ScriptAds';
import Script from 'next/script';

const poppins = Poppins({
  weight: ['400', '700'], 
  subsets: ['latin'],
  variable: '--font-poppins',
});

const audiowide = Audiowide({
  weight: '400', 
  subsets: ['latin'],
  variable: '--font-audiowide',
});

export const metadata = {
  title: "Space Blog",
  description: "Blog de curiosidades sobre o espaço",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={`${poppins.variable} ${audiowide.variable} antialiased bg-gradient-to-r from-[#000000] via-[#3A00CC] to-[#000000]`}>
      <head>
        <Script
          id="adsense-script"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3778716766282686"
          crossOrigin="anonymous"
          strategy="afterInteractive"  
        />
         <meta name="google-site-verification" content="M4Pw1J2X-V6c2FotMav2KX72M48-Zvp0Lhnc9Q4qOnI" />
      </head>
      <body className={`${poppins.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
