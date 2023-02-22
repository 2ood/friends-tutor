import styled from "styled-components";
import "styles/style.bootstrap.css";

//Topbar.jsx
const Topbar = styled.div`
    display : inline-flex;
    height : var(--top-bar-height);
    width : var(--full-width);
    justify-content : space-between;
    align-items : center;
    padding : var(--outmost-padding);
    background-color : var(--primary-color);
    color : var(--font-color-over-primary);

    #navgroup {
        display : inline-flex;
        flex-direction : row;
    }

    #logo {
        font-size : var(--font-size-h1);
        font-weight : bold;
    }
`;

const NavButton = styled.div`
    display : inline-flex;
    height : calc(var(--top-bar-height) - 2 * var(--outmost-padding));
    aspect-ratio : 1 / 1;
    justify-content : center;
    align-items : center;

    image {
        width : 100%;
        height : 100%;
    }
`;

export {Topbar,NavButton};