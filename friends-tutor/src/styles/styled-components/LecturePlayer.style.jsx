import styled from "styled-components";
import "styles/style.bootstrap.css";

// theme prop 
// theme="primary" : background color is primary color,
// theme="secondary" : background color is secondary color.
// It theme prop is absent or unrecognizable, primary is default.

const LecturePlayer = styled.iframe`
    display : inline-block;
    position : absolute;
    top : 0;
    bottom : 0;
    left : 0;
    right : 0;
    
    outline : none;
    border : none;
    border-radius : var(--default-border-radius);
`;

export {LecturePlayer};