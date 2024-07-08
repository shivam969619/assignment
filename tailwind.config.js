/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },

      fontFamily: {
        sans: ['"Open Sans"', "Arial", "Helvetica", "sans-serif"],
        poppins: ['"Poppins"', "Arial", "Helvetica", "sans-serif"],
      },
      colors: {
        customBackground: "rgb(16,16,16)",
        customButton: "rgb(234,48,34)",
        customButton2: "rgb(44,42,40)",
        customButtonHover: "#d14f6b",
        customInput: "rgb(37,37,37)",
        customInputPlaceholder: "rgb(156,163,175)", // Placeholder color
        customTopCard: "rgb(22,22,22)",
        customTopCard2: "rgb(90,87,85)",
        customTopImagebg: "rgb(31,30,33)",
        customTopText: "rgb(244,64,51)",
        customTopcardText: "rgb(112,109,106)",
        custommidcardText: "rgb(172,172,172)",
        customlastcardtext: "rgb(130,130,130)",
        onhovertext: "rgb(224,47,33)",
        onmidcardtext: "rgb(186,195,206)",
        customlastcardtex: "rgb(175,180,154)",
      },
      placeholderColor: {
        customInput: "rgb(156,163,175)", // Placeholder color
      },
    },
  },
  plugins: [],
};
