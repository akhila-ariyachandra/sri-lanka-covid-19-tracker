module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.tsx",
    "./src/components/**/*.{tsx,js,css}",
    "./src/styles/**/*.css",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
