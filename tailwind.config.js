module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  jit: true,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
