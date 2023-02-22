import React from "react";
import * as Component from "components/Components";
import * as Styled from "styles/ComponentStyles";



function TestPage(){
    return (<>
        <Component.Topbar />
        <Styled.MainBodyFrame>
            <Component.VerticalInput type="text" placeholder="type in name" label="name"></Component.VerticalInput>
            <Component.HorizontalInput type="text" placeholder="type in name" label="name"></Component.HorizontalInput>
            <Styled.FullWidthButton theme="primary">Click me</Styled.FullWidthButton>
        </Styled.MainBodyFrame>
    </>);
}

export default TestPage;