import React, {useState} from "react";
import back from "img/back.png";
import clear from "img/clear.png";
import * as Styled from "styles/ComponentStyles";
import { useNavigate } from 'react-router';
import HorizonLine from "styles/styled-components/HorizontalLine";
import { useAtom } from "jotai";
import { LanguageChangeAtom } from "util/atom";

function SignUpPage() {
    const navigate = useNavigate();
    const [username, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [grade, setGrade] = useState("");
    const [nickName, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [LanguageChange,setLanguageChange] = useAtom(LanguageChangeAtom);


    const navigateToMain = () => {
        navigate("/");
    };
    const onSignUp = () => {
        fetch(`${HOST.address}:${HOST.port}/user/signup`, {
          method: 'POST',
          headers:{
            "Content-Type": 'application/json;charset=UTF-8',
          },
          body: JSON.stringify({
            "username": username,
            "password": password,
            "name" : name,
            "nickName" : nickName,
            "grade" : grade,
            "email" : email
          }),
        })
          .then(response => response.json())
          .then(res => {
            console.log(res);
            if(res.message === 'User logic 관련 예외가 발생했습니다.'){
                alert(res.details)
            }
            else {
                navigateToSignIn();
            }
          });
      };

    const navigateToSignIn = () => {
        if(username !== "" && password !== "" && name !== "" && nickName !== "" && grade !== "" && email!== ""){
            navigate("/sign-in");
        }
        };
    var Signup="Sign up";
    var ID = "ID";
    var Password="Password";
    var Name="Name";
    var Grade="Grade";
    var Enteryourgrade="Enter your Grade";
    var Nickname="Nickname";
    var Email="Email";
    var Submit="Submit";
    if (LanguageChange===0){
        Signup="Sign up";
        ID = "ID";
        Password="Password";
        Name="Name";
        Grade="Grade";
        Enteryourgrade="Enter your Grade";
        Nickname="Nickname";
        Email="Email";
        Submit="Submit";
    }
    /*
    else if (LanguageChange===1){
        Signup="회원 가입";
        ID = "아이디";
        Password="비밀번호";
        Name="이름";
        Grade="학년";
        Enteryourgrade="학년을 선택하세요";
        Nickname="별명을 입력하세요";
        Email="이메일";
        Submit="확인";
    }
    */
    return (  
        <div className="SignIn"
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}>
            <Styled.SignInUpBar>
            <img style={{width:'50px'}} src={back} onClick={navigateToMain} alt="back"/>
            <div style={{color:"#595959", fontSize:"18px", fontFamily:"Gulim", fontWeight:"bold"}}>Sign up</div>
            <img style={{width:'50px'}} src={clear} alt="clear"/>
            </Styled.SignInUpBar>

            <div style={{marginTop:'60px', marginBottom:"20px",marginRight: "130px"}}>
                <label
                style={{
                    fontSize: "18px",
                    fontWeight: "normal",
                    fontFamily : "Gulim",
                    color: "#595959",
  
                }}> {ID} </label>
            </div>
            <div>
            <input
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
            <input
                placeholder="Enter your password"
                type='password'
                value={password}
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
            <div style={{marginTop: '50px',marginBottom: "20px",marginRight: "105px"}}>
                <label
                style={{
                    fontSize: "18px",
                    alignItems: "left",
                    fontWeight: "normal",
                    fontFamily : "Gulim",
                    color: "#595959",
                    
                }}> {Name} </label>
            </div>
            <div>
            <input id = "name"
                placeholder="Enter your name"
                value={name}
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
                    setName(e.target.value);
                }}
                /> 
                <HorizonLine/>
            </div>
            <div style={{marginTop: '50px',marginBottom: "20px",marginRight: "108px"}}>
                <label
                style={{
                    fontSize: "18px",
                    fontWeight: "normal",
                    fontFamily : "Gulim",
                    color: "#595959",
                    textAlign: "left",
                }}> {Grade} </label>
            </div>
            <div>
            <select name="choice" 
                    value={grade}
                    onChange={(e)=>{
                        setGrade(e.target.value);
                    }}
                    style={{
                        outline: "none",
                        borderRadius: "20px",
                        paddingLeft: "15px",
                        fontFamily: "Gulim",
                        color: "#787878",
                        fontSize: "14px",
                        border: "0px",
                        width:'190px',  
                        paddingTop: '7px', 
                        paddingBottom: '7px', }}>

                    <option selected default value="" disabled > {Enteryourgrade}</option>
                    <option value="1">🖼️4th grade(초4)</option>
                    <option value="2">🖼️5th grade(초5)</option>
                    <option value="3">🖼️6th grade(초6)</option>
                    <option value="4">📙7th grade(중1)</option>
                    <option value="5">📙8th grade(중2)</option>
                    <option value="6">📚9th grade(중3)</option>
                    <option value="7">📚10th grade(고1)</option>
                    <option value="8">📚11th grade(고2)</option>
                    <option value="9">📚12th grade(고3)</option>
                    </select>
                <HorizonLine/>
            </div>
            <div style={{marginTop: '50px',marginBottom: "20px",marginRight: "75px"}}>
                <label
                style={{
                    fontSize: "18px",
                    fontWeight: "normal",
                    fontFamily : "Gulim",
                    color: "#595959",
                    
                }}> {Nickname} </label>
            </div>
            <div>
            <input id = "nickname"
                placeholder="Enter your nickname"
                value={nickName}
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
                    setNickname(e.target.value);
                }}
                /> 
                <HorizonLine/>
            </div>
            <div style={{marginTop: '50px',marginBottom: "20px",marginRight: "110px"}}>
                <label
                style={{
                    fontSize: "18px",
                    fontWeight: "normal",
                    fontFamily : "Gulim",
                    color: "#595959",
                    
                }}> {Email} </label>
            </div>
            <div>
            <input id = "email"
                placeholder="Enter your email"
                value={email}
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
                    setEmail(e.target.value);
                }}
                /> 
                <HorizonLine/>
            </div>
            <div>
                <button 
                onClick={onSignUp}       
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
                }}> {Submit} </button>
            </div>
        </div>
    );
};
export {SignUpPage};