import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: ['var(--font-audiowide)', 'sans-serif'], 
      secondary: ['var(--font-poppins)', 'sans-serif'], 
    },
    extend: {
      boxShadow: {
        'custom-purple': '20px 4px 15px 20px #9B0FEC', 
      },
      backgroundImage: {
        'bg_default': 'linear-gradient(to right, #6A5ACD, #000000)',
        'gradient_CTA': 'linear-gradient(to right, #56379F, #4D00FF)',
        'white_gradient': 'linear-gradient(to right, #FFFFFF, #999999)',
        'title_section_gradient': 'linear-gradient(to right, #FFFFFF, #9B0FEC)',
      },
      colors: {
        purple_button: "#9B0FEC",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1038px",
      },
      keyframes: {
        slideCarousel: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        slideCarousel: 'slideCarousel 65s linear infinite',
        float: 'float 4s ease-in-out infinite', 
      },
    },
  },
  plugins: [],
};

export default config;