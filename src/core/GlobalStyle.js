import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color: ${({theme}) => theme.color.pageBackground};
};

*, ::after, ::before {
  box-sizing: inherit;
};
`