module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './src/index.css',
    ],
  },
  theme: {
    extend: {
    },
  },
  variants: {},
  plugins: [require('./tailwind-plugin')],
}
