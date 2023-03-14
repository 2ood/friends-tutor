import React , {useEffect, useState} from "react";
import * as Component from "components/Components";
import * as Styled from "styles/ComponentStyles";
import right from "img/right.png";
import left from "img/left.png";
import ModularRequest from "util/ModularRequest";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LectureRoomPage(props){
    let [page, setPage] = useState(1);
    
    //const recentLectureData = props.data;
    
    const [trending, setTrending] = useState({}); 
    const [recentLectures, setRecentLectures] = useState([]);
    const total = (Math.floor((recentLectures.length-1)/4)+1);
    const [grade, setGrade] = useState(6);
    const notify = (content)=> toast(content);

    useEffect(()=>{
        function readContents(){
            try {
                let m1 = new ModularRequest({
                    "path" : `course/trending?grade=${grade}`,
                    "method" : "get",
                    "headers" : {
                        "Authorization" : `Bearer ${localStorage.getItem('login-token')}`,
                        "Content-Type": 'application/json',
                    }
                });
                  
                m1.send().then((res)=>{
                    if(res.status=== 200) {
                       setTrending(res.data.details);
                    } else {
                        notify("there was an error in reading trendings!");
                    }
                  }
                );
            
                let m2 = new ModularRequest({
                    "path" : `course/recent?grade=${grade}&number=16`,
                    "method" : "get",
                    "headers" : {
                        "Authorization" : `Bearer ${localStorage.getItem('login-token')}`,
                        "Content-Type": 'application/json',
                    }
                });
                  
                m2.send().then((res)=>{
                    if(res.status=== 200) {
                       setRecentLectures(res.data.details)
                       //console.log(recentLectures);
                    } else {
                        notify("there was an error in adding lecture!");
                    }
                  }
                );
            } catch (e) {
                console.log("error in reading trendings");
                console.error(e.message);
            }
        }
        readContents();
    },[])
    
        
    function handlePageShiftClick(toLeft){
        //offset is the number of offset that is needed to move to page {offset}.
        //there are 4 lectures each in a page, 
        //so there are ({length}/4 + 1) when length%4!=0, or ({length}/4) pages in total.
        //in page 1, offset is 0
        //in page 2, offset is -1 = -{page}+1 
        if(toLeft){
            if(page>1) setPage(--page);
        }
        else {
            if(page<total) setPage(++page);
        }
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
        <Styled.MainBodyFrame gap="10px">
            <Styled.UnderlinedTitle align="center">Best Lecture</Styled.UnderlinedTitle>
            <Component.LectureBox src={trending}></Component.LectureBox>
            <Styled.UnderlinedTitle>Recent Videos</Styled.UnderlinedTitle>
            <Styled.LectureGroupScrollWrapper>
                <Styled.LectureGroup offset={-page+1}>
                    {recentLectures.map((dat)=><Component.LectureBox src={dat} width="calc(40vw - 5px)"></Component.LectureBox>)}
                </Styled.LectureGroup>
            </Styled.LectureGroupScrollWrapper>
            <Styled.Buttongroup>
                <img alt="left" src={left} onClick={()=>{handlePageShiftClick(true);}}/>
                <span>{page}/{total}</span>
                <img alt="right" src={right} onClick={()=>{handlePageShiftClick(false);}}/>
            </Styled.Buttongroup>
            <Styled.ThemedButton size="50px">Upload Lecture</Styled.ThemedButton>
        </Styled.MainBodyFrame>
        
    </>);
}

export {LectureRoomPage};