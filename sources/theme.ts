import { Platform } from "react-native";

const palette = {
  canvas: "#f4eee3",
  panel: "#fcf8ee",
  raised: "#e8e4d6",
  line: "#d4c7ab",
  accent: "#264d3d",
  text: "#293d2e",
  muted: "#6e6e59",
  soft: "#eae6d8",
  success: "#48724b",
  warning: "#a65c20",
  danger: "#a54135",
  darkCanvas: "#17231d",
  darkPaper: "#203128",
  darkRaised: "#2c3e32",
  darkLine: "#485541",
  darkText: "#f0eadc",
  darkMuted: "#b7baa5",
};

export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
} as const;

export const radii = {
  sm: 8,
  md: 12,
  lg: 18,
  xl: 24,
  full: 999,
} as const;

export const typography = {
  title: {
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    fontSize: 24,
    lineHeight: 30,
  },
  section: {
    fontFamily: "Lato_700Bold",
    fontSize: 15,
    lineHeight: 20,
  },
  body: {
    fontFamily: "Lato_400Regular",
    fontSize: 15,
    lineHeight: 21,
  },
  meta: {
    fontFamily: "Lato_400Regular",
    fontSize: 12,
    lineHeight: 16,
  },
  mono: {
    fontFamily: "JetBrainsMono_400Regular",
    fontSize: 12,
    lineHeight: 18,
  },
} as const;

export const lightTheme = {
  dark: false,
  spacing,
  radii,
  typography,
  colors: {
    background: palette.canvas,
    surface: palette.panel,
    surfaceRaised: palette.raised,
    surfaceMuted: palette.soft,
    border: palette.line,
    text: palette.text,
    textMuted: palette.muted,
    accent: palette.accent,
    accentSoft: "#dfe6d2",
    orange: "#e0914d",
    success: palette.success,
    warning: palette.warning,
    danger: palette.danger,
    groupped: {
      background: palette.canvas,
    },
    header: {
      background: palette.panel,
      tint: palette.text,
    },
  },
};

export const darkTheme = {
  dark: true,
  spacing,
  radii,
  typography,
  colors: {
    background: palette.darkCanvas,
    surface: palette.darkPaper,
    surfaceRaised: palette.darkRaised,
    surfaceMuted: "#1b2922",
    border: palette.darkLine,
    text: palette.darkText,
    textMuted: palette.darkMuted,
    accent: "#cad9b8",
    accentSoft: "#354c3a",
    orange: "#f0b575",
    success: "#b4ce9d",
    warning: "#f0b575",
    danger: "#efa591",
    groupped: {
      background: palette.darkCanvas,
    },
    header: {
      background: palette.darkPaper,
      tint: palette.darkText,
    },
  },
};

export type AppTheme = typeof lightTheme;
