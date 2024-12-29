/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      colors: {
        menugray: "#191919",
        linkgray: "#7b7b7b",
      }
    },
  },
  plugins: [],
}

