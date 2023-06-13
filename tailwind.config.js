/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{ts,tsx}',
    './public/**/*.html',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui'), require('flowbite/plugin')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#E65A0D',
          secondary: '#0C1E50',
          accent: '#B8D6F8',
          neutral: '#444444',
          'base-100': '#ffffff',
          'base-200': '#D3D3D3',
          'base-300': '#A0A0A0',
          info: '#B8D6F8',
          warning: '#E6AB0D',
          success: '#3CAC4A',
          error: '#CC2626',
        },
      },
      // {
      //   dark: {
      //     primary: '#2C5282',
      //     secondary: '#EDF2F7',
      //     accent: '#CBD5E0',
      //     neutral: '#718096',
      //     'base-100': '#1A202C',
      //     'base-200': '#4A5568',
      //     'base-300': '#2D3748',
      //     info: '#90CDF4',
      //     warning: '#F6AD55',
      //     success: '#48BB78',
      //     error: '#FC8181',
      //   },
      // },
      // 'cupcake',
      // 'black',
      // 'bumblebee',
      // 'corporate',
      // 'synthwave',
      // 'retro',
      // 'cyberpunk',
      // 'valentine',
      // 'halloween',
      // 'forest',
      // 'lofi',
      // 'pastel',
      // 'wireframe',
      // 'dracula',
      // 'business',
      // 'lemonade',
      // 'night',
      // 'winter',
    ],
  },
}
