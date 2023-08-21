/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./images/intro.jpg')",
        "hs1": "url('./images/access.jpg')",
        "hs2": "url('./images/coding.jpg')",
        "hs3": "url('./images/contract.jpg')",
        "hs4": "url('./images/healthcare.jpg')",
        "hs5": "url('./images/ibilling.jpg')",

      }
    },
  },
  plugins: [],
}

