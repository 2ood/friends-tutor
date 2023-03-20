//Modal.js

import React from "react";
import styled from "styled-components";
import { ModalTitle } from "./ModalTitle";
import { ThemedTitle } from "./ThemedTitle.style";
import { ThemedButton } from "./ThemedButton.style";
import { ModalText } from "./Modaltext";
import ModalPortal from "util/modalPortal";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import {ModalMessageAtom,ModalDetailsAtom} from "util/atom";



const Modal = ({ onClose}) => {
  const [ModalDetails] = useAtom(ModalDetailsAtom);
  const [ModalMessage] = useAtom(ModalMessageAtom);
  const Details = ModalDetails;
  const Message = ModalMessage;
  var TitleText="";
  var ModalText1="";
  var ModalText2="";
  const handleClose = () => {
    onClose?.();
  };
  var MessageText=0;
  
  
  if (Details===0 && Message===0){
    TitleText="🎉Succesfull🎉";
    ModalText1="Check your";
    ModalText2="Certificate!";
    console.log(TitleText);
  }
  else if (Details!==0 && Message===1){
    TitleText="⚠Failed⚠"
    ModalText1=`You need ${Details}pts more!`;
    ModalText2="Give it a try!";
    console.log(TitleText);
  }
  return (
<Background>
          <Content>
          <ModalTitle>
          {TitleText}
        </ModalTitle>
        <ModalText>{ModalText1}</ModalText>
        <ModalText>{ModalText2}</ModalText>
            <ThemedButton onClick={handleClose}>check</ThemedButton>
          </Content>
</Background>
  );
};

export default Modal;

//아래는 styled-components를 통한 스타일링

const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
`;

const Content = styled.div`
  height: 25%;
  width: 65%;
  margin-top: 70px;
  position: relative;
  overflow: scroll;
  background: var(--base-color);
  border : 2px var(--primary-color) solid;
  border-radius: 10%;
`;

