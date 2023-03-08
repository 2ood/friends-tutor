import React, {useState, useRef} from "react";
import * as Component from "components/Components";
import * as Styled from "styles/ComponentStyles";



function LectureUploadPage(){

    const titleRef = useRef();
    const [note, setNote] = useState("");
    const [video, setVideo] = useState("");
    const [desc, setDesc] = useState("");
    

    function handleSubmit(){
        let json = {
            "title" : titleRef.current.value,
            "note" : note,
            "video" : video,
            "desc" : desc
        };
        console.log(json);
    }

    function handleCancel(){
        
    }

    return (<>
        <Component.Topbar />
        <Styled.MainBodyFrame gap="30px">
            <Styled.ThemedTitle>Upload Lecture</Styled.ThemedTitle>
            <Component.HorizontalInput type="text" placeholder="Enter your title" label="Title" ref={titleRef}></Component.HorizontalInput>
            <Component.HorizontalInput type="url" placeholder="Enter a google drive link" label="Note" onChange={e=>{setNote(e.target.value)}}></Component.HorizontalInput>
            <Component.HorizontalInput type="url" placeholder="Enter a youtube link" label="Video" onChange={e=>{setVideo(e.target.value)}}></Component.HorizontalInput>
            <Styled.ThemedTextarea size="100%" placeholder="Enter an explanation" defaultvalue="" onChange={e=>{setDesc(e.target.value)}}></Styled.ThemedTextarea>
            <Styled.Buttongroup>
                <Styled.ThemedButton size="10px" theme="primary" onClick={handleSubmit}>submit</Styled.ThemedButton>
                <Styled.ThemedButton size="10px" theme="accent" onClick={handleCancel}>cancel</Styled.ThemedButton>
                
            </Styled.Buttongroup>
            <Styled.ThemedButton size="50px" theme="secondary">Check the video subtitles here! 🔽</Styled.ThemedButton>
        </Styled.MainBodyFrame>
    </>);
}

export {LectureUploadPage};