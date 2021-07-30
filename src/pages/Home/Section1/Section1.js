import styled from "styled-components";
import {H2, P, P2} from '../../../components/TagsComponents'

export const Section1 = ()=> {
    return(
        <Wrapper>
        <H2>Tradutor oficial </H2>
        <H2>dos códigos do Mauricio</H2>
        <P>Para melhor entendimento dos recados passados pelo nosso companheiro de trabalho</P>
        <P2>👆🏻🧑🏻🏃🏻‍♂️🏃🏻‍♂️ </P2>
        </Wrapper>
    )
};



const Wrapper = styled.div`
    position: absolute;
    z-index: 2;
    margin-top: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    z-index: 1; 
`;

