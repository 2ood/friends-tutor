import { useEffect } from "react";
import * as Styled from "styles/ComponentStyles";
import { useNavigate } from "react-router-dom";
import blackboard from "img/blackboard-compressed.jpg";

import { useAtom } from "jotai";
import { LanguageChangeAtom } from "util/atom";

function LectureBox(props){
    const navigate = useNavigate();
    const videoId = props.src.video_id;
    const imgUrl = props.src.video_id?`http://img.youtube.com/vi/${videoId}/0.jpg`:blackboard;

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

    useEffect(()=>{
        function readContents(){
            try {
                let m1 = new ModularRequest({
                    "path" : `course/${id}`,
                    "method" : "get",
                    "headers" : {
                        "Authorization" : `Bearer ${localStorage.getItem('login-token')}`,
                        "Content-Type": 'application/json;charset=UTF-8;',
                    }
                });
                  
                m1.send().then((res)=>{
                    if(res.status=== 200) {
                        setLectureData(res.data.details);
                    } else {
                        notify("there was an error in reading lecture data!");
                    }
                  }
                );
            
            } catch (e) {
                console.log("error in reading lecture data");
                console.error(e.message);
            }
        }
        readContents();
    },[id])


    function handleUrlButton(evt) {
        console.log(evt.target.getAttribute("href"));
        window.location.href= evt.target.getAttribute("href");
    }


    function handleLectureClick(){
        navigate(`/course/view/${props.src.course_id}`);
    };
    var Likes="Likes";
    if (LanguageChange==0){
        Likes="Likes";
     
    }
    else if(LanguageChange==1){
        Likes="추천";
        
    };
    return (
        <Styled.LectureBoxFrame width={props.width} onClick={handleLectureClick}>
            <img alt="lecture-thumb" src={imgUrl}/>
            <Styled.LectureTitle>{props.src.title}</Styled.LectureTitle>
            <Styled.LectureDescBox>
                <Styled.Lecturer>{props.src.writer??"unknown lecturer"}</Styled.Lecturer>
                <Styled.LectureLikes>{Likes} {props.src.likes??"0"}</Styled.LectureLikes>
            </Styled.LectureDescBox>
        </Styled.LectureBoxFrame>
    );
}

export default LectureBox;
