import React , {useEffect, useState} from "react";
import { useAtom } from "jotai";
import { LanguageChangeAtom } from "util/atom";
import { toast } from 'react-toastify';

import * as Styled from "styles/ComponentStyles";
import * as Component from "components/Components";
import ModularRequest from "util/ModularRequest";
import { auth_headers } from "util/Enums";

function TrendingLecture(props){
    const [LanguageChange,setLanguageChange] = useAtom(LanguageChangeAtom); // eslint-disable-line no-unused-vars
    const [trending, setTrending] = useState({}); 
    const [isEmpty, setIsEmpty] = useState(true);
    const notify = (content)=> toast(content);

    var bestLecture="Best Lecture";
    var emptyTrending="there is no trending lecture to show.";

    if (LanguageChange===0){
        bestLecture="Trending Lecture";
        emptyTrending="there is no trending lecture to show.";
    }
    else if(LanguageChange===1){
        bestLecture="추천수 높은 강의";
        emptyTrending = "추천수 높은 강의가 없습니다.";
    };

    const grade = props.grade;
    
    

    useEffect(()=>{
            try {
                let m1 = new ModularRequest({
                    "path" : `course/trending?grade=${grade}`,
                    "method" : "get",
                    "headers" : auth_headers
                });
                  
                m1.send().then((res)=>{
                    if(res.status=== 200) {
                        setIsEmpty(false);
                       setTrending(res.data.details);
                    } 
                  }
                );
            
            } catch (e) {
                setTrending({});
                notify("error in reading trendings");
            }
    },[grade]);



    return (
        <>
            <Styled.UnderlinedTitle align="center">{bestLecture}</Styled.UnderlinedTitle>
            {(!isEmpty)?<Component.LectureBox src={trending}></Component.LectureBox>:<Styled.EmptyBox width="100%">{emptyTrending}</Styled.EmptyBox>}
        </>
    );
}

export default TrendingLecture;

