import { darken } from '../../util/color'

export default function ({ colors, borders, shadows }) {
  return {
    borderColor: colors.tiara,
    arrowBorderColor: darken(colors.tiara, 5),
    backgroundColor: colors.white,
    textColor: colors.oxford,

    borderColorInverse: 'transparent',
    backgroundColorInverse: colors.oxford,
    textColorInverse: colors.white,

    arrowSize: '0.5rem',
    borderWidth: borders.widthSmall,
    borderRadius: borders.radiusMedium,

    boxShadow: shadows.depth1
  }
}
