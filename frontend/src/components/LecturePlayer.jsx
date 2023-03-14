import * as Styled from "styles/ComponentStyles";

function LecturePlayer(props){
    const src = `https://www.youtube.com/embed/${props.video_id}`;
    return (
        <Styled.LecturePlayer src={src} title="Youtube Video Player" allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></Styled.LecturePlayer>
    )
}

export default LecturePlayer;
