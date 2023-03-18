import React , {useState,useEffect, useRef} from "react";
import * as Component from "components/Components";
import * as Styled from "styles/ComponentStyles";
import { useNavigate } from "react-router-dom";
import ModularRequest from "util/ModularRequest";
import { toast } from 'react-toastify';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";


function CertificatePage(){
    const navigate = useNavigate();
    
    const notify = (content)=> toast(content);
    const [certificateData, setCertificateData] = useState({});
    const certificateRef = useRef();

    const handleDownloadImage = async () => {
        const element = certificateRef.current;
        const canvas = await html2canvas(element);
        
        const data = canvas.toDataURL('image/png');
        const link = document.createElement('a');
    
        if (typeof link.download === 'string') {
            const pdf = new jsPDF();
            const imgProperties = pdf.getImageProperties(data);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight =
              (imgProperties.height * pdfWidth) / imgProperties.width;
        
            pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`certificate_${certificateData.title}_${certificateData.name}_${certificateData.issue_date}.pdf`);
        } else {
          window.open(data);
        }
      };

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
        <Component.ThemedToast/>
        <Component.Topbar />
        <Styled.MainBodyFrame>
            <Styled.ThemedTitle>Certificate Issuance</Styled.ThemedTitle>
            <div ref={certificateRef}>
                <Component.CertificateFrame dat={certificateData} ></Component.CertificateFrame>
            </div>
            <Styled.Buttongroup>
                    <Styled.ThemedButton theme="primary" onClick={handleDownloadImage}>save</Styled.ThemedButton>
                    <Styled.ThemedButton onClick={()=>{navigate(-1)}} theme="accent">close</Styled.ThemedButton>
            </Styled.Buttongroup>
        </Styled.MainBodyFrame>
        
    </>);
}

export {CertificatePage};