module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // Must add all screen breakpoints used
    // screens: {
    //   "xs": "320px",
    //   "sm": "640px",
    //   "md": "768px",
    //   "lg": "1024px",
    //   "xl": "1280px",
    //   "2xl": "1536px",
    // },
    extend: {
      // Add only new properties
      screens: {
        "xs": "320px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    // preflight: false,
  },
};
