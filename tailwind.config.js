module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "ben-dark": "#424242",
        "ben-verydark": "#212121",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
