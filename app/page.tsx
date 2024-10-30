'use client'

import { BlogSection } from "@/components/Sections/BlogSection";
import { Hero } from "@/components/Sections/Hero";
import { Topics } from "@/components/Sections/Topics";
import { WhyTrustUs } from "@/components/Sections/WhyTrustUs";
import StarField from "@/components/Animates/StarField";
import { Carousel } from "@/components/Animates/Carousel";
import { Contact } from "@/components/Sections/Contact";
import { Head } from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="google-adsense-account" content="ca-pub-9749691982191188" />
      </Head>
      <main style={{ position: 'relative', minHeight: '100vh' }}>
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
          <StarField />
        </div>
        <div style={{ position: 'relative', zIndex: 10, color: 'white', padding: '20px' }}>
          <Hero />
          <Carousel />
          <Topics />
          <BlogSection />
          <WhyTrustUs />
          <Contact />
        </div>
      </main>
    </>
  );
}
