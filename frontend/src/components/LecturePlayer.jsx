import * as Styled from "styles/ComponentStyles";
import blackboard from "img/blackboard-compressed.jpg";

function LecturePlayer(props){
    const src = `https://www.youtube.com/embed/${props.video_id}`;
    return (
        props.video_id
        ?<Styled.LecturePlayer src={src} title="Youtube Video Player" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></Styled.LecturePlayer>
        :<img alt="lecture-thumb" src={blackboard}/>
    )
}

export default LecturePlayer;
