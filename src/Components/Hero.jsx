import styled from "styled-components";
import Navbar from "./NavBar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  color: white ;

`;

const Hero = () => {
    return (
        <Section><Navbar/></Section>
    );
};

export default Hero;
