import React from "react";
import * as Component from "components/Components";
import * as Styled from "styles/ComponentStyles";



function TestPage(){
    return (<>
        <Component.Topbar />
        <Styled.MainBodyFrame gap="30px">
            <Styled.UnderlinedTitle size="100%" fontSize="h1" align="center">UnderlinedTitle</Styled.UnderlinedTitle>
            <Component.VerticalInput type="text" placeholder="type here" label="VerticalInput"></Component.VerticalInput>
            <Component.HorizontalInput type="text" placeholder="type here" label="HorizontalInput"></Component.HorizontalInput>
            <Styled.ThemedButton size="100%" theme="secondary">This is ThemedButton</Styled.ThemedButton>
            <Styled.ThemedTextarea size="100%">This is ThemedTextarea</Styled.ThemedTextarea>
        </Styled.MainBodyFrame>
    </>);
}

export default TestPage;