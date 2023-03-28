import styled from "styled-components";
import "styles/style.bootstrap.css";


const ThemedTitle = styled.h1`
    display : inline-block;
    min-width : 100%;
    min-height : 50px;
    padding : var(--round-border-padding);
    text-align : center;
    font-size : var(--font-size-h1);
    color : var(--primary-color);
`;

export {ThemedTitle};