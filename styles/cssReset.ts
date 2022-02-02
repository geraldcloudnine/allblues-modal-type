import { css } from 'styled-components';

export const cssReset = css`
  html,
  body {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; /* 1rem = 10px */
  }
  body {
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
  }

  input:focus {
    outline: none;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: always;
  }
`;
