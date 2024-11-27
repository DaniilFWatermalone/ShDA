/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#333333',
        backGtay: '#232323',
        borderGray: '#999999',
      },
    },
  },
  plugins: [],
}
