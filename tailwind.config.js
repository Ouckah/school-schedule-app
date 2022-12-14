module.exports = {
  content: 
  [
    'App.js',
    './screens/*.{js,jsx,ts,tsx}',
    './components/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: 
    {
      colors: 
      {
        transparent: 'transparent',
        current: 'currentColor',
        'dark-blue': '#032a4e',
        'light-blue': '#428cd4'
      },
    },
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
