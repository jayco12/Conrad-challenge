import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          light: '#a8e6cf',
          DEFAULT: '#56ab91',
          dark: '#377764',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        bounceIn: 'bounceIn 1.5s ease-out',
      },
      keyframes: {
        fadeIn: {
            '0%': { opacity: "0" },
            '100%': { opacity: "1ß" },
          },
        bounceIn: {
          '0%, 100%': { transform: 'scale(0.95)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
