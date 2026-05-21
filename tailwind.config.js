/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // السطر ده هو اللي بيخلي تايلوند يقرأ ملفات الـ React
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}