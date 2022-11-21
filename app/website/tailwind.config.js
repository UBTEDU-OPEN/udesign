module.exports = {
  content: ['src/**/*.{js,ts,jsx,tsx}', 'content/**/*.mdx'],
  theme: {
    extend: {
      zIndex: {
        1: '1',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
