import React from "react";
import * as Component from "components/Components";
import * as Styled from "styles/ComponentStyles";



function TestPage(){
    return (<>
        <Component.Topbar />
        <Styled.MainBodyFrame>
            <Component.VerticalInput type="text" placeholder="type in name" label="name"></Component.VerticalInput>
            <Component.HorizontalInput type="text" placeholder="type in name" label="name"></Component.HorizontalInput>
            <Styled.ThemedButton size="100%" theme="secondary">Click me</Styled.ThemedButton>
        </Styled.MainBodyFrame>
    </>);
}

export default TestPage;