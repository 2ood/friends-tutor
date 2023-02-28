import React from "react";
import * as Component from "components/Components";
import * as Styled from "styles/ComponentStyles";



function Mypage(props){
    return (<>
        <Component.Topbar />
        <Styled.MainBodyFrame gap="30px">
            <Styled.ThemedTitle>{props.title??"Lecture title goes here"}</Styled.ThemedTitle>
            
        </Styled.MainBodyFrame>
    </>);
}

export {Mypage};