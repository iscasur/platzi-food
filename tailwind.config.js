module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      display: ["Gilroy", "sans-serif"],
      body: ["Graphik", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#f3c514",
        secondary: "#353535",
      },
      height: {
        "80": "20rem",
        "100": "25rem",
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "disabled"],
  },
  plugins: [],
};
