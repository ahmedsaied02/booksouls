/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#f1f7fd',
          '100': '#dfecfa',
          '200': '#c6def7',
          '300': '#9fc9f1',
          '400': '#72ace8',
          '500': '#508de1',
          '600': '#3c71d4',
          '700': '#325ec3',
          '800': '#2e4e9f',
          '900': '#253b6e',
          '950': '#1e2b4d',
          'DEFAULT':'#253b6e',
        },
        secondary: {
          '50': '#f1fafe',
          '100': '#d2ecf9',
          '200': '#c0e8f7',
          '300': '#89d6f0',
          '400': '#4ac0e6',
          '500': '#22a9d5',
          '600': '#1489b5',
          '700': '#126e92',
          '800': '#135c79',
          '900': '#154d65',
          '950': '#0e3243',
          'DEFAULT':'#d2ecf9',
        },
      },
      fontFamily: {
        body: ["Poppins","system-ui"],
      },
    },
  },
  plugins: [],
}

