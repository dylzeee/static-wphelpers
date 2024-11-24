/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./srx/app/**/*.{js,jsx,ts,tsx}", // Scan all files in the app directory
    "./src/app/components/**/*.{js,jsx,ts,tsx}", // Scan all files in the components directory
    "./src/app/pages/**/*.{js,jsx,ts,tsx}", // Optional, for conventional routing
  ],
  theme: {
    extend: {
      colors: {
        trustworthyBlue: '#003366',
        professionalGray: '#F2F2F2',
        lightBlue: '#4DA8DA', // New light blue
        alertRed: '#CC3333',
        subtleYellow: '#FFD700',
      },
    },
  },
};

