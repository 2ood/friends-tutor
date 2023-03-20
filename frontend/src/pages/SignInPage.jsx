import React, {useState} from "react";
import back from "img/back.png";
import clear from "img/clear.png";
import * as Component from "components/Components";
import * as Styled from "styles/ComponentStyles";
import { useNavigate } from 'react-router';
import HorizonLine from "styles/styled-components/HorizontalLine";
import {FE_PATH, HOST} from "util/Enums";
import { toast } from 'react-toastify';
import { useAtom } from "jotai";
import { LanguageChangeAtom } from "util/atom";

function SignInPage() {
    
    const [username, setuserName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const notify = (content)=> toast(content);
    
    const [LanguageChange,setLanguageChange] = useAtom(LanguageChangeAtom); // eslint-disable-line no-unused-vars

 
    const onSignIn = () => {
        fetch(`${HOST.address}:${HOST.port}/user/login`, {
          method: 'POST',
          headers:{
            "Content-Type": 'application/json;charset=UTF-8',
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        })
          .then(response => response.json())
          .then(res => {
            if (res.accessToken && res.refreshToken) {
                localStorage.setItem('login-token', res.accessToken);
                localStorage.setItem('refresh-token', res.refreshToken);
                navigate(FE_PATH.course.list);
            }
            else {
                res.message === 'User logic 관련 예외가 발생했습니다.'
              ? notify("로그인 정보가 맞지 않습니다.")
              : navigate(FE_PATH.auth.signin);
            }
          });
      };

    const navigateToMain = () => {
        navigate("/");
    };
    var signin="Sign in";
    var ID="ID";
    var Password="Password";
    if (LanguageChange===0){

        signin="Sign in";
        ID="ID";
        Password="Password";
       }
       /*
       else if(LanguageChange==1){
        signin="로그인";
        ID="   아이디";
        Password="비밀번호";
       };*/
    return (  
        <div className="SignIn"
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Component.ThemedToast/>
            <Styled.SignInUpBar>
            <img style={{width:'50px'}} src={back} onClick={navigateToMain} alt="back"/>
            <div style={{color:"#595959", fontSize:"18px", fontFamily:"Gulim", fontWeight:"bold"}}>{signin}</div>
            <img style={{width:'50px'}} src={clear} alt="clear"/>
            </Styled.SignInUpBar>

            <div style={{marginTop: '80px',marginBottom: "20px",marginRight: "130px"}}>
                <label
                style={{
                    outline: "none",
                    fontSize: "18px",
                    fontWeight: "normal",
                    fontFamily : "Gulim",
                    color: "#595959",
                    marginBottom: "20px",
                    
                }}> { ID } </label>
            </div>
            <div>
            <input id = "id"
                placeholder="Enter your id"
                value={username}
                style={{
                    outline: "none",
                    paddingLeft: "15px", 
                    fontSize: "14px", 
                    fontFamily: "Gulim",
                    border: "0px",
                    borderRadius: "20px", 
                    width:'180px',  
                    paddingTop: '8px', 
                    paddingBottom: '8px',
                    }}
                onChange={(e)=>{
                    setuserName(e.target.value);
                }}
                /> 
                <HorizonLine/>
            </div>
            <div style={{marginTop: '50px',marginBottom: "20px",marginRight: "70px"}}>
                <label
                style={{
                    outline: "none",
                    fontSize: "18px",
                    fontWeight: "normal",
                    fontFamily : "Gulim",
                    color: "#595959",
                }}> {Password} </label>
            </div>
            <div>
            <input id = "pwd" 
                placeholder="Enter your password"
                value={password}
                type='password'
                style={{
                    outline: "none",
                    paddingLeft: "15px", 
                    fontSize: "14px", 
                    fontFamily: "Gulim",
                    border: "0px",
                    borderRadius: "20px", 
                    width:'180px',  
                    paddingTop: '8px', 
                    paddingBottom: '8px',
                     }}
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                /> 
                <HorizonLine/>
            </div>
            <div>
                <button  
                onClick={onSignIn}  
                style={{
                    border: "2px solid white",
                    width: "250px",
                    height: "50px",
                    borderRadius: "20px",
                    margin: "10px 10px 10px 10px",
                    backgroundColor: "#40A7D7",
                    color: "#ffffff",
                    fontSize: "16px",
                    fontFamily : "Gulim",
                    fontWeight: "bold",
                    marginTop: '80px',
                }}> {signin} </button>
            </div>
        </div>
    );
};
export {SignInPage};