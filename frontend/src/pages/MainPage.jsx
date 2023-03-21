import mainlogo from "img/mainlogo.png";
import React from "react";
import HorizonLine from "styles/styled-components/HorizontalLine";
import { useNavigate } from 'react-router';
import {FE_PATH} from "util/Enums";
import { useAtom } from "jotai";
import { LanguageChangeAtom } from "util/atom";

function MainPage() {
    const [LanguageChange,setLanguageChange] = useAtom(LanguageChangeAtom); // eslint-disable-line no-unused-vars
    //console.log(LanguageChange);
    const navigate = useNavigate();
 
    const navigateToSignIn = () => {
    navigate(FE_PATH.auth.signin);
    };

    const navigateToSignUp = () => {
        navigate(FE_PATH.auth.signup);
        };

    var Friends="Friends";
    var Tutor="Tutor";
    var Meet="Meet my friends tutors!";
    var Signin="Sign in";
    var Signup="Sign up";
    if (LanguageChange===0){

     Friends="Friends";
     Tutor="Tutor";
     Meet="Meet my friends tutors!";
     Signin="Sign in";
     Signup="Sign up";
    }
    else if(LanguageChange===1){
        Friends="또래";
        Tutor="멘토";
        Meet="나의 또래 멘토를 만나보세요";
        Signin="아이디로 로그인";
        Signup="회원가입";
    };

    return (
        <div className="Main"
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            minHeight:"100vh",
            minWidth: "100vw",
            padding:"0px 40px"
          }}>
            <div>
                <img style={{ width:'300px'}} src={mainlogo} alt = "" />
                <p
                style={{
                margin: "-15px 0px 40px 0px",
                lineHeight: "20px",
                fontSize: "43px",
                fontWeight: "bold",
                fontFamily: "Neverland",
                color: "#787878"
                }}>{Friends}</p>
                <p
                style={{
                margin: "31px 0px 50px 0px",
                lineHeight: "20px",
                fontSize: "43px",
                fontFamily: "Neverland",
                fontWeight: "bold",
                color: "#40A7D7"
                }}>{Tutor}</p>
                <p
                style={{
                margin: "31px 0px 50px 0px",
                lineHeight: "20px",
                fontSize: "18px",
                fontFamily: "Gulim",
                fontWeight: "bold",
                color: "#787878"
                }}>{Meet}</p>
            </div>
            <HorizonLine/>
            <div>
                <button onClick={navigateToSignIn}           
                style={{
                    border: "2px solid white",
                    width: "250px",
                    height: "50px",
                    borderRadius: "20px",
                    margin: "55px 10px 10px 10px",
                    backgroundColor: "#40A7D7",
                    color: "#ffffff",
                    fontSize: "16px",
                    fontFamily: "Gulim",
                    fontWeight: "bold",
                }}> {Signin} </button>
            </div>
            <div>
                <button onClick={navigateToSignUp}           
                style={{
                    border: "1.1px solid #787878",
                    width: "250px",
                    height: "50px",
                    borderRadius: "20px",
                    borderColor: "#787878",
                    margin: "10px 10px 10px 10px",
                    backgroundColor: "#ffffff",
                    color: "#787878",
                    fontSize: "16px",
                    fontFamily: "Gulim",
                    fontWeight: "bold",
                }}> {Signup} </button>
            </div>
        </div>
    );
};
export {MainPage};