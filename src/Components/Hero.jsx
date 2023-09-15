import styled from "styled-components";
import Navbar from "./NavBar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  max-width: 1300px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LeftContent = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  text-align: center;
  margin-right: 200px;
  margin-top: -50px; /* Ajuste este valor para mover as descrições para cima */
`;

const RightContent = styled.div`
  flex: 7;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: white;
`;

const Slogan = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 2rem;
  color: orange;
`;

const Desc = styled.p`
  font-size: 1rem;
  color: lightblue;
`;

const Button = styled.button`
  background-color: orange;
  color: white;
  font-weight: 400;
  width: 150px;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

const Img = styled.img`
  max-width: 100%;
  height: 65%;
  margin: 50px 75% 0; /* Ajuste o valor do margin-top para mover o GIF para cima */
  margin-top: -20px;
  border: none;

  /* Remova a opacidade */
  object-fit: contain;

  animation: animate 4s infinite linear;

  @keyframes animate {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
      /* Opacidade de 1 para tornar a GIF visível */
      opacity: 0;
    }
    50% {
      transform: translateY(-10px) rotate(5deg);
      /* Opacidade de 0.8 durante a animação */
      opacity: 0.8;
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <LeftContent>
          <Title>Inception Solutions</Title>
          <Slogan> - Sua visão, nossa criação.</Slogan>
          <Desc>Desenvolvimento de automação, integração de sistemas e consultoria.</Desc>
          <Button>Saiba mais</Button>
        </LeftContent>
        <RightContent>
          {/* Certifique-se de que o caminho da imagem está correto */}
          <Img src="./imagens/test3.gif" alt="Imagem de exemplo" />
        </RightContent>
      </Container>
    </Section>
  );
};

export default Hero;