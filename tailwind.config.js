/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-color": "#4C3398",
        "primary-brand-color": "#5d3ebc",
        "secondary-brand-color": "#7849f7",
        "brand-yellow": "#FFD300",
      },
      backgroundImage: {
        "hero-bg":
          "linear-gradient( 90deg, var(--color-primary) 0%, rgba(93,62,188,0) 100% )",
        "mobile-app":
          'url("https://cdn.getir.com/getirweb-images/common/illustration/doodle.png")',
      },
    },
  },
  plugins: [],
};
