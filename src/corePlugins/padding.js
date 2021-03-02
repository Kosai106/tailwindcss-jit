const nameClass = require('tailwindcss/lib/util/nameClass').default
const { asLength } = require('../pluginUtils')

module.exports = function ({ jit: { theme, addUtilities, addVariant, e } }) {
  addUtilities({
    p: [
      (modifier, { theme }) => {
        let value = asLength(modifier, theme['padding'])

        if (value === undefined) {
          return []
        }

        return [[nameClass('p', modifier), { padding: value }]]
      },
    ],
  })
  addUtilities({
    px: [
      (modifier, { theme }) => {
        let value = asLength(modifier, theme['padding'])

        if (value === undefined) {
          return []
        }

        return [[nameClass('px', modifier), { 'padding-left': value, 'padding-right': value }]]
      },
    ],
    py: [
      (modifier, { theme }) => {
        let value = asLength(modifier, theme['padding'])

        if (value === undefined) {
          return []
        }

        return [[nameClass('py', modifier), { 'padding-top': value, 'padding-bottom': value }]]
      },
    ],
  })
  addUtilities({
    pt: [
      (modifier, { theme }) => {
        let value = asLength(modifier, theme['padding'])

        if (value === undefined) {
          return []
        }

        return [[nameClass('pt', modifier), { 'padding-top': value }]]
      },
    ],
    pr: [
      (modifier, { theme }) => {
        let value = asLength(modifier, theme['padding'])

        if (value === undefined) {
          return []
        }

        return [[nameClass('pr', modifier), { 'padding-right': value }]]
      },
    ],
    pb: [
      (modifier, { theme }) => {
        let value = asLength(modifier, theme['padding'])

        if (value === undefined) {
          return []
        }

        return [[nameClass('pb', modifier), { 'padding-bottom': value }]]
      },
    ],
    pl: [
      (modifier, { theme }) => {
        let value = asLength(modifier, theme['padding'])

        if (value === undefined) {
          return []
        }

        return [[nameClass('pl', modifier), { 'padding-left': value }]]
      },
    ],
  })
}
