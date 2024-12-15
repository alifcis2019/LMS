/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'red', // This is your primary color (blue-600 in this case)
        // You can also define lighter or darker variants if necessary
        primaryLight: '#3B82F6', // Light shade of primary
        primaryDark: '#1E40AF', // Dark shade of primary
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ]
}

