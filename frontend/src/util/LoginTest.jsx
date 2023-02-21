import React, {useState} from "react";
import styled from "styled-components";

import ModularRequest from "./ModularRequest";

const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    margin : 0 10vw;
    gap : 10px;
`;

const Input = styled.input`
    display : inline-block;
    width : 100%;
    min-height : 50px;
    padding : 10px;
`;

const Log = styled.textarea`
    display : inline-block;
    width : 100%;
    min-height: 200px;
    resize : none;
`;

function LoginTest() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [log,setLog] = useState("");

    function handleSubmit(){
        try{
            let m1 = new ModularRequest({
                "path" : "user/login",
                "method" : "post",
                "data": {
                    "username" : username,
                    "password" : password
                },
                "headers" : {}
            });
    
            m1.send().then((dat)=>{
                if(!dat) console.log(dat);
                setLog(dat);
            }
            );
        } catch(e) {
            console.log("error in LoginTest");
        }

    }

    return (
        <Wrapper>
            <h1>Login</h1>
            <Input type="text" id="username" onInput={e=>setUsername(e.target.value)} placeholder="username"></Input>
            <Input type="password" id="pw" onInput={e=>setPassword(e.target.value)} placeholder="password"></Input>
            <button onClick={handleSubmit} type="button" id="submit">Submit</button>
            <Log id="log" readonly>{log.value}</Log>
        </Wrapper>
    );
}
export default LoginTest;