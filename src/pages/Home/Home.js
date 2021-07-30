import styled from "styled-components";
import { Navbar } from "./Navbar"
import BgImg from "./images/bgmauricio.jpg"
import { Section1 } from "./Section1";
import { Section2 } from "./Section2/Section2";
import { Footer } from "./Footer";


export const Home = () =>{
    return(
        <>
        <Navbar/>
        <Section1/>
        <Main>
        </Main>
        <Section2/>
        <Footer/>

        </>
    );
};


const Main = styled.div`
    display: block;
    color: white;
    height: 100vh;
    background-image: url(${BgImg});
    background-size:  cover;
    filter: brightness(0.30);
    width: 100vw;
`;