import styled from "styled-components";
import "styles/style.bootstrap.css";

// theme prop 
// theme="primary" : background color is primary color,
// theme="secondary" : background color is secondary color.
// It theme prop is absent or unrecognizable, primary is default.

const MypageButton = styled.button`
    padding : var(--round-border-padding) 10px;
    border : 0.5px var(--gray5) solid;
    color : var(${(props) => ((props.theme==="secondary")?"--button-font-secondary-color":(props.theme==="accent")?"--button-font-accent-color":"--button-font-primary-color")});
    background-color : var(--base-color);
    border-radius: 10%;
    flex-direction: column;
    height : 100%;
    display:flex;
    justify-content : center;
    align-items : center;

    font-weight : bold;
    font-size : var(--default-button-font-size);
    img {
        display : inline-block;
        width : 50%;
        height : 50%;
        object-fit: cover;
    }
`;

export {MypageButton};