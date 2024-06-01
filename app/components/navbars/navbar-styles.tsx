import { fontSize, spacing } from "@/constants/font-properties";
import { textColors } from "@/constants/token-colors";
import { createStyleSheet } from "react-native-unistyles";

export const useNavbarStyles = ( hasBackground?: boolean, hasDescription?: boolean ) => {
  return createStyleSheet({
    container: {
      display: 'flex',
      alignItems: hasDescription ? 'baseline' : 'center',
      padding: spacing.s,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10,
    },
    label: {
      fontSize: fontSize.xl,
      lineHeight: spacing.lg,
      color: textColors.textBase900
    },
    description: {
      fontSize: fontSize.s,
      lineHeight: spacing.xs,
      color: textColors.textMedium700
    }
  });
};
