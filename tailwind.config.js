/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cable-pattern': "url('/img/cables.jpg')",
      },
    },
    plugins: [],
  }
}

