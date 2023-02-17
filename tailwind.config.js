module.exports = {
  purge: [],

  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./Layout/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      purple: "#442AF9",
      white: "#FFFFFF"
    },
    fontSize: {
      '3xl': '32px',
      'lg': '15px',
      '5xl': '34px',
      'xl': '50px'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};