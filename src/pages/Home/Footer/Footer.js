import styled from "styled-components";

export const Footer = () =>{
    return(
        <Nav>
        <H1>Todos os Direitos reservados 2021 ©</H1>
        </Nav>
    )
};

const Nav = styled.nav`
    padding-top: 2em;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
`;

const H1 = styled.h1`
    padding: 0 2vh 0 2vh;
    font-size: 1.2em;
    cursor: pointer;

`;
