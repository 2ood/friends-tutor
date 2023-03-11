import styled from "styled-components";
import "styles/style.bootstrap.css";

const LectureGroup = styled.div`
    display : flex;
    aspect-ratio : 4 / 3.5;
    flex-flow : column wrap;
    overflow-x : show;
    grid-template-columns : 1fr 1fr;
    transform : translateX(calc((40vw + 5px) * 2* ${(props)=>(props.offset)}));
    transition : all .5s ease-in-out;
    gap : 10px;
    `;

const LectureGroupScrollWrapper = styled.div`
    overflow-x : hidden;
`;

export {LectureGroupScrollWrapper, LectureGroup};