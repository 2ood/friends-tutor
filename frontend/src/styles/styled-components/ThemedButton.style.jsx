import styled from "styled-components";
import "styles/style.bootstrap.css";

// theme prop 
// theme="primary" : background color is primary color,
// theme="secondary" : background color is secondary color.
// It theme prop is absent or unrecognizable, primary is default.

const ThemedButton = styled.button`
    display : inline-block;
    min-width : ${(props) => ((!props.size)?"0px":props.size)};
    min-height : 40px;
    padding : var(--round-border-padding);
    border : var(--default-border-size) var(${(props) => ((props.theme==="secondary")?"--button-border-secondary-color":(props.theme==="accent")?"--button-border-accent-color":"--button-border-primary-color")}) solid;
    color : var(${(props) => ((props.theme==="secondary")?"--button-font-secondary-color":(props.theme==="accent")?"--button-font-accent-color":"--button-font-primary-color")});
    background-color : var(${(props) => ((props.theme==="secondary")?"--button-background-secondary-color":(props) => ((props.theme==="accent")?"--button-background-accent-color":"--button-background-primary-color"))});
    border-radius : var(--default-border-radius);
    font-weight : bold;
`;

export {ThemedButton};