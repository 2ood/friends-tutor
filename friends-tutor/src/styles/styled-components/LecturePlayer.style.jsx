import styled from "styled-components";
import "styles/style.bootstrap.css";

// theme prop 
// theme="primary" : background color is primary color,
// theme="secondary" : background color is secondary color.
// It theme prop is absent or unrecognizable, primary is default.

const LecturePlayer = styled.iframe`
    display : inline-block;
    width : 100%;
    aspect-ratio : 16/9;
    outline : none;
    border : none;
    border-radius : var(--default-border-radius);
`;

export {LecturePlayer};