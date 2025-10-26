/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#d2813d',
          black: '#292929'
        },
        dark: {
          gray1: '#282828',
          gray2: '#363636', 
          gray3: '#828282',
          gray4: '#F0F0F0',
          gray5: '#F2F2F2',
          gray6: '#FFFFFF'
        },
        status: {
          green: '#27AE60',
          yellow: '#F2C94C',
          red: '#E85757',
          purple: '#9E51E0'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}