import styled from "styled-components";
import "styles/style.bootstrap.css";

// theme prop 
// theme="primary" : background color is primary color,
// theme="secondary" : background color is secondary color.
// It theme prop is absent or unrecognizable, primary is default.

const MypageButton = styled.div`
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

const MypageName = styled.h1`
    display : inline-block;
    padding : var(--round-border-padding);
    text-align : left;
    font-size : var(--font-size-h2);
    color : var(--gray2);
`;

const MypageGrade = styled.h1`
    display : inline-block;
    padding : var(--round-border-padding);
    text-align : left;
    font-size : var(--font-size-h3);
    color : var(--gray1);
`;

const MypageText = styled.h1`
    display : inline-block;
    align-content:center;
    min-width : 100%;
    padding : var(--round-border-padding);
    text-align : center;
    font-size : var(--font-size-h3);
    color : var(--gray3);
`;

const MypageTitle = styled.h1`
    display : inline-block;
    padding : var(--round-border-padding);
    text-align : left;
    font-size : var(--font-size-h3);
    color : var(--base-color);
`;

export {MypageTitle, MypageText, MypageGrade, MypageName, MypageButton};