import { useEffect } from "react";
import * as Styled from "styles/ComponentStyles";

function LectureBox(props){

    const videoId = props.videoId??"P1ww1IXRfTA";
    const imgUrl = `http://img.youtube.com/vi/${videoId}/0.jpg`;

    useEffect(()=>{
        
    },[]);

    function handleLectureClick(){
        console.log("Lecture box clicked");
    };

    return (
        <Styled.LectureBoxFrame width={props.width} onClick={handleLectureClick}>
            <img alt="lecture-thumb" src={imgUrl}/>
            <Styled.LectureTitle>{props.title??"Lecture Title"}</Styled.LectureTitle>
            <Styled.LectureDescBox>
                <Styled.Lecturer>{props.lecturer??"Lecturer name"}</Styled.Lecturer>
                <Styled.LectureLikes>Likes {props.likes??"0"}</Styled.LectureLikes>
            </Styled.LectureDescBox>
        </Styled.LectureBoxFrame>
    );
}

export default LectureBox;
