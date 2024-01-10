/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        '48/100': '48%',
        '88':'22rem'
      },
      height: {
        '48/100': '48%',
        '88':'22rem'
      },
    },
    fontFamily: {
      signature: ["Rubik Doodle Shadow"],
      karla: ["karla", "sans"],
      bebas: ["Anton", "sans-serif"],
    },
  },
  plugins: [],
}
