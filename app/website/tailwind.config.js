module.exports = {
  content: ['src/**/*.{js,ts,jsx,tsx}', '../../node_modules/@ubt/udesign-ui-alpha/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      zIndex: {
        1: '1',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
