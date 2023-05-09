/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        prim : "#B6894E",
        sec : "#C99B5E",
        btnPrim: "#ff9b6d",
        btnSec: "#FD7369",
        txtPrim: "",
        txtSec: "",
        linkPrim: "#ffffff",
        linkSec: "#ffffff",
      }
    },
  },
  plugins: [],
}
