import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --red-background: #dd4b4a;
    --background-: #fdfdfd;
    --background-button-color: #0055d1;
    --border-input-color: #efeff1;
  }

  [data-theme='dark'] {
    --red-background: #7c1717;
    --background: #121416;
    --background-button-color: #002a68;
    --border-input-color: #70707f;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
  }
`;

export { GlobalStyles };
