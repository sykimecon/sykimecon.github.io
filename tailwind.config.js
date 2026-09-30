/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#fbfaf7',
        'slate-heading': '#1a202c',
        'slate-body': '#2d3748',
        'slate-muted': '#5a6b80',
        'link-blue': '#2b6cb0',
        'link-blue-hover': '#1a4971',
        'border-light': '#e2e8f0',
      },
      maxWidth: {
        site: '70rem',
      },
    },
  },
  plugins: [],
};
