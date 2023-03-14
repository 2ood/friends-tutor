//Modal.js

import React from "react";
import styled from "styled-components";
import { ModalTitle } from "./ModalTitle";
import { ThemedTitle } from "./ThemedTitle.style";
import { ThemedButton } from "./ThemedButton.style";
import { ModalText } from "./Modaltext";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import * as Styled from "styles/ComponentStyles";
import { LanguageChangeAtom } from "util/atom";

const Modal2 = ({ onClose}) => {
  const [LanguageChange,setLanguageChange] = useAtom(LanguageChangeAtom);
  const handleClose2 = () => {
    onClose?.();
    //console.log("close");
  };
  const LanguageKorea = () =>{
    setLanguageChange(1);
    
    //console.log(LanguageChange);
  };
  const LanguageEnglish = () =>{
    setLanguageChange(0);
    //console.log(LanguageChange);
  };
  return (
<Background>

          <Content>
          <ThemedBoxRound>
          <ModalTitle>Language</ModalTitle>

        <Styled.ThemedButton theme="secondary" onClick={LanguageKorea} >한국어</Styled.ThemedButton>

        <Styled.ThemedButton  theme="secondary" onClick={LanguageEnglish}>English</Styled.ThemedButton>

        <Styled.ThemedButton size="100%" onClick={handleClose2} >check</Styled.ThemedButton>
        </ThemedBoxRound>
          </Content>
          
</Background>
  );
};

export default Modal2;

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

const ThemedBoxRound = styled.div`
    display : inline-grid;

    flex-direction : column;
    justify-content : center;
    text-align : left;
    gap:10px;
    font-size : var(--font-size-h3);
    color: var(--gray3);


`;