import styled from "styled-components";
import "styles/style.bootstrap.css";

//SignInUp.jsx
const SignInUpBar = styled.div`
    display : inline-flex;
    flex-direction : row;
    align-items : center;
    height : var(--top-bar-height);
    width : var(--full-width);
    justify-content : space-between;
    padding : var(--outmost-padding);
`;

export {SignInUpBar};