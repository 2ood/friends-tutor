import React, {useState} from "react";
import back from "img/back.png";
import clear from "img/clear.png";
import * as Styled from "styles/ComponentStyles";
import { useNavigate } from 'react-router';
import HorizonLine from "util/HorizontalLine";


function SignUpPage() {
    const navigate = useNavigate();
    const [username, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [grade, setGrade] = useState("");
    const [nickName, setNickname] = useState("");
    const [email, setEmail] = useState("");

    const navigateToMain = () => {
    navigate("/");
    };
    const onSignUp = () => {
        fetch('http://34.29.162.137:8080/user/signup', {
          method: 'POST',
          headers:{
            "Content-Type": 'application/json;charset=UTF-8',
          },
          body: JSON.stringify({
            "username": username,
            "password": password,
            "name" : name,
            "nickName" : nickName,
            "grade" : 0,
            "email" : email
          }),
        })
          .then(response => response.json())
          .then(res => {
            console.log(res);
          });
      };

    const navigateToSignIn = () => {
        if(username != "" && password != "" && name != "" && nickName != "" && grade != "" && email!= ""){
            navigate("/sign-in");
        }
        };

    return (  
        <div classname="SignIn"
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}>
            <Styled.SignInUpBar>
            <img style={{width:'50px'}} src={back} onClick={navigateToMain}/>
            <div style={{color:"#595959", fontSize:"18px", fontFamily:"Gulim", fontWeight:"bold"}}>Sign up</div>
            <img style={{width:'50px'}} src={clear}/>
            </Styled.SignInUpBar>

            <div style={{marginTop:'60px', marginBottom:"20px",marginRight: "130px"}}>
                <label
                style={{
                    fontSize: "18px",
                    fontWeight: "normal",
                    fontFamily : "Gulim",
                    color: "#595959",
  
                }}> ID </label>
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
                    paddingTop: '8px', }}
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
                }}> Password </label>
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
                    paddingTop: '8px', }}
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
                    
                }}> Name </label>
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
                    paddingTop: '8px', }}
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
                    fontFamily: "Gulim",
                    textAlign: "left",
                }}> Grade </label>
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

                    <option selected default value="" disabled > Enter your grade </option>
                    <option value="e4">🖼️초등학교 4학년</option>
                    <option value="e5">🖼️초등학교 5학년</option>
                    <option value="e6">🖼️초등학교 6학년</option>
                    <option value="m1">📙중학교 1학년</option>
                    <option value="m2">📙중학교 2학년</option>
                    <option value="m3">📙중학교 3학년</option>
                    <option value="h1">📚고등학교 1학년</option>
                    <option value="h2">📚고등학교 2학년</option>
                    <option value="h3">📚고등학교 3학년</option>
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
                    
                }}> Nickname </label>
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
                    paddingTop: '8px', }}
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
                    
                }}> Email </label>
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
                    paddingTop: '8px', }}
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
                }}> Submit </button>
            </div>
        </div>
    );
};
export {SignUpPage};