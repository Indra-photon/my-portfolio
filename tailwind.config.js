// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': {
          DEFAULT: '#0F172A',
          secondary: '#1E293B'
        },
        'accent': {
          blue: '#61DAFB',    // React blue
          green: '#339933',   // Node green
          purple: '#7952B3'   // Bootstrap purple
        }
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}