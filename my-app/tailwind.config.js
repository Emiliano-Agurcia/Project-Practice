// tailwind.config.js
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {}
    }
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        ':root': {
          '--color1-100': '#ffffff',
          '--color1-200': '#ffffff',
          '--color1-300': '#ffffff',
          '--color1-400': '#ffffff',
          '--color1-500': '#ffffff',
          '--color1-600': '#cccccc',
          '--color1-700': '#999999',
          '--color1-800': '#666666',
          '--color1-900': '#333333',
          
          '--color2-100': '#d3d3d3',
          '--color2-200': '#a7a7a7',
          '--color2-300': '#7a7a7a',
          '--color2-400': '#4e4e4e',
          '--color2-500': '#222222',
          '--color2-600': '#1b1b1b',
          '--color2-700': '#141414',
          '--color2-800': '#0e0e0e',
          '--color2-900': '#070707',
          
          '--color3-100': '#eeddfd',
          '--color3-200': '#dcbbfc',
          '--color3-300': '#cb99fa',
          '--color3-400': '#b977f9',
          '--color3-500': '#a855f7',
          '--color3-600': '#8644c6',
          '--color3-700': '#653394',
          '--color3-800': '#432263',
          '--color3-900': '#221131',
        }
      });
    }),
  ]
};
