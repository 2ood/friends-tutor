import * as Styled from "styles/ComponentStyles";

function CertificateFrame(props){
    return (
        <Styled.CertificateFrame>
            <div class="center yellow">CERTIFICATE</div>
            <div>Name : {props.dat.name}</div>
            <div>Title : {props.dat.title}</div>
            <div>Period : {props.dat.from} ~ {props.dat.until}</div>
            <div>Uploaded Lectures : {props.dat.number_of_lectures}</div>
            <div>Number of Referrals : {props.dat.number_of_referrals}</div>
            <div class="center">{props.dat.issued_on}</div>
            <div class="center">FriendsMentor</div>
        </Styled.CertificateFrame>
    )
}

export default CertificateFrame;
