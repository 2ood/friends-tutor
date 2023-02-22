import React from "react";
import * as Component from "components/Components";
import * as styled from "styles/ComponentStyles";


function TestPage(){
    return (<>
        <Component.Topbar />
        <styled.MainBodyFrame>
            <Component.VerticalInput type="text" placeholder="type in name" label="name"></Component.VerticalInput>
            <Component.HorizontalInput type="text" placeholder="type in name" label="name"></Component.HorizontalInput>
        </styled.MainBodyFrame>
    </>);
}

export default TestPage;