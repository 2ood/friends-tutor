import styled from "styled-components";
import "styles/style.bootstrap.css";

//MainBodyFrame.jsx
const MainBodyFrame = styled.div`
    display : inline-flex;
    flex-direction : column;
    gap : ${(props)=>(props.gap)};
    width : var(--full-width);
    height : calc(var(--full-height) - var(--top-bar-height));
    padding : 0 var(--body-padding);
    padding-top :var(--body-padding-top);
`;

export {MainBodyFrame};