import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
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
      fontFamily: {
        'primary': ['Barlow', 'Poppins'],
        'secondary': ['Fraunces', 'Poppins']
      }
    },
    colors: {
      'transparent': 'transparent',
      'soft-red': '#fe7867',
      'yellow': '#fad400',
      'dark-desaturated-cyan': '#25564b',
      'dark-blue': '#19536b',
      'dark-moderate-cyan': '#458c7e',
      'very-dark-desaturated-blue': '#23303e',
      'very-dark-grayish-blue': '#5a636c',
      'dark-grayish-blue': '#818498',
      'grayish-blue': '#a7abae',
      'white': '#ffffff',
      'black': '#000000'
    }
  },
  plugins: [],
}
export default config
