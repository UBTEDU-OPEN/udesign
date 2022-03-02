module.exports = {
  content: ['src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      minWidth: {
        5: '1.25rem',
        4: '1rem',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['last'],
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['active'],
    },
  },
  plugins: [require('@tailwindcss/typography')]
};
