/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-1": "#002B4F",
        "primary-2": "#00A88E",
        "primary-3": "#0060AF",
        "gray-6": "#475467",
        "gray-7": "#344054",
        "base-bg": "#E6EFF7",
        "gray-200": "#EAECF0",
        "gray-500": "#667085",
        "border-2": "#D0D5DD",
    },
    },
  },
  plugins: [],
}