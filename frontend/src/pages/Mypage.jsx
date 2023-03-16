import React from "react";
import * as Component from "components/Components";
import * as Styled from "styles/ComponentStyles";
import gohome from "img/gohome.png";
import changeLang from "img/changeLang.png";
import cartificate from "img/cartificateImg.png";
import white from "img/white.png";
import Modal from "styles/styled-components/Modal";
import Modal2 from "styles/styled-components/Modal2";
import { useState } from "react";
import axios from "axios";
import { useAtom } from "jotai";
import { LanguageChangeAtom } from "util/atom";
import {ModalMessageAtom,ModalDetailsAtom, MypageUserNameAtom, MypageUserGradeAtom} from "util/atom";
import { useNavigate } from "react-router-dom";



var Message=0;var Details=0;
function Mypage(props){
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [ModalMessage, setModalMessage] = useAtom(ModalMessageAtom); //eslint-disable-line no-unused-vars
  const [ModalDetails, setModalDetails] = useAtom(ModalDetailsAtom); //eslint-disable-line no-unused-vars
  const [data, setData] = useState(null); //eslint-disable-line no-unused-vars
  const [MypageUserName, setMypageUserName] = useAtom(MypageUserNameAtom);
  const [MypageUserGrade, setMypageUserGrade] = useAtom(MypageUserGradeAtom);
  const accessToken = localStorage.getItem('login-token');
  const [LanguageChange,setLanguageChange] = useAtom(LanguageChangeAtom); //eslint-disable-line no-unused-vars

  const getCheckCertificate = async() => {
    const response = await axios.get(`http://34.29.162.137:8080/certificate/check`,{ //eslint-disable-line no-unused-vars
    headers : {Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => {
        setData(response.data.message);
        //console.log(response.data.message);
        //console.log(response.data.details);
        Message = response.data.message;
        Details = response.data.details;
        setModalMessage(Message);
        setModalDetails(Details);

      });
  }; 

  const userinfo = async() => {
    const response = await axios.get(`http://34.29.162.137:8080/user/info`,{ //eslint-disable-line no-unused-vars
    headers : {Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => {
        setMypageUserName(response.data.details.name);
        setMypageUserGrade(response.data.details.grade);

      });
  };
  userinfo();
  //console.log(MypageUserName);
  //console.log(MypageUserGrade);
  const onClickButton = () => {
  
    getCheckCertificate().then((result)=>{
      console.log(result);
      if (Message===0 && Details === 0){
        setIsOpen(true);
      }
      else if (Message===1 && Details === 0){
        console.log("0&1");
      }
      else if (Message === 1 && Details !==0){
        setIsOpen(true);
      }
      else if (Message===2 || Details ===2){
        console.log("error");
      }
      
    })   
  };
  const onClickButton2 = () => {
    setIsOpen2(true);

  };
  var userinformation="USER INFORMATION";
  var home="Home";
  var Language="Language";
  var Certificate="Certificate";
  var Grade=`${MypageUserGrade}th grade`;
  if (LanguageChange===0){
    userinformation="USER INFORMATION";
    home="Home";
    Language="Language";
    Certificate="Certificate";
    Grade=`${MypageUserGrade}th grade`;
  }
  else if(LanguageChange===1){
    userinformation="사용자정보";
    home="홈";
    Language="언어설정";
    Certificate="인증서발급";
    if (MypageUserGrade>=1 && MypageUserGrade<=6){
      Grade=`초등학교 ${MypageUserGrade}학년`;
    }
    else if (MypageUserGrade>=7 && MypageUserGrade<=9){
      Grade=`중학교 ${MypageUserGrade-6}학년`;
    }
    else if (MypageUserGrade>=10 &&MypageUserGrade<=12){
      Grade=`고등학교 ${MypageUserGrade-9}학년`;
    };
  };
    return (<>
        <Component.Topbar />
        <Styled.MainBodyFrame bgcolor="var(--gray4)">
            <Styled.ThemedBox>
                <Styled.MypageTitle>{userinformation}</Styled.MypageTitle>
            </Styled.ThemedBox>
            <Styled.ThemedBoxUnder>
                <Styled.MypageName>
                    {MypageUserName}
                </Styled.MypageName>
                <Styled.MypageGrade>
                    {Grade}
                </Styled.MypageGrade>
            </Styled.ThemedBoxUnder>
            <Styled.ThemedBoxRound>
              <Styled.MypageButton onClick={()=>{navigate("/lecture/list")}}>
                <img src={gohome} alt="gohome"></img>
                <Styled.MypageText>{home}</Styled.MypageText>
              </Styled.MypageButton>


              <Styled.MypageButton  onClick={onClickButton}>
                <img src={cartificate} alt="cartificate"></img>
                <Styled.MypageText>
                  {Certificate}
                </Styled.MypageText>
              </Styled.MypageButton>
                    {isOpen && (<Modal
              open={isOpen}
              onClose={() => {
                setIsOpen(false);
                console.log(Message);
                console.log(Details);
                if (Message===0 && Details===0) {
                navigate('/certificate');
              }
                    }}
                  />)}

              <Styled.MypageButton onClick={onClickButton2}>
                <img src={changeLang} alt="changeLang"></img>
                <Styled.MypageText>{Language}</Styled.MypageText>
              </Styled.MypageButton>

              {isOpen2 && (<Modal2
              open={isOpen2}
              onClose={() => {
                setIsOpen2(false);
                    }}
                  />)}

              <Styled.MypageButton> <img src={white} alt="white"></img><Styled.MypageText> </Styled.MypageText></Styled.MypageButton>
              <Styled.MypageButton><img src={white} alt="white"></img><Styled.MypageText> </Styled.MypageText></Styled.MypageButton>
              <Styled.MypageButton><img src={white} alt="white"></img><Styled.MypageText> </Styled.MypageText></Styled.MypageButton>
              <Styled.MypageButton><img src={white} alt="white"></img><Styled.MypageText> </Styled.MypageText></Styled.MypageButton>
              <Styled.MypageButton><img src={white} alt="white"></img><Styled.MypageText> </Styled.MypageText></Styled.MypageButton>
        </Styled.ThemedBoxRound>
        </Styled.MainBodyFrame>
    </>);
}

export {Mypage};