import React from "react";
import * as Component from "components/Components";
import * as Styled from "styles/ComponentStyles";
import { useAtom } from "jotai";
import { LanguageChangeAtom } from "util/atom";


function LectureViewPage(props){
    const [LanguageChange,setLanguageChange] = useAtom(LanguageChangeAtom);
    var checknotes="🔗check notes!";
    var checksub = "🔗Check video subtitles here!";
    var like="like 👍";
    var close="close";
    if(LanguageChange===0){
        checknotes="🔗check notes!";
        checksub = "🔗Check video subtitles here!";
        like="like 👍";
        close="close";
    }
    else if(LanguageChange===1){
        
        checknotes="🔗과제 자료 확인하기";
        checksub = "🔗영상 자막 확인하기";
        like="추천👍";
        close="닫기❌";
    }
    return (<>
        <Component.Topbar />
        <Styled.MainBodyFrame gap="30px">
            <Styled.ThemedTitle>{props.title??"Lecture title goes here"}</Styled.ThemedTitle>
            <Styled.ThemedButton size="100%" theme="secondary" href={props.notesUrl}>{checknotes}</Styled.ThemedButton>
            <Component.LecturePlayer src={props.src??"https://www.youtube.com/embed/P1ww1IXRfTA"}></Component.LecturePlayer>
            <Styled.ThemedTextarea size="100%" placeholder="Enter an explanation">{props.note??"Note goes here"}</Styled.ThemedTextarea>
            <Styled.ThemedButton size="100%" theme="secondary" href={props.videoSubs}>{checksub}</Styled.ThemedButton>
            <Styled.Buttongroup>
                <Styled.ThemedButton size="10px" theme="primary">{like}</Styled.ThemedButton>
                <Styled.ThemedButton size="10px" theme="accent">{close}</Styled.ThemedButton>
            </Styled.Buttongroup>
        </Styled.MainBodyFrame>
    </>);
}

export {LectureViewPage};
