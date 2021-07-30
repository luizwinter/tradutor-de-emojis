import styled from "styled-components";

export const Section2 = ()=> {
    return(
        <Wrapper>
            <h2>Vou decifrar seu código</h2>
            <p>Digite aqui seu enigma:</p>
            <TextArea rows="10" cols="70"></TextArea>

            <Btn type="submit">Enviar</Btn>
            <Row>👆🏻👋🏻🤚🏻🧑🏻🏃🏻‍♂️🙋🏻‍♂️ 🥣🍔☕️🚓🚗🏙</Row>
        </Wrapper>
        )
};


const Wrapper = styled.div`
    padding-top: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

`;

const Row = styled.div`
    padding-top: 1em;
    padding-bottom: 10em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const TextArea = styled.textarea`
    border: 4px solid #AAC3B7;
    outline: none;
    resize: none;


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