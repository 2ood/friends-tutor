import React ,{useState, useEffect} from "react";
import * as Component from "components/Components";
import * as Styled from "styles/ComponentStyles";
import { useNavigate, useParams } from 'react-router-dom';
import ModularRequest from "util/ModularRequest";
import { toast } from 'react-toastify';
import { useAtom } from "jotai";
import { LanguageChangeAtom } from "util/atom";
import { auth_headers } from "util/Enums";



function LectureViewPage(props){
    const { id } = useParams();
    const [lectureData, setLectureData] = useState({});
    const [likeNum, setLikeNum] = useState(0);
    const notify = (content)=> toast(content);
    const [isLiked, setIsLiked] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate();

    const [LanguageChange,setLanguageChange] = useAtom(LanguageChangeAtom);
    var checknotes="🔗check notes!";
    var like="like ";
    var close="close";
    if(LanguageChange===0){
        checknotes="🔗check notes!";
        like="like ";
        close="close";
    }
    else if(LanguageChange===1){
        
        checknotes="🔗과제 자료 확인하기";
        like="추천 ";
        close="닫기";
    }
    
    useEffect(()=>{
        function readContents(){
            try {
                let m1 = new ModularRequest({
                    "path" : `course/${id}`,
                    "method" : "get",
                    "headers" : auth_headers
                });
                  
                m1.send().then((res)=>{
                    if(res.status=== 200) {
                        setLectureData(res.data.details);
                        setLikeNum(res.data.details.likes);
                        setIsLiked(res.data.details.is_liked);
                        setIsLoaded(true);
                    } else {notify("there was an error in reading lecture data!");}
                  });
            } catch (e) {
                console.log("error in reading lecture data");
                console.error(e.message);
            }
        }
        readContents();
    },[id])

    function handleLikeClick() {

        try {
            let m1 = new ModularRequest({
                "path" : `course/like/${id}`,
                "method" : "get",
                "headers" : auth_headers
            });
              
            m1.send().then((res)=>{
                if(res.status=== 200) {
                    if(res.data.details) setLikeNum(likeNum+1);
                    else setLikeNum(likeNum-1);

                    setIsLiked(res.data.details);
                    setIsLoaded(true);
                } else { notify("there was an error in posting a like!");}
              });
        
        } catch (e) {
            console.log("error in posting a like");
            console.error(e.message);
        }
    }

    function handleUrlButton(evt) {
        window.location.href= evt.target.getAttribute("href");
    }

    return (<>
        <Component.ThemedToast/>  
        <Component.Topbar />
        <Styled.MainBodyFrame gap="30px">
            {isLoaded && <>
                <Styled.ThemedTitle>{lectureData.title}</Styled.ThemedTitle>
                <Component.LecturePlayer video_id={lectureData.video_id}></Component.LecturePlayer>
                <Styled.ThemedTextBlock size="100%" placeholder="Enter an explanation">{lectureData.description}</Styled.ThemedTextBlock>
                <Styled.ThemedButton size="100%" theme="secondary" href={lectureData.drive_link} onClick={handleUrlButton}>{checknotes}</Styled.ThemedButton>
                <Styled.Buttongroup>
                    <Styled.ThemedButton key={isLiked} size="10px" theme="primary" onClick={handleLikeClick}>{like} {likeNum} <Component.LikeEmoji isLiked={isLiked}/></Styled.ThemedButton>
                    <Styled.ThemedButton size="10px" theme="accent" onClick={()=>{navigate(-1);}}>{close}</Styled.ThemedButton>
                </Styled.Buttongroup>
            </>
            }
        </Styled.MainBodyFrame>
    </>);
}

export {LectureViewPage};
