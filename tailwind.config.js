/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        normal: '400',
        medium: '450',
        bold: '600'
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.0175em',
        normal: '0em',
        wide: '0.0175em',
        wider: '0.02em'
      },
      dropShadow: {
        sm: '0px 1px 2px 0px rgba(27, 36, 44, 0.12)',
        md: [
          '0px 2px 8px -1px rgba(27, 36, 44, 0.08)',
          '0px 2px 2px -1px rgba(27, 36, 44, 0.04)',
        ],
        lg: [
          '0px 8px 16px -2px rgba(27, 36, 44, 0.12)',
          '0px 2px 2px -1px rgba(27, 35, 44, 0.04)',
        ],
        xl: [
          '0px 16px 24px -6px rgba(27, 36, 44, 0.16)',
          '0px 2px 2px -1px rgba(27, 36, 44, 0.04)'
        ]
      },
      colors: {
        content: '#4A545E',
        blue: {
          50: '#E6EEFF',
          100: '#D7E4FF',
          200: '#CDDDFF',
          300: '#8DB0FB',
          400: '#6792F4',
          500: '#3062D4',
          600: '#2759CD',
          700: '#1E50C0',
          800: '#113997',
          900: '#05205E',
          950: '#05205E'
        },
        gray: {
          50: '#F0F3F5',
          100: '#EBEBEB',
          200: '#E2E2E2',
          300: '#D5D5D5',
          400: '#A6A6A6',
          500: '#5E5E5E',
          600: '#525252',
          700: '#404040',
          800: '#2D2D2D',
          900: '#222222',
          950: '#1F1F1F'
        },
        red: {
          50: '#FEE6E6',
          100: '#FCD9D9',
          200: '#FCCFCF',
          300: '#F49090',
          400: '#F26464',
          500: '#C53434',
          600: '#A13636',
          700: '#952D2D',
          800: '#6F2020',
          900: '#4A0D0D',
          950: '#450C0C'
        },
        orange: {
          50: '#FFE8D1',
          100: '#FCDEC0',
          200: '#FFD4A8',
          300: '#FEB872',
          400: '#F6A351',
          500: '#F59638',
          600: '#A13636',
          700: '#B4610E',
          800: '#A05C1C',
          900: '#482909',
          950: '#361F07'
        },
        green: {
          50: '#D8F8E7',
          100: '#C6F1DA',
          200: '#C2EBD5',
          300: '#75CC9E',
          400: '#4AA578',
          500: '#1D7C4D',
          600: '#1E714A',
          700: '#196742',
          800: '#0E4E30',
          900: '#062D1B',
          950: '#052415'
        },
        cyan: {
          50: '#E0F1FF',
          100: '#CCE7FF',
          200: '#C2E3FF',
          300: '#79BCF6',
          400: '#5699DC',
          500: '#0870BA',
          600: '#1B679D',
          700: '#165B8D',
          800: '#0C456E',
          900: '#002742',
          950: '#00243D'
        },
        purple: {
          50: '#F8E3FD',
          100: '#F5D5FB',
          200: '#F4CAF7',
          300: '#D98DEC',
          400: '#C466DB',
          500: '#9939AC',
          600: '#853295',
          700: '#792989',
          800: '#5B1E67',
          900: '#002742',
          950: '#340926'
        },
        emerald: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          950: '#022C22'
        },
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
        neutral: {
          50: '#FFFFFF',
          100: '#F2F2F2',
          200: '#E6E6E6',
          300: '#D9D9D9',
          400: '#CCCCCC',
          500: '#BFBFBF',
          600: '#B3B3B3',
          700: '#A6A6A6',
          800: '#999999',
          900: '#8C8C8C',
          950: '#000000',
        },
        coolGray: {
          50: '#FFFFFF',
          100: '#F2F2F2',
          200: '#E6E6E6',
          300: '#CFD6DD ',
          400: '#CCCCCC',
          500: '#555F6D',
          600: '#4A545E',
          700: '#A6A6A6',
          800: '#999999',
          900: '#8C8C8C',
          950: '#000000',
        },
      },
    },
    
  },
  plugins: [],
}