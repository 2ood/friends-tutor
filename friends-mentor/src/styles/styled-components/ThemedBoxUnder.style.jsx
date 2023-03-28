import styled from "styled-components";
import "styles/style.bootstrap.css";

const ThemedBoxUnder = styled.div`
    display : inline-flex;
    flex-direction : column;
    justify-content : center;

    padding : 10px;
    width : 100%;
    height : 12%;
    
    background-color : var(--base-color);
    border-radius : 0px 0px 20px 20px;
    text-align : left;


`;

export {ThemedBoxUnder};