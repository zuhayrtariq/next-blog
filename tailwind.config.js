/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d0c22",
        foreground: "#ffffff",
        backgroundSoft: "#3573fd",
        foregroundSoft: "#e5e5e5",
      },
    },
  },
  plugins: [],
};
