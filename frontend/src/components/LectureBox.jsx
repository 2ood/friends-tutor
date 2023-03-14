import { useEffect } from "react";
import * as Styled from "styles/ComponentStyles";
import { useNavigate } from "react-router-dom";

function LectureBox(props){
    const navigate = useNavigate();
    const videoId = props.src.video_id??"P1ww1IXRfTA";
    const imgUrl = `http://img.youtube.com/vi/${videoId}/0.jpg`;

    useEffect(()=>{
        
    },[]);

    function handleLectureClick(){
        navigate(`/lecture/view/${props.src.course_id}`);
    };

    return (
        <Styled.LectureBoxFrame width={props.width} onClick={handleLectureClick}>
            <img alt="lecture-thumb" src={imgUrl}/>
            <Styled.LectureTitle>{props.src.title??"Lecture Title"}</Styled.LectureTitle>
            <Styled.LectureDescBox>
                <Styled.Lecturer>{props.src.writer??"Lecturer name"}</Styled.Lecturer>
                <Styled.LectureLikes>Likes {props.src.likes??"0"}</Styled.LectureLikes>
            </Styled.LectureDescBox>
        </Styled.LectureBoxFrame>
    );
}

export default LectureBox;
