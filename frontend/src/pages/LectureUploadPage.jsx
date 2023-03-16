import React, {useState, useRef} from "react";
import * as Component from "components/Components";
import { useNavigate } from 'react-router-dom';
import * as Styled from "styles/ComponentStyles";
import ModularRequest from "util/ModularRequest";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAtom } from "jotai";
import { LanguageChangeAtom } from "util/atom";


function LectureUploadPage(){
    const [title, setTitle] = useState("sample title");
    const [drive, setDrive] = useState("https://docs.google.com/document/d/1FDiOtarp23gDd8WCT_BvjiY31Jj3DqVkg1lQvE768-A/edit");
    const [video, setVideo] = useState("v=123456789012");
    const [desc, setDesc] = useState("sample description");
    const [grade, setGrade] = useState(6);
    const [subject, setSubject] = useState("math");
    const notify = (content)=> toast(content);

    const [LanguageChange,setLanguageChange] = useAtom(LanguageChangeAtom);


    let titleState = {
        target : title,
        set : (newInput)=>{setTitle(newInput)}
    };

    let gradeState = {
        target : grade,
        set : (newInput)=>{setGrade(newInput)}
    };

    let driveState = {
        target : drive,
        set : (newInput)=>{setDrive(newInput)}
    }

    let videoState = {
        target : video,
        set : (newInput)=>{setVideo(newInput)}
    };


    let subjectState = {
        target : subject,
        set : (newInput)=>{setSubject(newInput)}
    };

    const navigate = useNavigate();

    async function handleSubmit(){
        let json = {
            "grade" : grade,
            "subject" : subject,
            "title" : title,
            "description" : desc,
            "drive_link" : drive,
            "video_link" : video
        };
        console.log(json);
        try {
            let m1 = new ModularRequest({
                "path" : "course",
                "method" : "post",
                "headers" : {
                    "Authorization" : `Bearer ${localStorage.getItem('login-token')}`,
                    "Content-Type": 'application/json',
                },
                "body" : json
            });
              
            m1.send().then((res)=>{
                if(res.status=== 200) {
                    notify("successfully added a lecture!");
                } else {
                    notify("there was an error in adding lecture!");
                }
              }
            );
        } catch(e) {
            console.log(e.message);
        }
        
    }

    function handleCancel(){
        navigate(-1);
    }

    return (<>
        <ToastContainer
                position="bottom-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
        />  
        <Component.Topbar />
        <Styled.MainBodyFrame gap="30px">
            <Styled.ThemedTitle>Upload Lecture</Styled.ThemedTitle>
            <Component.HorizontalInput type="text" placeholder="Enter your title" label="Title" contents={titleState}></Component.HorizontalInput>
            <Component.GradeSelect contents={gradeState}></Component.GradeSelect>
            <Component.HorizontalInput type="url" placeholder="Enter a subject" label="subject" contents={subjectState}></Component.HorizontalInput>
            <Component.HorizontalInput type="url" placeholder="Enter a google drive link" label="Note" contents={driveState}></Component.HorizontalInput>
            <Component.HorizontalInput type="url" placeholder="Enter a youtube link" label="Video" contents={videoState}></Component.HorizontalInput>
            <Styled.ThemedTextarea size="100%" placeholder="Enter an explanation" defaultvalue="" value={desc} onChange={e=>{setDesc(e.target.value)}}></Styled.ThemedTextarea>
            <Styled.Buttongroup>
                <Styled.ThemedButton size="10px" theme="primary" onClick={handleSubmit}>submit</Styled.ThemedButton>
                <Styled.ThemedButton size="10px" theme="accent" onClick={handleCancel}>cancel</Styled.ThemedButton>
                
            </Styled.Buttongroup>
            <Styled.ThemedButton size="50px" theme="secondary">Check the video subtitles here! 🔽</Styled.ThemedButton>
        </Styled.MainBodyFrame>
    </>);
}

export {LectureUploadPage};