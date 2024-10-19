import { Audiowide, Poppins } from 'next/font/google';
import "./globals.css";
import { Footer } from "@/components/Sections/Footer";
import { Header } from "@/components/Sections/Header";

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
      <body className={`${poppins.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}