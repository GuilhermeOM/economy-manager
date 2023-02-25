/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      neutral: {
        700: "#44403C",
        800: "#262626",
        850: "#1E1E1E",
        900: "#171717",
      },
      indigo: {
        500: "#6366F1",
        600: "#4f46E5",
      },
      blue: {
        600: "#2563EB",
        800: "#1E40AF",
      },
    },
  },
  plugins: [],
};
