import { AppProps } from 'next/app';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Staatliches, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    line-height: 1.6;
    background-color: #000;
  }

  * {
    box-sizing: border-box;
  }

  label {
    input {
      display: block;
    }
  }

  h1 {
    margin: 0;
  }
`;

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
