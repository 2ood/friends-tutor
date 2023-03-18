import React from "react";
import * as Styled from "styles/ComponentStyles";

function GradeSelect(props){
    return (<>
    <Styled.GradeSelect name="choice" value={props.contents.target} onChange={(e)=>{props.contents.set(e.target.value);}}>
            <option default value="" disabled > Enter your grade </option>
            <option value="4">🖼️초등학교 4학년</option>
            <option value="5">🖼️초등학교 5학년</option>
            <option value="6">🖼️초등학교 6학년</option>
            <option value="7">📙중학교 1학년</option>
            <option value="8">📙중학교 2학년</option>
            <option value="9">📙중학교 3학년</option>
            <option value="10">📚고등학교 1학년</option>
            <option value="11">📚고등학교 2학년</option>
            <option value="12">📚고등학교 3학년</option>
        </Styled.GradeSelect> 
    </>
        
    );
}

export default GradeSelect;

