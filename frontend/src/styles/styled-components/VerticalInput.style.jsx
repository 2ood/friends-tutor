import styled from "styled-components";
import "styles/style.bootstrap.css";

//VerticalInput.jsx
const VerticalInput = styled.div`
    display : inline-flex;
    width : 100%;
    min-height: 50px;
    flex-direction : column;
    align-items : left;

    label {
        color : var(--font-primary-color);
        font-size : var(--font-size-h2);
    }
`;

const UnderlinedInput = styled.input`
    diplay : inline-block;
    height : var(--input-height);
    border : none;
    outline : none;
    border-bottom : 2px var(--gray1) solid; 
`;

export {VerticalInput, UnderlinedInput};