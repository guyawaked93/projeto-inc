import styled from "styled-components";

const Section = styled.div`
    display: flex;
  /*  justify-content: center; */
  `;

const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;

const Logo = styled.img`
    display: flex;
    margin-top: -35px;
    padding-left: 25px;
    height: 150px;
`;

const List = styled.ul`
    display: flex;
    gap: 30px;
    list-style:none;
    margin-top: -35px;
`;

const ListItem = styled.li`
    cursor: pointer;
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    
`;

const Icon = styled.img`
    margin-top: -35px;
    display: flex;
    align-items: center;
    gap:20px;
`;

const Button = styled.button`
    width: 100px;
    padding: 10px;
    margin-top: -35px;
    background-color: orange;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                <Logo src="./imagens/logao.png" />
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Pensando</ListItem>
                    <ListItem>Trabalhos</ListItem>
                    <ListItem>Contato</ListItem>
                </List>
                </Links>
                <Icons>
                    <Icon src = "./imagens/search.png" />
                     <Button>Contato</Button>
                </Icons>                
            </Container>           
        </Section>
    );
};

export default Navbar;
