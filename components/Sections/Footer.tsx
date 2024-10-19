import { FooterSectionData } from "@/data";
import Image from "next/image";
import { Copyright } from "./Copyright";
import Link from "next/link";

export function Footer() {
    const { description, navigation, socialLinks } = FooterSectionData;

    return (
        <footer className="mx-auto bg-gradient-to-r from-black to-[#171717]">
            <div className="text-white p-6 flex flex-col items-center text-center lg:text-start justify-around lg:flex-row">
            <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-2">
            <Image src="Logo.svg" alt="" width={300} height={300} quality={100} />
            <p className="text-white/80 max-w-[600px] text-center lg:text-start text-sm mt-5 lg:text-lg">{description}</p>
            </div>
            <div className="mt-4">
                {navigation.map((nav, index) => (
                    <div key={index}>
                        <h4 className="text-gradient-white-gray h3 font-primary mb-4 h4 lg:h3">{nav.title}</h4>
                        <ul>
                            {nav.navLinks.map((link, linkIndex) => (
                                <li key={linkIndex} className="hover:underline">
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="mt-4">
                {socialLinks.map((social, index) => (
                    <div key={index}>
                        <h4 className="font-primary text-gradient-white-gray h4 lg:h3 mb-4">{social.title}</h4>
                        <ul>
                            {social.navLinks.map((link, linkIndex) => (
                                <li key={linkIndex} className="hover:underline text-white/60">
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
            <Copyright />
        </footer>
    );
}