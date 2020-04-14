import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import theme from "../theme";
import "../theme/fonts.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
