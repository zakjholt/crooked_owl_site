import { theme } from "@chakra-ui/core";
export default {
  ...theme,
  breakpoints: ["30em", "48em", "62em", "80em"],
  colors: {
    ...theme.colors,
    primary: "#f6f6f7",
    tertiary: "#1d1246",
    secondary: "#b79e64",
    accent: "#b19657",
  },

  fonts: {
    heading: '"VT323", sans-serif',
    body: '"PT Sans", sans-serif',
    mono: "Menlo, monospace",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
};
