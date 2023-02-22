import React from "react";
import * as Component from "components/Components";
import * as styled from "styles/ComponentStyles";


function TestPage(){
    return (<>
        <Component.Topbar />
        <styled.MainBodyFrame>
            <Component.VerticalInput type="text" placeholder="type in name" label="name"></Component.VerticalInput>
        </styled.MainBodyFrame>
    </>);
}

export default TestPage;