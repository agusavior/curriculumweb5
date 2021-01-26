module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
          primary: {
            light: '#9aa4e3',
            DEFAULT: '#5c6ac4',
            dark: '#2d3880',
          },
          secondary: '#ecc94b',
          pagebackground:  {
            DEFAULT: '#f3f4f6',
          },
          youtube: '#ff0202',
          gitlab: '#fc6d26',
          github: '#24292e',
      },
      flexGrow: {
        '0': 0,
        DEFAULT: 100,
        '1': 1,
        '50': 50,
        '100': 100
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
