import styled from "styled-components";

export const Navbar = () =>{
    return(
        <Nav>
        <H1>Home</H1>
        <H1>Tradutor</H1>
        </Nav>
    )
};

const Nav = styled.nav`
    padding-top: 2em;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    z-index: 1; 
    
`;

const H1 = styled.h1`
    padding: 0 2vh 0 2vh;
    font-size: 1.2em;
    cursor: pointer;


`;
