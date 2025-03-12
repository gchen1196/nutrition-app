/**
 * Theme configuration for styled-components
 * Inspired by Airbnb's design system
 */

// Base colors
const colors = {
  // Primary palette
  rausch: "#FF5A5F", // Airbnb's signature coral/pink
  babu: "#00A699", // Teal
  arches: "#FC642D", // Orange
  hof: "#484848", // Charcoal
  foggy: "#767676", // Gray

  // Neutrals
  white: "#FFFFFF",
  gray50: "#F8F8F8",
  gray100: "#F5F5F5",
  gray200: "#EBEBEB",
  gray300: "#DDDDDD",
  gray400: "#CCCCCC",
  gray500: "#AAAAAA",
  gray600: "#767676",
  gray700: "#484848",
  gray800: "#333333",
  gray900: "#222222",
  black: "#000000",

  // Functional colors
  success: "#008A05",
  error: "#FF5A5F",
  warning: "#FFB400",
  info: "#428BFF",
};

// Typography
const typography = {
  fontFamily: {
    base: "Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif",
    display: "Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
  },
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
};

// Spacing
const spacing = {
  0: "0",
  1: "0.25rem", // 4px
  2: "0.5rem", // 8px
  3: "0.75rem", // 12px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  8: "2rem", // 32px
  10: "2.5rem", // 40px
  12: "3rem", // 48px
  16: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px
  32: "8rem", // 128px
};

// Border radius
const radius = {
  none: "0",
  sm: "0.125rem", // 2px
  md: "0.25rem", // 4px
  lg: "0.5rem", // 8px
  xl: "0.75rem", // 12px
  "2xl": "1rem", // 16px
  full: "9999px",
};

// Shadows
const shadows = {
  none: "none",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
};

// Breakpoints
const breakpoints = {
  xs: "480px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  "2xl": "1440px",
};

// Z-index
const zIndex = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
};

// Transitions
const transitions = {
  duration: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
    slower: "700ms",
  },
  timing: {
    ease: "ease",
    in: "ease-in",
    out: "ease-out",
    inOut: "ease-in-out",
  },
};

// Main theme object
export const theme = {
  colors,
  typography,
  spacing,
  radius,
  shadows,
  breakpoints,
  zIndex,
  transitions,
};

export type Theme = typeof theme;
