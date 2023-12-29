/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        'common': '#f6f7ff',
      },
    },
  },
  corePlugins: {
    preflight: false
  },
  plugins: [],
}