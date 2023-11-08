/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url('./src/assets/img/hero-background.jpg')",
        "tittle-background": "url('./src/assets/img/emblema.png')",
        "fotter-img": "url('./src/assets/img/rosa.png')",
      },
    },
  },
  plugins: [],
};
