import React , {useEffect, useState} from "react";
import { useAtom } from "jotai";
import { LanguageChangeAtom } from "util/atom";
import { toast } from 'react-toastify';

import * as Styled from "styles/ComponentStyles";
import * as Component from "components/Components";
import ModularRequest from "util/ModularRequest";
import { auth_headers } from "util/Enums";

import right from "img/right.png";
import left from "img/left.png";


function RecentLectures(props){
    const [LanguageChange,setLanguageChange] = useAtom(LanguageChangeAtom);
    const notify = (content)=> toast(content);

    const grade = props.grade;

    const [recentLectures, setRecentLectures] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    let [page, setPage] = useState(1);
    const [isEmpty, setIsEmpty] = useState(true);

    const total = (Math.floor((recentLectures.length-1)/4)+1);

    var RecentVideos="Recent Uploaded";
    var emptyRecent = "there is no empty lecture to show.";
    if (LanguageChange===0){
        RecentVideos="Recently Uploaded";
        emptyRecent = "there is no empty lecture to show.";
    } 
    else if(LanguageChange===1){
        RecentVideos="최근 올라온 강의";
        emptyRecent="최근 강의가 없습니다";
    }

    useEffect(()=>{
        try{
            let m2 = new ModularRequest({
                "path" : `course/recent?grade=${grade}&number=16`,
                "method" : "get",
                "headers" : auth_headers
            });
            
            m2.send().then((res)=>{
                if(res.status=== 200) {
                    setRecentLectures(res.data.details);
                    setIsLoaded(true);
                    setIsEmpty(false);
                } else {
                    setIsEmpty(true);
                    setIsLoaded(true);
                }
            });
        } catch (e) {
            setRecentLectures([]);
            console.log("error in reading trendings");
        }
    },[grade]);

    function handlePageShiftClick(toLeft){
        if(toLeft){ if(page>1) setPage(--page);}
        else { if(page<total) setPage(++page);}
    }


    return (
        <>
            <Styled.UnderlinedTitle>{RecentVideos}</Styled.UnderlinedTitle>
            {isLoaded &&((isEmpty)?<Styled.EmptyBox width="100%">{emptyRecent}</Styled.EmptyBox>:<>
            <Styled.LectureGroupScrollWrapper>
                <Styled.LectureGroup offset={-page+1}>
                    {recentLectures.map((dat)=><Component.LectureBox key={dat.course_id} src={dat} width="calc(40vw - 5px)"></Component.LectureBox>)}
                </Styled.LectureGroup>
            </Styled.LectureGroupScrollWrapper>
            
            <Styled.Buttongroup>
                <img alt="left" src={left} onClick={()=>{handlePageShiftClick(true);}}/>
                <span>{page}/{total}</span>
                <img alt="right" src={right} onClick={()=>{handlePageShiftClick(false);}}/>
            </Styled.Buttongroup>
            </>
            )}
        </>
    );
}

export default RecentLectures;

