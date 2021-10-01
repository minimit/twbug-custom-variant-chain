const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(() => {
  return function ({ addVariant, e }) {

    addVariant('pseudocustom', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(`pseudocustom${separator}${className}`)}:pseudocustom`
      })
    })

    addVariant('class', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.class.${e(`class${separator}${className}`)}`
      })
    })

    addVariant('class-another', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.class-another.${e(`class-another${separator}${className}`)}`
      })
    })
  }
})