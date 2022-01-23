module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        customDarkBlue: "#13181e",
        customWhite: "#edf2f7",
        customMidBlue: "#233d5c",
      },
      scale: {
        '2': '2.0',
      },
      dropShadow: {
        'cstm': '3px 4px 4px rgba(0, 0, 0, 0.7)'
      },
    },
  },
  plugins: [],
}
