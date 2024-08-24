/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'primary-header': 'Playfair Display',
        'primary-body': 'Montserrat',
      },
    },
    colors: {
      'primary-green': '#4caf50',
      'bg-gray': '#f1f1e7',
      'primary-brown': '#85875a',
      'light-green': '#f1fcf1',
    },
  },
  plugins: [],
};
