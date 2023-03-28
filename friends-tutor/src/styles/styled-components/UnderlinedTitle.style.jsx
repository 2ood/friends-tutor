import styled from "styled-components";
import "styles/style.bootstrap.css";

const UnderlinedTitle = styled.div`
    display : inline-block;
    min-width : ${(props) => ((!props.size)?"0px":props.size)};
    min-height : 1.5em;
    font-size : var(--font-size-${(props) => ((!props.fontSize)?"h1":props.fontSize)});
    color : var(--font-primary-color); 
    border-bottom : 2px var(--gray1) solid;
    text-align : ${(props)=>(props.align)};
    font-weight : bold;
`;

export {UnderlinedTitle};