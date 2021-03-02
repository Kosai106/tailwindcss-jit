const nameClass = require('tailwindcss/lib/util/nameClass').default
const { asLength } = require('../pluginUtils')

module.exports = function ({ jit: { theme, addUtilities, addVariant, e } }) {
  addUtilities({
    inset: [
      (modifier, { theme }) => {
        let value = asLength(modifier, theme['inset'])

        if (value === undefined) {
          return []
        }

        return [
          [nameClass('inset', modifier), { top: value, right: value, bottom: value, left: value }],
        ]
      },
    ],
  })
  addUtilities({
    'inset-x': [
      (modifier, { theme }) => {
        let value = asLength(modifier, theme['inset'])

        if (value === undefined) {
          return []
        }

        return [[nameClass('inset-x', modifier), { left: value, right: value }]]
      },
    ],
    'inset-y': [
      (modifier, { theme }) => {
        let value = asLength(modifier, theme['inset'])

        if (value === undefined) {
          return []
        }

        return [[nameClass('inset-y', modifier), { top: value, bottom: value }]]
      },
    ],
  })
  addUtilities({
    top: [
      (modifier, { theme }) => {
        let value = asLength(modifier, theme['inset'])

        if (value === undefined) {
          return []
        }

        return [[nameClass('top', modifier), { top: value }]]
      },
    ],
    right: [
      (modifier, { theme }) => {
        let value = asLength(modifier, theme['inset'])

        if (value === undefined) {
          return []
        }

        return [[nameClass('right', modifier), { right: value }]]
      },
    ],
    bottom: [
      (modifier, { theme }) => {
        let value = asLength(modifier, theme['inset'])

        if (value === undefined) {
          return []
        }

        return [[nameClass('bottom', modifier), { bottom: value }]]
      },
    ],
    left: [
      (modifier, { theme }) => {
        let value = asLength(modifier, theme['inset'])

        if (value === undefined) {
          return []
        }

        return [[nameClass('left', modifier), { left: value }]]
      },
    ],
  })
}
