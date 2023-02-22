import styled from "styled-components";
import "styles/style.bootstrap.css";

//HorizontalInput.jsx
const HorizontalInput = styled.div`
    display : inline-grid;
    width  :100%;
    min-height : 40px;
    padding : var(--round-border-padding);
    grid-template : 1fr /1fr 4fr;
    border : var(--default-border-size) var(--primary-color) solid;
    border-radius : var(--default-border-radius);

    label {
        display : inline-flex;
        color : var(--primary-color);
        font-size : var(--font-size-h3);
        align-items : center;
    }
`;

const NoBorderInput = styled.input`
    display : inline-flex;
    height : var(--input-height);
    border : none;
    outline : none;
    align-items : center;
`;

export {HorizontalInput, NoBorderInput};