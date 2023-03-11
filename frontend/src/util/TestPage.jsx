import React from "react";
import * as Component from "components/Components";
import * as Styled from "styles/ComponentStyles";
import { useNavigate } from 'react-router-dom';



function TestPage(){
    const navigate = useNavigate();

    return (<>
        <Component.Topbar />
        <Styled.MainBodyFrame gap="30px">
            <Styled.UnderlinedTitle size="100%" fontSize="h1" align="center">Page Overview</Styled.UnderlinedTitle>

            <Styled.ThemedButton size="100%" theme="secondary" onClick={()=>{navigate("/certificate")}}>Certificate Page</Styled.ThemedButton>
            <Styled.ThemedButton size="100%" theme="secondary" onClick={()=>{navigate("/lecture/upload")}}>Lecture Upload Page</Styled.ThemedButton>
            <Styled.ThemedButton size="100%" theme="secondary" onClick={()=>{navigate("/lecture/view")}}>Lecture View Page</Styled.ThemedButton>
            <Styled.ThemedButton size="100%" theme="secondary" onClick={()=>{navigate("/lecture/list")}}>Lecture Rooms Page</Styled.ThemedButton>
            <Styled.ThemedButton size="100%" theme="secondary" onClick={()=>{navigate("/mypage")}}>Mypage</Styled.ThemedButton>
        </Styled.MainBodyFrame>
    </>);
}

export default TestPage;