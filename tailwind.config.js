/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'myDark': '#090D1F',
        'light':'#FFFFFF',
        'violet':'#7F56D9',
        'violet-200':'rgb(167 139 250)',
        'violet-900':'rgb(91 33 182)',
        'myGray':'#667085',
        'mylightGray':'#C0C5D0'
      },
      borderRadius: {
        '3.5xl':'29px'
      },
      spacing: {
        '28.7': '28.79vh',
        '20.2': '20.29vh',
        '44.4': '44.415%',
        '29.6':'29.687%'

      },
      fontSize: {
        '11xl':'155.8px',
        '12xl': '190.8px',
        '14xl': '243.8px',
      }
      
    },
  },
  plugins: [],
}

