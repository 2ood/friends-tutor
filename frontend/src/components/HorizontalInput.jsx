import React from "react";
import * as Styled from "styles/ComponentStyles";

function HorizontalInput(props){
    return (
        <Styled.HorizontalInput>
            <label>{props.label}</label>
            <Styled.NoBorderInput type={props.type} placeholder={props.placeholder} value={props.contents.target} onChange= {e=>{props.contents.set(e.target.value)}}/>
        </Styled.HorizontalInput>
    );
}

export default HorizontalInput;

