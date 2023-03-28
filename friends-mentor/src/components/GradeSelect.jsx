import React from "react";
import * as Styled from "styles/ComponentStyles";
import { useAtom } from "jotai";
import { LanguageChangeAtom } from "util/atom";

function GradeSelect(props){
    const [LanguageChange,setLanguageChange] = useAtom(LanguageChangeAtom); // eslint-disable-line no-unused-vars
    var four = "🖼️4th grade";
    var five =  "🖼️5th grade";
    var six = "🖼️6th grade";
    var seven = "📙7th grade";
    var eight = "📙8th grade";
    var nine = "📙9th grade";
    var ten = "📚10th grade";
    var eleven = "📚11th grade";
    var twelve = "📚12th grade";
    if (LanguageChange===0){
        four = "🖼️4th grade";
        five =  "🖼️5th grade";
        six = "🖼️6th grade";
        seven = "📙7th grade";
        eight = "📙8th grade";
        nine = "📙9th grade";
        ten = "📚10th grade";
        eleven = "📚11th grade";
        twelve = "📚12th grade";

    }
    else if (LanguageChange===1){
        four = "🖼️초등학교 4학년";
        five =  "🖼️초등학교 5학년";
        six = "🖼️초등학교 6학년";
        seven = "📙중학교 1학년";
        eight = "📙중학교 2학년";
        nine = "📙중학교 3학년";
        ten = "📚고등학교 1학년";
        eleven = "📚고등학교 2학년";
        twelve = "📚고등학교 3학년";
    }
    return (<>
    <Styled.GradeSelect name="choice" value={props.contents.target} onChange={(e)=>{props.contents.set(e.target.value);}}>
            <option default value="" disabled > Enter your grade </option>
            <option value="4">{four}</option>
            <option value="5">{five}</option>
            <option value="6">{six}</option>
            <option value="7">{seven}</option>
            <option value="8">{eight}</option>
            <option value="9">{nine}</option>
            <option value="10">{ten}</option>
            <option value="11">{eleven}</option>
            <option value="12">{twelve}</option>
        </Styled.GradeSelect> 
    </>
        
    );
}

export default GradeSelect;

