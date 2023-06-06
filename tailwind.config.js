/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#AFD3E2',
          900: '#AFD3E2',
          500: '#AFD3E2',
        },
        info: {
          dark: '#146C94',
          light: '#19A7CE',
        }
      },
      boxShadow: {
        '3xl': '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        orbitron: ['Orbitron'],
      },
      fontSize: {
        '3.5xl': ['32px', '40px'],
        xsm: '16px',
        xxs: ['10px', '13px'],
      },
    },
  },
  plugins: [],
};
