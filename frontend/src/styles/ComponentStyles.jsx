import styled from "styled-components";
import "styles/style.bootstrap.css";

//MainBodyFrame.jsx
const MainBodyFrame = styled.div`
    display : inline-block;
    width : var(--full-width);
    height : calc(var(--full-height) - var(--top-bar-height));
    padding : 0 var(--body-padding);
    padding-top :var(--body-padding-top);
`;

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

//Topbar.jsx
const Topbar = styled.div`
    display : inline-flex;
    height : var(--top-bar-height);
    width : var(--full-width);
    justify-content : space-between;
    align-items : center;
    padding : var(--outmost-padding);
    background-color : var(--primary-color);
    color : var(--font-color-over-primary);

    #navgroup {
        display : inline-flex;
        flex-direction : row;
    }

    #logo {
        font-size : var(--font-size-h1);
        font-weight : bold;
    }
`;

const NavButton = styled.div`
    display : inline-flex;
    height : calc(var(--top-bar-height) - 2 * var(--outmost-padding));
    aspect-ratio : 1 / 1;
    justify-content : center;
    align-items : center;

    image {
        width : 100%;
        height : 100%;
    }
`;

//LogTest.jsx
const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    margin : 0 10vw;
    gap : 10px;
`;

const Input = styled.input`
    display : inline-block;
    width : 100%;
    min-height : 50px;
    padding : 10px;
`;

const Log = styled.textarea`
    display : inline-block;
    width : 100%;
    min-height: 200px;
    resize : none;
`;

export {MainBodyFrame};
export {HorizontalInput, NoBorderInput};
export {VerticalInput, UnderlinedInput};
export {Topbar, NavButton};
export {Wrapper, Input, Log};