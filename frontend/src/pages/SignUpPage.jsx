import React from "react";
import back from "img/back.png";
import clear from "img/clear.png";
import * as Styled from "styles/ComponentStyles";
import { useNavigate } from 'react-router';
import HorizonLine from "util/HorizontalLine";


function SignUpPage() {
    const navigate = useNavigate();
 
    const navigateToMain = () => {
    navigate("/");
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

            <div style={{marginTop:'60px', marginBottom:"20px", alignItems:"start"}}>
                <label
                style={{
                    fontSize: "18px",
                    fontWeight: "normal",
                    fontFamily : "Gulim",
                    color: "#787878",
  
                }}> ID </label>
            </div>
            <div>
            <input id = "id"
                placeholder="Enter your id"
                style={{
                    outline: "none",
                    paddingLeft: "15px", 
                    fontSize: "15px", 
                    border: "0px",
                    borderRadius: "20px", 
                    width:'180px',  
                    paddingTop: '8px', 
                    paddingBottom: '8px',
                    paddingTop: '8px', }}
                onChange={(e)=>{
                }}
                /> 
                <HorizonLine/>
            </div>
            <div style={{marginTop: '50px',marginBottom: "20px",}}>
                <label
                style={{
                    outline: "none",
                    fontSize: "18px",
                    fontWeight: "normal",
                    fontFamily : "Gulim",
                    color: "#787878",
                }}> Password </label>
            </div>
            <div>
            <input id = "pwd" 
                placeholder="Enter your password"
                style={{
                    outline: "none",
                    paddingLeft: "15px", 
                    fontSize: "15px", 
                    border: "0px",
                    borderRadius: "20px", 
                    width:'180px',  
                    paddingTop: '8px', 
                    paddingBottom: '8px',
                    paddingTop: '8px', }}
                onChange={(e)=>{
                }}
                /> 
                <HorizonLine/>
            </div>
            <div style={{marginTop: '50px',marginBottom: "20px",}}>
                <label
                style={{
                    fontSize: "18px",
                    fontWeight: "normal",
                    fontFamily : "Gulim",
                    color: "#787878",
                    
                }}> Name </label>
            </div>
            <div>
            <input id = "name"
                placeholder="Enter your name"
                style={{
                    outline: "none",
                    paddingLeft: "15px", 
                    fontSize: "15px", 
                    border: "0px",
                    borderRadius: "20px", 
                    width:'180px',  
                    paddingTop: '8px', 
                    paddingBottom: '8px',
                    paddingTop: '8px', }}
                onChange={(e)=>{
                }}
                /> 
                <HorizonLine/>
            </div>
            <div style={{marginTop: '50px',marginBottom: "20px",}}>
                <label
                style={{
                    fontSize: "18px",
                    fontWeight: "normal",
                    fontFamily : "Gulim",
                    color: "#787878",
                    textAlign: "left",
                }}> Grade </label>
            </div>
            <div>
            <select name="choice" 
                    onChange={(e)=>{
                    }}
                    style={{
                        outline: "none",
                        borderRadius: "20px",
                        paddingLeft: "15px",
                        fontSize: "15px",
                        border: "0px",
                        width:'200px',  
                        paddingTop: '7px', 
                        paddingBottom: '7px', }}>

                    <option value="las" disabled selected> Enter your grade </option>
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
            <div style={{marginTop: '50px',marginBottom: "20px",}}>
                <label
                style={{
                    fontSize: "18px",
                    fontWeight: "normal",
                    fontFamily : "Gulim",
                    color: "#787878",
                    
                }}> Nickname </label>
            </div>
            <div>
            <input id = "nickname"
                placeholder="Enter your nickname"
                style={{
                    outline: "none",
                    paddingLeft: "15px", 
                    fontSize: "15px", 
                    border: "0px",
                    borderRadius: "20px", 
                    width:'180px',  
                    paddingTop: '8px', 
                    paddingBottom: '8px',
                    paddingTop: '8px', }}
                onChange={(e)=>{
                }}
                /> 
                <HorizonLine/>
            </div>
            <div style={{marginTop: '50px',marginBottom: "20px",}}>
                <label
                style={{
                    fontSize: "18px",
                    fontWeight: "normal",
                    fontFamily : "Gulim",
                    color: "#787878",
                    
                }}> Email </label>
            </div>
            <div>
            <input id = "email"
                placeholder="Enter your email"
                style={{
                    outline: "none",
                    paddingLeft: "15px", 
                    fontSize: "15px", 
                    border: "0px",
                    borderRadius: "20px", 
                    width:'180px',  
                    paddingTop: '8px', 
                    paddingBottom: '8px',
                    paddingTop: '8px', }}
                onChange={(e)=>{
                }}
                /> 
                <HorizonLine/>
            </div>
            <div>
                <button           
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