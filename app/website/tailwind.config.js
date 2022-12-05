module.exports = {
  content: ['src/**/*.{js,ts,jsx,tsx}', 'content/**/*.mdx'],
  theme: {
    extend: {
      zIndex: {
        1: '1',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
