import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // // domine: ["Domine", "serif"],
        // 'pd': ['"Playfair Display"', 'serif'], // Previously added
        // 'lato': ['Lato', 'sans-serif'],
        // 'vollkorn': ['Vollkorn', 'serif'],
        'arapey': ['Arapey', 'serif'], // Previously added
        'mulish': ['Mulish', 'sans-serif'],
        'hs': ["'Hind Siliguri'", 'sans-serif'],
    },
  },
  plugins: [],
}
};
export default config;
