/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '1440/401': '1440/401',
        '768/401': '768/401',
      },
    },
  },
  plugins: [],
}