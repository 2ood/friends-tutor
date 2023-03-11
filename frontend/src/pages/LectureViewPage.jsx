import React from "react";
import * as Component from "components/Components";
import * as Styled from "styles/ComponentStyles";



function LectureViewPage(props){
    return (<>
        <Component.Topbar />
        <Styled.MainBodyFrame gap="30px">
            <Styled.ThemedTitle>{props.title??"Lecture title goes here"}</Styled.ThemedTitle>
            <Styled.ThemedButton size="100%" theme="secondary" href={props.notesUrl}>🔗check notes!</Styled.ThemedButton>
            <Component.LecturePlayer src={props.src??"https://www.youtube.com/embed/P1ww1IXRfTA"}></Component.LecturePlayer>
            <Styled.ThemedTextarea size="100%" placeholder="Enter an explanation">{props.note??"Note goes here"}</Styled.ThemedTextarea>
            <Styled.ThemedButton size="100%" theme="secondary" href={props.videoSubs}>🔗Check video subtitles here!</Styled.ThemedButton>
            <Styled.Buttongroup>
                <Styled.ThemedButton size="10px" theme="primary">like 👍</Styled.ThemedButton>
                <Styled.ThemedButton size="10px" theme="accent">close</Styled.ThemedButton>
            </Styled.Buttongroup>
        </Styled.MainBodyFrame>
    </>);
}

export {LectureViewPage};
