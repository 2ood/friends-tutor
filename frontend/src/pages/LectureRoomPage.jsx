import React , {useEffect, useState} from "react";
import * as Component from "components/Components";
import * as Styled from "styles/ComponentStyles";
import ModularRequest from "util/ModularRequest";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { FE_PATH } from "util/Enums";
import { useAtom } from "jotai";
import { LanguageChangeAtom } from "util/atom";
import PullToRefresh from 'react-simple-pull-to-refresh';



function LectureRoomPage(){
    const navigate = useNavigate();
    const notify = (content)=> toast(content);
    
    const [grade, setGrade] = useState(6);
    const [LanguageChange,setLanguageChange] = useAtom(LanguageChangeAtom);
    const [isLoaded, setIsLoaded] = useState(false);

    const gradeState = {
        target : grade,
        set : (newInput)=>{
            setGrade(newInput);
        }
    };
    var UploadLecture="Upload Lecture";

    if (LanguageChange===0){ UploadLecture="Upload Lecture";}
    else if(LanguageChange===1){UploadLecture="강의 게시하기";};

    function loadUserInfo(){
        try{
            let m2 = new ModularRequest({
                "path" : `user/info`,
                "method" : "get",
                "headers" : {
                    "Authorization" : `Bearer ${localStorage.getItem('login-token')}`,
                    "Content-Type": 'application/json',
                }
            });
            
            m2.send().then((res)=>{
                if(res.status=== 200) {
                    setGrade(res.data.details.grade);
                    setIsLoaded(true);
                } else {
                    notify("there was an error in reading user info!");
                }
            }
            );
        } catch (e) {
            console.log("there was an error in reading user info");
            console.error(e.message);
        }
    }

    useEffect(()=>{
        loadUserInfo();
    },[]);

    function handleRefresh() {
        
        return new Promise(res => {
            loadUserInfo();
            res();
          });
    }

    return (<>
        <Component.ThemedToast/>   
        <Component.Topbar />
        <PullToRefresh onRefresh={handleRefresh}>
            <Styled.MainBodyFrame gap="10px" key={grade}>
                {isLoaded && <>
                    <Component.GradeSelect contents={gradeState}></Component.GradeSelect>
                    <Component.TrendingLecture  grade={grade}></Component.TrendingLecture>
                    <Component.RecentLectures grade={grade}></Component.RecentLectures>
                    <Styled.ThemedButton size="50px" onClick={()=>{navigate(FE_PATH.course.upload)}}>{UploadLecture}</Styled.ThemedButton>
                </>}
            </Styled.MainBodyFrame>
        </PullToRefresh>
    </>);
}

export {LectureRoomPage};