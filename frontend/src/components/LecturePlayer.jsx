import * as Styled from "styles/ComponentStyles";

function LecturePlayer(props){
    const title = props.title;
    const src = props.src;
    return (
        <Styled.LecturePlayer src={src} title={title} allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></Styled.LecturePlayer>
    )
}

export default LecturePlayer;
