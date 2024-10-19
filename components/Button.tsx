import Link from "next/link";
import React from "react";

interface ButtonProps {
    description: string;
    route: string;
}

export function Button({ description, route }: ButtonProps) {
    return (
        <Link href={route || "#"}>
            <button className="bg-[#9B0FEC] text-white px-6 py-3 rounded-xl font-primary hover:bg-transparent hover:border border-[#9B0FEC] transition-all duration-700 hover:text-[#9B0FEC]">
                {description}
            </button>
        </Link>
    );
}