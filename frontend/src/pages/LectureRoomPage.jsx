import React , {useState} from "react";
import * as Component from "components/Components";
import * as Styled from "styles/ComponentStyles";
import right from "img/right.png";
import left from "img/left.png";



function LectureRoomPage(props){
    let [offset, setOffset] = useState(0);

    function handlePageShiftClick(toLeft){
        if(toLeft){
            if(offset<0) setOffset(++offset);
        }
        else {
            if(offset>-2) setOffset(--offset);
        }
    }

    return (<>
        <Component.Topbar />
        <Styled.MainBodyFrame gap="10px">
            <Styled.UnderlinedTitle align="center">Best Lecture</Styled.UnderlinedTitle>
            <Component.LectureBox src={props.src??"https://www.youtube.com/embed/P1ww1IXRfTA"}></Component.LectureBox>
            <Styled.UnderlinedTitle>Recent Videos</Styled.UnderlinedTitle>
            <Styled.LectureGroupScrollWrapper>
                <Styled.LectureGroup offset={offset}>
                    <Component.LectureBox data={props.data1} width="calc(40vw - 5px)"></Component.LectureBox>
                    <Component.LectureBox data={props.data2} width="calc(40vw - 5px)"></Component.LectureBox>
                    <Component.LectureBox data={props.data3} width="calc(40vw - 5px)" ></Component.LectureBox>
                    <Component.LectureBox data={props.data4} width="calc(40vw - 5px)"></Component.LectureBox>
                    <Component.LectureBox data={props.data3} width="calc(40vw - 5px)" ></Component.LectureBox>
                    <Component.LectureBox data={props.data4} width="calc(40vw - 5px)"></Component.LectureBox>
                    <Component.LectureBox data={props.data3} width="calc(40vw - 5px)" ></Component.LectureBox>
                    <Component.LectureBox data={props.data4} width="calc(40vw - 5px)"></Component.LectureBox>
                </Styled.LectureGroup>
            </Styled.LectureGroupScrollWrapper>
            <Styled.Buttongroup>
                <img alt="left" src={left} onClick={()=>{handlePageShiftClick(true);}}/>
                <img alt="right" src={right} onClick={()=>{handlePageShiftClick(false);}}/>
            </Styled.Buttongroup>
            <Styled.ThemedButton size="50px">Upload Lecture</Styled.ThemedButton>
        </Styled.MainBodyFrame>
        
    </>);
}

export {LectureRoomPage};