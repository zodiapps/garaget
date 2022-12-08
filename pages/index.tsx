import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: ${(p) => p.theme.colors.purple};
  text-align: center;
  text-transform: uppercase;
`;

const StyledMain = styled.main`
  flex: 1;
  background: url('/logo.png');
  background-size: contain;
  background-repeat: round;
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    background-color: rgba(255, 255, 255, 1);
    padding: 7vh 5vw;
    clip-path: polygon(
      4vw 4vh,
      calc(100% - 2vw) 1vh,
      calc(100% - 4vw) calc(100% - 4vh),
      0 calc(100% - 5vh)
    );

    > * {
      max-width: 60ch;
    }

    a {
      text-decoration: none;
      color: ${(p) => p.theme.colors.purple};

      &:hover {
        text-decoration: underline;
      }
    }

    .premiere {
      color: ${(p) => p.theme.colors.red};
    }
  }
`;

const StyledFooter = styled.footer`
  text-align: center;
  text-transform: uppercase;
  background-color: ${(p) => p.theme.colors.orange};
  color: ${(p) => p.theme.colors.red};
`;

const IndexPage = () => (
  <>
    <StyledHeader>
      <h1>Sharpshooters present</h1>
    </StyledHeader>
    <StyledMain>
      <div className="box">
        <h2>
          En återkommande klubb i Göteborg
          <br />
          för alla som fastnat i replokalen och behöver en scen att stå på
        </h2>
        <h3>Vill du spela?</h3>
        <p>
          <a href="mailto:romleborg.band@gmail.com">Maila oss</a> med en beskrivning av
          bandet/projektet
        </p>
        <p>
          Vi prioriterar band som inte har så stor gig-erfarenhet men vi diskriminerar inte andra
        </p>
        <p>Alla genres välkomna</p>
        <a href="https://fb.me/e/4uNc1nRxs" className="premiere" rel="noopener">
          18 januari 2023 - Crippas Café
        </a>
      </div>
    </StyledMain>
    <StyledFooter>
      <h1>GBG 2023</h1>
    </StyledFooter>
  </>
);

export default IndexPage;
