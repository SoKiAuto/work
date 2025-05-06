/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          blink: 'blink 1s steps(2, start) infinite',
          'loading-bar': 'loading-bar 2s ease-in-out infinite',
        },
        keyframes: {
          blink: {
            '0%, 100%': { opacity: '0' },
            '50%': { opacity: '1' },
          },
          'loading-bar': {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(200%)' },
          },
        },
      },
    },
    plugins: [],
  }
  