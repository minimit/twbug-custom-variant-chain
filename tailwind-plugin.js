const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(() => {
  return function ({ addVariant, e }) {

    addVariant('pseudo', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(`pseudo${separator}${className}`)}:pseudo`
      })
    })

    addVariant('class', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(`class${separator}${className}`)}.class`
      })
    })
  }
})