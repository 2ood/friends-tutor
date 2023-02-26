import styled from "styled-components";
import "styles/style.bootstrap.css";

// theme prop 
// theme="primary" : background color is primary color,
// theme="secondary" : background color is secondary color.
// It theme prop is absent or unrecognizable, primary is default.

const ThemedTextarea = styled.textarea`
    display : inline-block;
    min-width : ${(props) => ((!props.size)?"0px":props.size)};
    min-height : 100px;
    padding : var(--round-border-padding);
    outline: none;
    border : var(--default-border-size) var(--primary-color) solid;
    border-radius : var(--default-border-radius);
    color : var(--font-default-color);

    ::placeholder {
        color :var(--font-placeholder-color);
        padding-left : 50px;
    }
`;

export {ThemedTextarea};