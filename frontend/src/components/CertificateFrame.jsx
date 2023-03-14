import * as Styled from "styles/ComponentStyles";
import signature from "img/signature.png";

function CertificateFrame(props){

    return (
        <Styled.CertificateFrame rank={props.dat.rank??"Black"}>
            <div className={`center themed-text`}>CERTIFICATE</div>
            <div>Name : {props.dat.name}</div>
            <div>Title : {props.dat.title}</div>
            <div>Period : {props.dat.start} ~ {props.dat.end}</div>
            <div>Uploaded Lectures : {props.dat.number_of_lectures}</div>
            <div>Number of Referrals : {props.dat.number_of_referrals}</div>
            <div>Rank : <span className="themed-text">{props.dat.rank}</span></div>
            <div className="center">{props.issued_on}</div>
            <div id="publisher" className="center">FriendsMentor<img id="signature" src={signature} alt="signature"></img></div>
        </Styled.CertificateFrame>
    )
}

export default CertificateFrame;
