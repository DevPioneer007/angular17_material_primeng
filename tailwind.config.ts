/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      aspectRatio: ['responsive'],
      colors: {
        'primary-1': '#0CB9DE',
        'primary-2': '#C19030',
        'primary-3': '#068E44',
        'primary-4': '#EFEFEF',
        'primary-5': '#333',
        'primary-6': '#0094DE',
        'primary-7': '#F7C600',
        'primary-8': '#F7F4B8',
        'primary-9': '#DDD',
        'primary-10': '#F9C301',
      },
    },
    screens: {
      sm: '521px',
      md: '768px',
      lg: '1033px',
      xl: '1215px',
      '1xl': '1377px',
      '2xl': '1536px',
    },
  },
  important: true,
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
};
