/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'branco':'#F0F0F0',
        'azul':'#024AAC',
        'card-bg':'#E0E0E0',
        'card-main':'#ffff',
        'hover-color': '#007aff'
      },
      boxShadow: {
        'custom': '1px 1px 2.5px 0px rgba(0, 0, 0, 0.90)',
      },
      screens: {
        'scroll-smooth': {'raw': 'scroll-behavior: smooth;'},
      }
    },
  },
  plugins: [],
};
