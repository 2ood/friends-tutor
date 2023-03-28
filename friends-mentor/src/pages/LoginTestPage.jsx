import React, {useState} from "react";

import ModularRequest from "util/ModularRequest";
import * as Styled from "styles/ComponentStyles";

function LoginTest() {
    const [loaded, setLoaded] = useState(false);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [log,setLog] = useState("");

    function handleSubmit(){
        try{
            let m1 = new ModularRequest({
                "host" :"https://jsonplaceholder.typicode.com/",
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
                setLoaded(true);
                setLog(dat);
            }
            );
        } catch(e) {
            console.log("error in LoginTest");
        }  
    }

    if(!loaded) return <div>Hello</div>;
    
    return (<Styled.Wrapper>
        <h1>Login</h1>
        <Styled.Input type="text" id="username" onInput={e=>setUsername(e.target.value)} placeholder="username"></Styled.Input>
        <Styled.Input type="password" id="pw" onInput={e=>setPassword(e.target.value)} placeholder="password"></Styled.Input>
        <button onClick={handleSubmit} type="button" id="submit">Submit</button>
        <Styled.Log id="log" readonly>{log.value}</Styled.Log>
    </Styled.Wrapper>);
}
export default LoginTest;