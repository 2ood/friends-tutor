import styled from "styled-components";
import "styles/style.bootstrap.css";

const ThemedBoxRound = styled.div`
    display : inline-grid;
    grid-template-columns: 50% 50%;
    flex-direction : column;
    justify-content : center;
    width : 100%;
    height :70%;
    background-color : var(--base-color);
    border-radius : 20px 20px 20px 20px;
    margin: 30px 0px 0px 0px;
    text-align : left;

    font-size : var(--font-size-h3);
    color: var(--gray3);


`;

export {ThemedBoxRound};