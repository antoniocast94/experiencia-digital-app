import * as colors from "./../constants/token-colors";
import { fontFamily, fontSize, spacing } from "./../constants/font-properties";

export const lightTheme = {
  colors,
  fontFamily,
  fontSize,
  spacing,
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12
  }
} as const

export const darkTheme = {
  colors: {
    typography: '#ffffff',
    background: '#000000'
  },
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12
  }
} as const

