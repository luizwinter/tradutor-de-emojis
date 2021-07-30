import styled from "styled-components";

export const H2 = styled.h2`
    font-size: 3rem;
    line-height: 1%;

`;

export const P = styled.p`
    font-size: 1.5rem;
    opacity: 0.3;
`;

export const P2 = styled.p`

&{

}
&::after{
    opacity: 0.3;
    content: "- By Mauricio ";
    font-style: italic;
}
`;

