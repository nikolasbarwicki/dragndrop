import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-size: inherit;
    font-family: sans-serif;
    color: inherit;
  }

  a {
      text-decoration: none;
      color: inherit;
  }

  ul, ol {
    list-style: none;
  }
`;

export default GlobalStyle;
