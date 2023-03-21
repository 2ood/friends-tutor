import React ,{useState, useEffect} from "react";
import * as Component from "components/Components";
import * as Styled from "styles/ComponentStyles";
import { useParams } from 'react-router-dom';
import ModularRequest from "util/ModularRequest";
import { toast } from 'react-toastify';
import { useAtom } from "jotai";
import { LanguageChangeAtom } from "util/atom";


function LectureViewPage(props){
    const { id } = useParams();
    const [lectureData, setLectureData] = useState({});
    const notify = (content)=> toast(content);

    const [LanguageChange,setLanguageChange] = useAtom(LanguageChangeAtom);
    var checknotes="🔗check notes!";
    var checksub = "🔗Check video subtitles here!";
    var like="like";
    var close="close";
    if(LanguageChange===0){
        checknotes="🔗check notes!";
        checksub = "🔗Check video subtitles here!";
        like="like";
        close="close";
    }
    else if(LanguageChange===1){
        
        checknotes="🔗과제 자료 확인하기";
        checksub = "🔗영상 자막 확인하기";
        like="추천";
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

    function handleLikeClick() {

    }

    function handleUrlButton(evt) {
        console.log(evt.target.getAttribute("href"));
        window.location.href= evt.target.getAttribute("href");
    }

    return (<>
        <Component.ThemedToast/>  
        <Component.Topbar />
        <Styled.MainBodyFrame gap="30px">
            <Styled.ThemedTitle>{lectureData.title}</Styled.ThemedTitle>
            <Styled.ThemedButton size="100%" theme="secondary" href={lectureData.drive_link} onClick={handleUrlButton}>{checknotes}</Styled.ThemedButton>
            <Component.LecturePlayer video_id={lectureData.video_id}></Component.LecturePlayer>
            <Styled.ThemedTextBlock size="100%" placeholder="Enter an explanation">{lectureData.description}</Styled.ThemedTextBlock>
            <Styled.ThemedButton size="100%" theme="secondary" href={lectureData.videoSubs??"video subs"}>{checksub}</Styled.ThemedButton>
            <Styled.Buttongroup>
                <Styled.ThemedButton size="10px" theme="primary" onClick={handleLikeClick}>{like} {lectureData.likes} 👍</Styled.ThemedButton>
                <Styled.ThemedButton size="10px" theme="accent">{close}</Styled.ThemedButton>
            </Styled.Buttongroup>
        </Styled.MainBodyFrame>
    </>);
}

export {LectureViewPage};
