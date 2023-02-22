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

export {MainBodyFrame};