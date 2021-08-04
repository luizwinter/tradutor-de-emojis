import styled from "styled-components";
import { InsertEmoji } from "../../../../functions/functions";

export const InteractDiv = ()=>{
    return(
        <>
            <h2>Vou decifrar seu código</h2>
            <p>Digite aqui seu enigma:</p>
            <Row>
                <button onClick={()=> InsertEmoji(1,"👆🏻" )}>👆🏻</button>
                <button onClick={()=> InsertEmoji(2, "👋🏻")}>👋🏻</button>
                <button onClick={()=> InsertEmoji(3, "🤚🏻")}>🤚🏻</button>
                <button onClick={()=> InsertEmoji(4, "🧑🏻")}>🧑🏻</button>
                <button onClick={()=> InsertEmoji(13, "🚶🏾")}>🚶🏾</button>
                <button onClick={()=> InsertEmoji(5, "🏃🏻‍♂️")}>🏃🏻‍♂️</button>
                <button onClick={()=> InsertEmoji(6, "🙋🏻‍♂️")}>🙋🏻‍♂️</button>
                <button onClick={()=> InsertEmoji(7, "🥣")}>🥣</button>
                <button onClick={()=> InsertEmoji(8, "🍔")}>🍔</button>
                <button onClick={()=> InsertEmoji(9, "☕️")}>☕️</button>
                <button onClick={()=> InsertEmoji(10, "🚓")}>🚓</button>
                <button onClick={()=> InsertEmoji(11, "🚗")}>🚗</button>
                <button onClick={()=> InsertEmoji(12, "🏙")}>🏙</button>
                </Row>

            <TextArea id="TextArea" rows="10" cols="70" disabled></TextArea>
        </>
        )
};

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const TextArea = styled.textarea`
    background-color: white;
    color: black;
    border: 4px solid #AAC3B7;
    outline: none;
    resize: none;
    font-size: 1.5rem;
    font-family: 'Mulish', sans-serif;    
`;
