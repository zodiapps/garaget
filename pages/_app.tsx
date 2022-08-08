import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    /* height: -webkit-fill-available; */
  }
  
  html,
  body {
    height: 100%;
    padding: 0;
    margin: 0;
    font-size: 1.125rem;
    font-family: Staatliches, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
      Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    line-height: 1.6;
    background-color: #000;
  }
  
  #__next {
    height: 100%;
    display: flex;
    flex-direction: column;
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

const theme = {
  colors: {
    purple: '#ec449b',
    orange: '#ffa200',
    red: '#772609',
  },
};

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
