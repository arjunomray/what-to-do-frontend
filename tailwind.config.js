/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  colors: {
    'text': 'var(--text)',
    'background': 'var(--background)',
    'primary': 'var(--primary)',
    'secondary': 'var(--secondary)',
    'accent': 'var(--accent)',
  },
}

