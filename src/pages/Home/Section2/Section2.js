import styled from "styled-components";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { InsertEmoji, Translate } from "../../../functions/functions";



export const Section2 = ()=> {

        useEffect(()=>{
            Aos.init({
                duration : 1000
            });
        },[])

    return(
        
        <Wrapper data-aos="fade-up">
            <h2>Vou decifrar seu código</h2>
            <p>Digite aqui seu enigma:</p>
            <Row>
                <button onClick={()=> InsertEmoji(1)}>👆🏻</button>
                <button onClick={()=> InsertEmoji(2)}>👋🏻</button>
                <button onClick={()=> InsertEmoji(3)}>🤚🏻</button>
                <button onClick={()=> InsertEmoji(4)}>🧑🏻</button>
                <button onClick={()=> InsertEmoji(13)}>🚶🏾</button>
                <button onClick={()=> InsertEmoji(5)}>🏃🏻‍♂️</button>
                <button onClick={()=> InsertEmoji(6)}>🙋🏻‍♂️</button>
                <button onClick={()=> InsertEmoji(7)}>🥣</button>
                <button onClick={()=> InsertEmoji(8)}>🍔</button>
                <button onClick={()=> InsertEmoji(9)}>☕️</button>
                <button onClick={()=> InsertEmoji(10)}>🚓</button>
                <button onClick={()=> InsertEmoji(11)}>🚗</button>
                <button onClick={()=> InsertEmoji(12)}>🏙</button>
                </Row>

            <TextArea id="TextArea" rows="10" cols="70" disabled></TextArea>

            <Btn type="submit" onClick={Translate}>Enviar</Btn>
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

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const TextArea = styled.textarea`
    border: 4px solid #AAC3B7;
    outline: none;
    resize: none;
    font-size: 1.5rem;


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