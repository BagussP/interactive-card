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
        'mobile' : "url('../../public/images/bg-main-mobile.png')",
        'desktop' : "url('../../public/images/bg-main-desktop.png')",
        'card-front' : "url('../../public/images/bg-card-front.png')",
        'card-back' : "url('../../public/images/bg-card-back.png')",
      },
      colors : {
        "Very-dark-violet": "hsl(278, 68%, 11%)"
      },
      screens : {
        "laptop" : "1024px"
      }
    },
  },
  plugins: [],
}
