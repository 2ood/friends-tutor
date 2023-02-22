import styled from "styled-components";
import "styles/style.bootstrap.css";

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

export {Wrapper, Input,Log};