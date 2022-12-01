/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "768px", // => @media (min-width: 768px) { ... }
      laptop: "1075px", // => @media (min-width: 1024px) { ... }
      desktop: "1280px", // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        "primary-yellow": "#FDCD3C",
        "secondary-yellow": "#fff5d6",
        "secondary-blue": "#add8e6",
        red: "#ff4040",
        "primary-grey": "#3b3b3b",
        "secondary-grey": "#e6e6e6",
        divider: "#f7f7f7",
      },
      fontSize: {
        "big-heading": "35px",
        "big-heading-mobile": "30px",
        "quote-icon": "60px",
        "quote-icon-mobile": "30px",
        "book-session-submitted-logo": "50px",
        icon: "50px",
      },
      fontFamily: {
        heading: "Comfortaa",
      },
    },
  },
  plugins: [],
};
