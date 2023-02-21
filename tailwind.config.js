module.exports = {
  purge: [],

  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./Layout/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      purple: "#442AF9",
      white: "#FFFFFF",
      grey: "#E7E7E7"
    },
    fontSize: {
      '2xl': '30px',
      '3xl': '34px',
      '4xl': '60px',
      // '7xl':'72px',
      // 'xl': '50px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};