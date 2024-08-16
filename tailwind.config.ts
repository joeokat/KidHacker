import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#383B49',
        
        dark: '#101010',
        myblue: '#115def',
        mywhite: '#fafafa',
        mygreen: '#48DF8E',
        ash: '#a9a9a9',
        background: '#efefef'
        
      },
    },
  },
  plugins: [],
};

export default config;