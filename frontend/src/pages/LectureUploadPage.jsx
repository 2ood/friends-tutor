import React from "react";
import * as Component from "components/Components";
import * as Styled from "styles/ComponentStyles";



function LectureUploadPage(){
    return (<>
        <Component.Topbar />
        <Styled.MainBodyFrame gap="30px">
            <Styled.ThemedTitle>Upload Lecture</Styled.ThemedTitle>
            <Component.HorizontalInput type="text" placeholder="Enter your title" label="Title"></Component.HorizontalInput>
            <Component.HorizontalInput type="url" placeholder="Enter a google drive link" label="Note"></Component.HorizontalInput>
            <Component.HorizontalInput type="url" placeholder="Enter a youtube link" label="Video"></Component.HorizontalInput>
            <Styled.ThemedTextarea size="100%" placeholder="Enter an explanation"></Styled.ThemedTextarea>
            <Styled.Buttongroup>
                <Styled.ThemedButton size="10px" theme="primary">submit</Styled.ThemedButton>
                <Styled.ThemedButton size="10px" theme="accent">cancel</Styled.ThemedButton>
            </Styled.Buttongroup>
        </Styled.MainBodyFrame>
    </>);
}

export {LectureUploadPage};