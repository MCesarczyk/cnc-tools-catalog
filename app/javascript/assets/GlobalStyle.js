import { createGlobalStyle } from "styled-components";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

:focus {
  outline-offset: 8px;
}

body {
  font-family: 'Roboto', sans-serif;
  transition: color ease-in 1s;
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.text};
}

html, body {
  font-size: 22px;
  height: 100%;
  padding: 0;
  margin: 0;

  @media(max-width: ${({ theme }) => theme.breakpoint.xxl}) {
    font-size: 20px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.xl}) {
    font-size: 18px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.lg}) {
    font-size: 16px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: 14px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.sm}) {
    font-size: 12px;
  }
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Poppins', sans-serif;
}

h1 { font-size: 2rem; }
h2 { font-size: 1.75rem; }
h3 { font-size: 1.5rem; }
h4 { font-size: 1.25rem; }
h5 { font-size: 1rem; }

button {
  cursor: pointer;
  display: block;
}

ul, ol {
  list-style: none;
  padding-left: 0;
}

a {
  text-decoration: none;
  color: unset;

  &:hover {
    filter: brightness(0.8);
    background-color: unset;
  }
}`