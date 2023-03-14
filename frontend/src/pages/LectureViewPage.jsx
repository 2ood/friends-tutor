import React ,{useState, useEffect} from "react";
import * as Component from "components/Components";
import * as Styled from "styles/ComponentStyles";
import { useParams } from 'react-router-dom';
import ModularRequest from "util/ModularRequest";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function LectureViewPage(props){
    const { id } = useParams();
    const [lectureData, setLectureData] = useState({});
    const notify = (content)=> toast(content);
    
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
                        notify("there was an error in reading certificate data!");
                    }
                  }
                );
            
            } catch (e) {
                console.log("error in reading certificate data");
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
            <Styled.ThemedTitle>{lectureData.title}</Styled.ThemedTitle>
            <Styled.ThemedButton size="100%" theme="secondary" href={lectureData.drive_link} onClick={handleUrlButton}>🔗check notes!</Styled.ThemedButton>
            <Component.LecturePlayer video_id={lectureData.video_id}></Component.LecturePlayer>
            <Styled.ThemedTextBlock size="100%" placeholder="Enter an explanation">{lectureData.description}</Styled.ThemedTextBlock>
            <Styled.ThemedButton size="100%" theme="secondary" href={lectureData.videoSubs??"video subs"}>🔗Check video subtitles here!</Styled.ThemedButton>
            <Styled.Buttongroup>
                <Styled.ThemedButton size="10px" theme="primary" onClick={handleLikeClick}>like {lectureData.likes} 👍</Styled.ThemedButton>
                <Styled.ThemedButton size="10px" theme="accent">close</Styled.ThemedButton>
            </Styled.Buttongroup>
        </Styled.MainBodyFrame>
    </>);
}

export {LectureViewPage};
