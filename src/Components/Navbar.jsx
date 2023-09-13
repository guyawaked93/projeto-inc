import React from "react";
import styled from "styled-components";

const Section = styled.nav`
  color: white; /* Cor do texto */
  padding: 10px 0; /* Espaçamento interno superior e inferior */
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto; /* Centralizar o conteúdo horizontalmente */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px; /* Espaçamento interno esquerdo e direito */
`;

const Logo = styled.img`
  height: 150px; /* Ajuste o tamanho do logotipo conforme necessário */
`;

const List = styled.ul`
  list-style: none; /* Remover marcadores de lista */
  display: flex;
  gap: 30px;
  margin: 0; /* Remover margens padrão da lista */
  padding: 0; /* Remover preenchimento padrão da lista */
`;

const ListItem = styled.li`
  cursor: pointer;
  font-size: 18px; /* Tamanho da fonte */
  font-weight: bold; /* Texto em negrito */
  transition: color 0.3s; /* Transição de cor suave */

  &:hover {
    color: #ff6600; /* Mudar a cor do texto ao passar o mouse */
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img``;

const Button = styled.button`
  cursor: pointer;
  background-color: #ff6600; /* Cor de fundo do botão */
  color: white; /* Cor do texto do botão */
  border: none; /* Remover borda do botão */
  padding: 10px 20px; /* Espaçamento interno do botão */
  font-size: 16px; /* Tamanho da fonte do botão */
  transition: background-color 0.3s; /* Transição de cor de fundo suave */

  &:hover {
    background-color: #ff8533; /* Mudar a cor de fundo ao passar o mouse */
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Logo src="./imagens/logo.png" alt="Logo da empresa" />
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Pensando</ListItem>
          <ListItem>Trabalhos</ListItem>
          <ListItem>Contato</ListItem>
        </List>
        <Icons>
          <Icon src="./imagens/search.png" alt="Ícone de pesquisa" />
          <Button>Contato</Button>
          <Icon src="./imagens/line.png" alt="Ícone de linha" />
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
