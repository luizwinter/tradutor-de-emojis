import styled from "styled-components";
import {H2, P, P2} from '../../../components/TagsComponents'
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export const Section1 = ()=> {

    useEffect(()=>{
        Aos.init({});
    },[])

    return(
        <Wrapper data-aos="fade-down">
        <H2>Tradutor oficial </H2>
        <H2>dos cรณdigos do Mauricio</H2>
        <P>Para melhor entendimento dos recados passados pelo nosso companheiro de trabalho</P>
        <P2>๐๐ป๐ง๐ป๐๐ปโโ๏ธ๐๐ปโโ๏ธ </P2>
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

