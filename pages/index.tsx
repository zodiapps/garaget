import styled from 'styled-components';

const StyledIndexPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  header,
  footer {
    text-align: center;
    text-transform: uppercase;
  }
  header {
    background-color: #ec449b;
  }
  main {
    width: 100%;
    height: 100%;
    background: url('/logo.jpg');
    background-size: contain;
    background-repeat: round;
  }
  footer {
    background-color: #ffa200;
    color: #772609;
  }
`;

const IndexPage = () => (
  <StyledIndexPage>
    <header>
      <h1>Sharpshooters presents</h1>
    </header>
    <main></main>
    <footer>
      <h1>GBG 2021</h1>
    </footer>
  </StyledIndexPage>
);

export default IndexPage;
