import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Sevillana", cursive;
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    background: url("https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/Imagem%20palacio.png?raw=true") no-repeat center center;
    background-size: cover;

    @media (max-width: 900px) {
      background: url("https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/imagem%20do%20palacio.png?raw=true") no-repeat center center;
      background-size: cover;
    }
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
`;

const Titulo = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 3.5rem;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

const Botao = styled.button`
  width: 200px;
  height: 60px;
  border-radius: 30px;
  background-color: #007bff;
  color: #fff;
  font-family: "Sevillana", cursive;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 900px) {
    background-color: #b74794;
    font-size: 20px;
    width: 180px;
    height: 50px;
  }
`;

const Imagens = styled.img`
  width: ${(props) => (props.genio ? "500px" : "300px")};
  height: auto;
  margin-top: 20px;

  @media (max-width: 900px) {
    width: ${(props) => (props.genio ? "350px" : "200px")};
  }
`;

export default function App() {
  const [lampada, setLampada] = useState(false);
  const [surpresa, setSurpresa] = useState("");

  const trocarLampada = () => {
    setLampada(!lampada);
    setSurpresa(lampada ? "" : "😲");
  };

  return (
    <>
      <GlobalStyle />
      <Main>
        <Titulo>
          "Liberte a magia da programação com a lâmpada de Aladim."
        </Titulo>
        <Imagens
          src={
            lampada
              ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true"
              : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"
          }
          alt="Lâmpada"
          genio={lampada}
        />
        <Botao onClick={trocarLampada}>Clique Aqui {surpresa}</Botao>
      </Main>
    </>
  );
}
