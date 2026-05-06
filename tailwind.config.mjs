/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#E8547A',
          light: '#F2809B',
          dark: '#C43060',
          faint: '#FDE8F0',
        },
        accent: {
          DEFAULT: '#8B7FD4',
          light: '#B0A8E8',
          dark: '#6355B0',
          faint: '#F5F0FF',
        },
        ink: {
          DEFAULT: '#1A1A2E',
          secondary: '#6B7280',
          muted: '#9CA3AF',
          deep: '#0F0C10',
        },
        canvas: {
          DEFAULT: '#FAFAFA',
          dark: '#15152A',
          deeper: '#0F0C10',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#26263B',
        },
        edge: {
          DEFAULT: '#E5E7EB',
          dark: '#3D3D4F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      boxShadow: {
        brand: '0 8px 30px rgba(232, 84, 122, 0.35)',
        'brand-lg': '0 16px 50px rgba(232, 84, 122, 0.45)',
        accent: '0 8px 30px rgba(139, 127, 212, 0.35)',
        card: '0 2px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.12)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      letterSpacing: {
        label: '0.07em',
      },
    },
  },
  plugins: [],
};
