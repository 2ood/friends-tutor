import styled from "styled-components";
import "styles/style.bootstrap.css";

const EmptyBox = styled.div`
    display : inline-flex;
    justify-content : center;
    align-items : center;
    width : ${(props)=>(props.width)};
    aspect-ratio ${(props)=>(props.aspect_ratio??"4 / 1")};
`;

export {EmptyBox};