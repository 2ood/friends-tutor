import styled from "styled-components";
import "styles/style.bootstrap.css";

// theme prop 
// theme="primary" : background color is primary color,
// theme="secondary" : background color is secondary color.
// It theme prop is absent or unrecognizable, primary is default.

const FullWidthButton = styled.button`
    display : inline-block;
    width  : 100%;
    min-height : 40px;
    padding : var(--round-border-padding);
    border : var(--default-border-size) var(--primary-color) solid;
    color : var(${(props) => ((props.theme==="secondary")?"--button-font-secondary-color":"--button-font-primary-color")});
    background-color : var(${(props) => ((props.theme==="secondary")?"--button-background-secondary-color":"--button-background-primary-color")});
    border-radius : var(--default-border-radius);
`;

export {FullWidthButton};