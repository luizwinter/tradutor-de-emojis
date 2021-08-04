import styled from "styled-components";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { InteractDiv } from "./InteractDiv/InteractDiv";
import { Translate } from "../../../functions/functions";
import Loading from "../../../components/Loading";



export const Section2 = ()=> {

    const loading = ()=>{
        document.getElementById("btn_submit").style.display="none";
        setsectionState(<Loading />)
        setTimeout(function(){ 
            setsectionState(<InteractDiv/ >)
            Translate(); 
            document.getElementById("btn_submit").style.display="block";

        }, 2000);


        
    };

    const [sectionState, setsectionState] = useState(<InteractDiv />);

        useEffect(()=>{
            Aos.init({
                duration : 1000
            });
        },[])

    return(
        
        <Wrapper data-aos="fade-up">
            {sectionState}
            <Btn id="btn_submit" type="submit" onClick={loading}>Enviar</Btn>

        </Wrapper>
        )
};


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vw;

`;

const Btn = styled.button`
&{  background-color: #002244;
    color: white;
    margin: 1rem;
    border: none;
    padding: 16px 32px;
    cursor: pointer;
    border: 2px solid #AAC3B7;

    
}
&:hover{
    background-color: #AAC3B7;
}
`;