import styled from "styled-components";
import "styles/style.bootstrap.css";

const LectureBoxFrame = styled.div`
    display : inline-flex;
    width : ${(props) => ((props.width)??"100%")};
    aspect-ratio : 4/3;
    flex-direction : column;
    gap : 5px;

    img {
        display : inline-block;
        width : 100%;
        aspect-ratio : 16/9;
        object-fit : cover;
    }
`;

const LectureTitle = styled.div`
    font-size : var(--font-size-h3);
`;
const LectureDescBox = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
`;

const Lecturer = styled.span`
    font-size : var(--font-size-p);
`;

const LectureLikes = styled.span`
    font-size : var(--font-size-p);
    color : var(--accent-color);
`



export {LectureBoxFrame, LectureTitle, LectureDescBox, Lecturer, LectureLikes};