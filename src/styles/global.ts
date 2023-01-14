import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --red-background: #dd4b4a;
    --blue-background: #00b4ec;
    --background-: #fdfdfd;
    --background-button-color: #0055d1;
    --background-input-color: #fff;
    --border-input-color: #efeff1;
  }

  [data-theme='dark'] {
    --red-background: #7c1717;
    --blue-background: #001820;
    --background: #121416;
    --background-button-color: #002a68;
    --background-input-color: #121416;
    --border-input-color: #70707f;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
  }
`;

export { GlobalStyles };
