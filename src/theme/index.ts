import { extendTheme } from "@chakra-ui/react";
// 2. Extend the theme to include custom colors, fonts, etc
export const colors = {
  main: {
    d: "#004d4a",
    m: "#048E76",
    l: "#1df0e7",
  },
};
export const theme = extendTheme({
  colors,
  styles: {
    global: {
      html: {
        height: "100%",
        fontSize: { base: "85%", md: "95%", lg: "100%" },
      },
      body: {
        bg: "#fff",
        minH: "100vh",
        position: "relative",
        pb: { base: "65rem", md: "35rem", lg: "20rem" },
      },
      ul: { listStyleType: "none" },
      // input: { focusBorderColor: "main.m" },
    },
  },
});
