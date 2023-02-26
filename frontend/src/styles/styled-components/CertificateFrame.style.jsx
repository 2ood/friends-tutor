import styled from "styled-components";
import "styles/style.bootstrap.css";

const CertificateFrame = styled.div`
    display : inline-flex;
    flex-direction : column;
    justify-content : center;
    gap : 25px;
    padding : 10px;
    width : 100%;
    aspect-ratio : 3 / 4;
    border : 2px var(--yellow) solid;
    margin-bottom : 30px;

    .center {
        text-align : center;
    }

    .yellow {
        color : var(--yellow);
    }

`;

export {CertificateFrame};