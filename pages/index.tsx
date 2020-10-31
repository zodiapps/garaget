import { Head } from 'next/document';
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
    flex: 1;
    overflow: hidden;
    .image-container {
      display: flex;
      flex-wrap: wrap;
    }
  }
  footer {
    background-color: #ffa200;
    color: #772609;
  }
`;

const LogoImg = styled.img`
  display: block;
  flex: 1;
  max-width: 100vw;
  max-height: 100%;
  width: 400px;
`;

const IndexPage = () => (
  <StyledIndexPage>
    <header>
      <h1>Sharpshooters present</h1>
    </header>
    <main>
      <div className="image-container">
        <LogoImg src="logo.jpg"></LogoImg>
        <LogoImg src="logo.jpg"></LogoImg>
        <LogoImg src="logo.jpg"></LogoImg>
      </div>
    </main>
    <footer>
      <h1>GBG 2021</h1>
    </footer>
  </StyledIndexPage>
);

export default IndexPage;
