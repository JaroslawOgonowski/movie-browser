import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Header } from "../common/Header";
import { theme } from "./theme";

export default () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
      </ThemeProvider>
    </>
  );
};