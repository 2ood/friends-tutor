import styled from "styled-components";
import "styles/style.bootstrap.css";

const ThemedBox = styled.div`
    display : inline-flex;
    flex-direction : column;
    justify-content : center;
    margin-top: 20px;
    padding : 10px;
    width : 100%;
    height : 6%;

    background-color : var(--primary-color);

    border-radius : 20px 20px 0px 0px;
    border : 2px var(--primary-color) solid;

    text-align : left;
    


`;

export {ThemedBox};