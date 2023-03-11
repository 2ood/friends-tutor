import React from "react";
import * as Component from "components/Components";
import * as Styled from "styles/ComponentStyles";
import gohome from "img/gohome.png";
import changeLang from "img/changeLang.png";
import cartificate from "img/cartificateImg.png";
import white from "img/white.png";
import Modal from "styles/styled-components/Modal";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAtom } from "jotai";

import {ModalMessageAtom,ModalDetailsAtom} from "util/atom";
import { useNavigate } from "react-router-dom";
var Message = 0;var Details=0;
function Mypage(props){
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [ModalMessage, setModalMessage] = useAtom(ModalMessageAtom);
  const [ModalDetails, setModalDetails] = useAtom(ModalDetailsAtom);
  const [data, setData] = useState(null);

  const getCheckCertificate = async() => {
    
    const accessToken = localStorage.getItem('login-token');
    const response = await axios.get(`http://34.29.162.137:8080/certificate/check`,{
    headers : {Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => {
        setData(response.data.message);
        console.log(response.data.message);
        console.log(response.data.details);
        Message = response.data.message;
        Details = response.data.details;
        setModalMessage(Message);
        setModalDetails(Details);

      });
      


  }; 

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
    return (<>
        <Component.Topbar />
        <Styled.MainBodyFrame bgcolor="var(--gray4)">
            <Styled.ThemedBox>
                <Styled.MypageTitle>USER INFORMATION</Styled.MypageTitle>
            </Styled.ThemedBox>
            <Styled.ThemedBoxUnder>
                <Styled.MypageName>
                    김산님
                </Styled.MypageName>
                <Styled.MypageGrade>
                    중학교 3학년
                </Styled.MypageGrade>
            </Styled.ThemedBoxUnder>
            <Styled.ThemedBoxRound>
              <Styled.MypageButton onClick={()=>{navigate("/lecture/list")}}>
                <img src={gohome} alt="gohome"></img>
                <Styled.MypageText>Home</Styled.MypageText>
              </Styled.MypageButton>


              <Styled.MypageButton  onClick={onClickButton}>
                <img src={cartificate} alt="cartificate"></img>
                <Styled.MypageText>
                  Certificate
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
              <Styled.MypageButton>
                <img src={changeLang} alt="changeLang"></img>
                <Styled.MypageText>Language</Styled.MypageText>
              </Styled.MypageButton>



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