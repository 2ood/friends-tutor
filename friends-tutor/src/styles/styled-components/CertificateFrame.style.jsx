import styled from "styled-components";
import "styles/style.bootstrap.css";


const CertificateFrame = styled.div`
    display : inline-flex;
    flex-direction : column;
    justify-content : center;
    gap : 25px;
    padding : 10px;
    width : calc(100% - 20px);
    aspect-ratio : 3 / 4;
    border : 2px var(--certificate-${(props)=>{return props.rank??"Black"}}) solid;
    margin : 10px;

    .center {
        text-align : center;
    }

    .themed-text {
        color : var(--certificate-${(props)=>{return props.rank??"Black"}});
    }

    #publisher {
        display : inline-flex;
        align-items : center;
        justify-content : center;
        gap : 5px;
    }

    #signature {
        display : inline-block;
        width : 30px;
        height : 30px;
    }
`;

export {CertificateFrame};