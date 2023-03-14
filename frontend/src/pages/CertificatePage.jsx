import React , {useState,useEffect} from "react";
import * as Component from "components/Components";
import * as Styled from "styles/ComponentStyles";
import { useNavigate } from "react-router-dom";
import ModularRequest from "util/ModularRequest";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CertificatePage(){
    const navigate = useNavigate();
    
    const notify = (content)=> toast(content);
    const [certificateData, setCertificateData] = useState({});

    useEffect(()=>{
        function readContents(){
            try {
                let m1 = new ModularRequest({
                    "path" : `certificate/issue`,
                    "method" : "get",
                    "headers" : {
                        "Authorization" : `Bearer ${localStorage.getItem('login-token')}`,
                        "Content-Type": 'application/json;charset=UTF-8;',
                    }
                });
                  
                m1.send().then((res)=>{
                    if(res.status=== 200) {
                        setCertificateData(res.data.details);
                    } else {
                        notify("there was an error in reading certificate data!");
                    }
                  }
                );
            
            } catch (e) {
                console.log("error in reading certificate data");
                console.error(e.message);
            }
        }
        readContents();
    },[])

    return (<>
        <ToastContainer
                position="bottom-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
        />  
        <Component.Topbar />
        <Styled.MainBodyFrame>
            <Styled.ThemedTitle>Certificate Issuance</Styled.ThemedTitle>
            <Component.CertificateFrame dat={certificateData}></Component.CertificateFrame>
            <Styled.Buttongroup>
                    <Styled.ThemedButton theme="primary">save</Styled.ThemedButton>
                    <Styled.ThemedButton onClick={()=>{navigate("/mypage")}} theme="accent">close</Styled.ThemedButton>
            </Styled.Buttongroup>
        </Styled.MainBodyFrame>
        
    </>);
}

export {CertificatePage};