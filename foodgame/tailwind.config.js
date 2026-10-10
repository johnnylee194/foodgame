/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#111111',       // Deep charcoal black for background
          darker: '#0a0a0a',
          cyan: '#00f3ff',       // Neon cyan
          pink: '#ff00ff',       // Neon pink
          gray: '#333333',       // Border/surface gray
          text: '#eeeeee',
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 5px theme("colors.cyber.cyan"), 0 0 20px theme("colors.cyber.cyan")',
        'neon-pink': '0 0 5px theme("colors.cyber.pink"), 0 0 20px theme("colors.cyber.pink")',
      }
    },
  },
  plugins: [],
}
