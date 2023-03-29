import React, {useState} from "react";
import * as Component from "components/Components";
import { useNavigate } from 'react-router-dom';
import * as Styled from "styles/ComponentStyles";
import ModularRequest from "util/ModularRequest";
import {toast } from 'react-toastify';
import { useAtom } from "jotai";
import { LanguageChangeAtom } from "util/atom";
import { FE_PATH } from "util/Enums";


function LectureUploadPage(props){
    const [title, setTitle] = useState("");
    const [drive, setDrive] = useState("");
    const [video, setVideo] = useState("");
    const [desc, setDesc] = useState("");
    const [grade, setGrade] = useState(props.grade);
    const [subject, setSubject] = useState("math");
    
    const notify = (content)=> toast(content);
    const navigate = useNavigate();

    let titleState = _state(title,setTitle);
    let gradeState = _state(grade,setGrade);
    let driveState = _state(drive,setDrive);
    let videoState = _state(video,setVideo);
    let subjectState = _state(subject,setSubject);
    const [LanguageChange,setLanguageChange] = useAtom(LanguageChangeAtom); // eslint-disable-line no-unused-vars


    function _state(target,set){
        return {
            target : target,
            set : (newInput)=>{set(newInput)}
        };
    }
   
    async function handleSubmit(){
        let json = {
            "grade" : grade,
            "subject" : subject,
            "title" : title,
            "description" : desc,
            "drive_link" : drive,
            "video_link" : video
        };
        try {
            let m1 = new ModularRequest({
                "path" : "course",
                "method" : "post",
                "headers" : {
                    "Authorization" : `Bearer ${localStorage.getItem('login-token')}`,
                    "Content-Type": 'application/json;charset=UTF-8;',
                },
                "body" : json
            });
              
            m1.send().then((res)=>{
                if(res.status=== 200) {
                    notify("successfully added a lecture!");
                    setTimeout(()=>{navigate(`${FE_PATH.course.list}?grade=${grade}`);},2000);
                } else {
                    notify("there was an error in adding lecture!");
                }
              }
            );
        } catch(e) {
            notify("unknown error occured in uploading lecture");
        }
        
    }


    var UploadLecture = "UploadLecture";
    var submit = "submit";
    var cancel = "cancel";
    if (LanguageChange===0){
        UploadLecture = "Upload Lecture";
        submit = "submit";
        cancel = "cancel";
    }
    else if (LanguageChange===1){
        UploadLecture = "강의글 작성";
        submit = "등록";
        cancel="취소";
    }
    return (<>
        <Component.ThemedToast/>  
        <Component.Topbar />
        <Styled.MainBodyFrame gap="30px">
            <Styled.ThemedTitle>{UploadLecture}</Styled.ThemedTitle>
            <Component.HorizontalInput type="text" placeholder="Enter your title" label="Title" contents={titleState}></Component.HorizontalInput>
            <Component.GradeSelect contents={gradeState}></Component.GradeSelect>
            <Component.HorizontalInput type="text" placeholder="Enter a subject" label="subject" contents={subjectState}></Component.HorizontalInput>
            <Component.HorizontalInput type="url" placeholder="Enter a google drive link" label="Docs" contents={driveState}></Component.HorizontalInput>
            <Component.HorizontalInput type="url" placeholder="Enter a youtube link" label="Video" contents={videoState}></Component.HorizontalInput>
            <Styled.ThemedTextarea size="100%" placeholder="Enter an explanation" defaultvalue="" value={desc} onChange={e=>{setDesc(e.target.value)}}></Styled.ThemedTextarea>
            <Styled.Buttongroup>
                <Styled.ThemedButton size="10px" theme="primary" onClick={handleSubmit}>{submit}</Styled.ThemedButton>
                <Styled.ThemedButton size="10px" theme="accent" onClick={()=>{navigate(-1);}}>{cancel}</Styled.ThemedButton>
            </Styled.Buttongroup>
        </Styled.MainBodyFrame>
    </>);
}

export {LectureUploadPage};