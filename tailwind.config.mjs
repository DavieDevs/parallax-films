/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mosswood: "#4b4631",
        sand: "#E5D6C1",
        lace: "#F6F0E5",
        secondary: "#8a7c4a",
        accent: "#c9b96e",
      },
    },
  },
  plugins: [],
};
