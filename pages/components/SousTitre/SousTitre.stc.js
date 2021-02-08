import styled from "styled-components";

export const SousTitreStc = styled.p`
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding-bottom: 15px;
    position: relative; 
    color: ${props => props.color || "#000"};
    
`;

export default SousTitreStc;