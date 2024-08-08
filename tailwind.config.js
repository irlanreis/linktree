/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image': "url('/src/assets/bg-01.jpg')",
      },
    },
  },
  plugins: [],
}

