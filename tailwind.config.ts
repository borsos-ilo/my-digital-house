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
        'pd': ['"Playfair Display"', 'serif'], // Previously added
        'sofia': ['"Sofia Sans"', 'sans-serif'], // New addition
        'lato': ['Lato', 'sans-serif'],
    },
  },
  plugins: [],
}
};
export default config;
