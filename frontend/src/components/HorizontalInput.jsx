import React, {useState} from "react";
import * as Styled from "styles/ComponentStyles";

function HorizontalInput(props){

    const [value, setValue] = useState("");

    return (
        <Styled.HorizontalInput>
            <label>{props.label}</label>
            <Styled.NoBorderInput type={props.type} placeholder={props.placeholder} value={value} onChange= {e=>{setValue(e.target.value)}}/>
        </Styled.HorizontalInput>
    );
}

export default HorizontalInput;

