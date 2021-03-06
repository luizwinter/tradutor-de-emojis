import styled from "styled-components";
import { InsertEmoji } from "../../../../functions/functions";

export const InteractDiv = ()=>{
    return(
        <>
            <h2>Vou decifrar seu cΓ³digo</h2>
            <p>Digite aqui seu enigma:</p>
            <Row>
                <button onClick={()=> InsertEmoji(1,"ππ»" )}>ππ»</button>
                <button onClick={()=> InsertEmoji(2, "ππ»")}>ππ»</button>
                <button onClick={()=> InsertEmoji(3, "π€π»")}>π€π»</button>
                <button onClick={()=> InsertEmoji(4, "π§π»")}>π§π»</button>
                <button onClick={()=> InsertEmoji(13, "πΆπΎ")}>πΆπΎ</button>
                <button onClick={()=> InsertEmoji(5, "ππ»ββοΈ")}>ππ»ββοΈ</button>
                <button onClick={()=> InsertEmoji(6, "ππ»ββοΈ")}>ππ»ββοΈ</button>
                <button onClick={()=> InsertEmoji(7, "π₯£")}>π₯£</button>
                <button onClick={()=> InsertEmoji(8, "π")}>π</button>
                <button onClick={()=> InsertEmoji(9, "βοΈ")}>βοΈ</button>
                <button onClick={()=> InsertEmoji(10, "π")}>π</button>
                <button onClick={()=> InsertEmoji(11, "π")}>π</button>
                <button onClick={()=> InsertEmoji(12, "π")}>π</button>
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
