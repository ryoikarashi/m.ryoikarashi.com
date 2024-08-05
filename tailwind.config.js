import Typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{liquid,njk,md}',
    './src/**/*.svg',
  ],
  theme: {
    fontFamily: {
      josefin: ['Josefin Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'black': '#111111',
      },
    },
  },
  plugins: [
      Typography
  ],
}
