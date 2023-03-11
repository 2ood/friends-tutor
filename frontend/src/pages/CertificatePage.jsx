import React from "react";
import * as Component from "components/Components";
import * as Styled from "styles/ComponentStyles";
import { useNavigate } from "react-router-dom";


function CertificatePage(){
    const navigate = useNavigate();
    const content ={
        "name" : "James",
        "title" : "Peer Mentoring",
        "from" : "2023.02.18",
        "until" :"2024.01.01",
        "number_of_lectures" : 10,
        "number_of_referrals" : 30,
        "issued_on" : "2024.01.01"
    };
    return (<>
        <Component.Topbar />
        <Styled.MainBodyFrame>
            <Styled.ThemedTitle>Certificate Issuance</Styled.ThemedTitle>
            <Component.CertificateFrame dat={content}></Component.CertificateFrame>
            <Styled.Buttongroup>
                    <Styled.ThemedButton theme="primary">save</Styled.ThemedButton>
                    <Styled.ThemedButton onClick={()=>{navigate("/mypage")}} theme="accent">close</Styled.ThemedButton>
            </Styled.Buttongroup>
        </Styled.MainBodyFrame>
        
    </>);
}

export {CertificatePage};