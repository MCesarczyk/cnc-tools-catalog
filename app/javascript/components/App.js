import React from "react";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "../assets/GlobalStyle";
import { lightMode } from "../assets/theme";
import Router from "../routes";

export default function App() {
  return (
    <ThemeProvider theme={lightMode}>
      <Normalize />
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}