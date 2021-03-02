const nameClass = require('tailwindcss/lib/util/nameClass').default
const { asValue } = require('../pluginUtils')

module.exports = function ({ jit: { theme, addUtilities, addVariant, e } }) {
  addUtilities({
    scale: [
      (modifier, { theme }) => {
        let value = asValue(modifier, theme.scale)

        if (value === undefined) {
          return []
        }

        return [[nameClass('scale', modifier), { '--tw-scale-x': value, '--tw-scale-y': value }]]
      },
    ],
  })
  addUtilities({
    'scale-x': [
      (modifier, { theme }) => {
        let value = asValue(modifier, theme.scale)

        if (value === undefined) {
          return []
        }

        return [[nameClass('scale-x', modifier), { '--tw-scale-x': value }]]
      },
    ],
    'scale-y': [
      (modifier, { theme }) => {
        let value = asValue(modifier, theme.scale)

        if (value === undefined) {
          return []
        }

        return [[nameClass('scale-y', modifier), { '--tw-scale-y': value }]]
      },
    ],
  })
}
