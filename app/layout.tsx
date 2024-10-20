import { Audiowide, Poppins } from 'next/font/google';
import "./globals.css";
import { Footer } from "@/components/Sections/Footer";
import { Header } from "@/components/Sections/Header";
import { AdSense } from '@/Scripts/ScriptAds';

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
        <AdSense pId='' />
      </head>
      <body className={`${poppins.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}



//Script ADS 
import Script from "next/script";
import React from "react";

type AdSenseTypes = {
    pId: string;
}

export const AdSense = ({pId}: AdSenseTypes) => {
    return (
        <Script async
        src={``}
        crossOrigin="anonymous"
        strategy="afterInteractive" 
        />
    )
}



//AdBanner
'use client'

import React, { useEffect } from "react"

type AdBannerTypes = {
    dataAdSlot: string;
    dataAdFormat: string;
    dataFullWidthResponsive: boolean;
}

export const AdBanner = ({ dataAdFormat, dataAdSlot, dataFullWidthResponsive}: AdBannerTypes) => {

    useEffect(() => {
        try {
            ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
        }
        catch(error: any) {
            console.log(error.message)
        }
    }, [])

    return (
        <ins
        className="adsbygoogle"
        style={{display: 'block'}}
        data-ad-client="ca-pub-123456789"
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive.toString()}
        >

        </ins>
    )
}

//Banner of page blogs
 <div className="mb-5">
                <AdBanner dataAdFormat="auto" dataFullWidthResponsive={true} dataAdSlot="090909090" />
            </div>
