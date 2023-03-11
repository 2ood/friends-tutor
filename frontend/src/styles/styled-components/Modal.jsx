//Modal.js

import React from "react";
import styled from "styled-components";
import { ModalTitle } from "./ModalTitle";
import { ThemedTitle } from "./ThemedTitle.style";
import { ThemedButton } from "./ThemedButton.style";
import { ModalText } from "./Modaltext";
import ModalPortal from "util/modalPortal";
import { useEffect, useState } from "react";


const Modal = ({ onClose}) => {
  const handleClose = () => {
    onClose?.();
  };
  return (
<Background>
          <Content>
          <ModalTitle>
        ⚠인증서 발급 오류⚠
        </ModalTitle>
        <ModalText>아직 10점이 부족해요!</ModalText>
        <ModalText>조금만 더 힘을 내볼까요?</ModalText>
            <ThemedButton onClick={handleClose}>확인</ThemedButton>
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