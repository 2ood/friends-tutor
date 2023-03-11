import React , {useState} from "react";
import * as Component from "components/Components";
import * as Styled from "styles/ComponentStyles";
import right from "img/right.png";
import left from "img/left.png";



function LectureRoomPage(props){
    let [offset, setOffset] = useState(0);
    
    //const recentLectureData = props.data;
    const recentLectureData = Array(17).fill("");
    const length = recentLectureData.length;

        
    function handlePageShiftClick(toLeft){
        //offset is the number of offset that is needed to move to page {offset}.
        //there are 4 lectures each in a page, 
        //so there are ({length}/4 + 1) when length%4!=0, or ({length}/4) pages in total.
        //in page 1, offset is 0
        //in page 2, offset is -1 = -{page}+1 
        if(toLeft){
            if(offset<0) setOffset(++offset);
        }
        else {
            if(offset>-((length-1)/4)+((length%4 ===0)?1:0)) setOffset(--offset);
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
                    {recentLectureData.map((dat)=><Component.LectureBox data={dat} width="calc(40vw - 5px)"></Component.LectureBox>)}
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