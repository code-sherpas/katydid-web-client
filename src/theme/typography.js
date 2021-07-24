import { pxToRem, responsiveFontSizes } from '~/utils/formatFontSize';

// ----------------------------------------------------------------------

const FONT_PRIMARY = 'Be Vietnam, sans-serif'; 
const FONT_SECONDARY = 'CircularStd, sans-serif'; 
const FONT_DIARY = 'NewSun, regular';

const Typography = {
  fontFamily: FONT_PRIMARY,

  fontWeightRegular: 500,
  fontWeightMedium: 600,
  fontWeightBold: 700,

  h1: {
    fontWeight: 600,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 })
  },
  h2: {
    fontFamily: FONT_DIARY,
    fontWeight: 600,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 })
  },
  h3: {
    fontFamily: FONT_DIARY,
    lineHeight: 1.5,
    fontWeight: 600,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 })
  },
  h4: {
    fontFamily: FONT_DIARY,
    lineHeight: 1.5,
    fontWeight: 600,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 })
  },
  h5: {
    lineHeight: 1.5,
    fontWeight: 600,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 })
  },
  h6: {
    fontWeight: 600,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 })
  },
  subtitle1: {
    fontFamily: FONT_DIARY,
    fontSize: pxToRem(24),
    lineHeight: 1.5,
    fontWeight: 600
  },
  subtitle2: {
    fontFamily: FONT_DIARY,
    fontSize: pxToRem(20),
    lineHeight: 22 / 14,
    fontWeight: 600
  },
  body1: {
    fontSize: pxToRem(16),
    lineHeight: 1.5
  },
  body2: {
    fontSize: pxToRem(14),
    lineHeight: 22 / 14
  },
  caption: {
    fontSize: pxToRem(12),
    lineHeight: 1.5
  },
  overline: {
    fontSize: pxToRem(12),
    lineHeight: 1.5,
    fontWeight: 700,
    letterSpacing: 1.2,
    textTransform: 'uppercase'
  },
  button: {
    fontFamily: FONT_DIARY,
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'capitalize'
  }
};

export default Typography;
