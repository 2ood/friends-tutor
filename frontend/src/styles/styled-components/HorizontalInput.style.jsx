import styled from "styled-components";
import "styles/style.bootstrap.css";

//HorizontalInput.jsx
const HorizontalInput = styled.div`
    display : inline-flex;
    width  :100%;
    min-height : 40px;
    padding : var(--round-border-padding);
    border : var(--default-border-size) var(--primary-color) solid;
    border-radius : var(--default-border-radius);

    label {
        flex-shrink : 0;
        display : inline-flex;
        color : var(--primary-color);
        font-size : var(--font-size-h3);
        align-items : center;
    }

    input {
        flex-shrink : 4;
        margin : 0 var(--round-border-padding);
    }
`;

const NoBorderInput = styled.input`
    display : inline-flex;
    height : var(--input-height);
    border : none;
    outline : none;
    align-items : center;

    ::placeholder {
        color :var(--font-placeholder-color);
    }
`;

export {HorizontalInput, NoBorderInput};