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


    function handleLectureClick(){
        navigate(`/course/view/${props.src.course_id}`);
    };

    var Likes="Likes";
    if (LanguageChange===0){
        Likes="Likes";
     
    }
    else if(LanguageChange===1){
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
