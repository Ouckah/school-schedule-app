module.exports = {
  content: 
  [
    'App.js',
    './screens/*.{js,jsx,ts,tsx}',
    './components/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
