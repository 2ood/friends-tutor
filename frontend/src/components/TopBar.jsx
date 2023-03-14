import { useNavigate } from "react-router-dom";
import * as Styled from "styles/ComponentStyles";
import home from "img/home.png";
import profile from "img/profile.png";
import { useAtom } from "jotai";
import { LanguageChangeAtom } from "util/atom";


function Topbar(){
    const navigate = useNavigate();
    const [LanguageChange,setLanguageChange] = useAtom(LanguageChangeAtom);
    var FriendsMentor="FriendsMentor";
    if (LanguageChange==0){
        FriendsMentor="FriendsMentor";
    }
    else if(LanguageChange==1){
        FriendsMentor="또래멘토";
    }
    return (
        <Styled.Topbar>
            <div id="logo" onClick={()=>{navigate("/")}}>{FriendsMentor}</div>
            <div id="navgroup">
                <Styled.NavButton id="nav-home" onClick={()=>{navigate("/")}}>
                    <img src={home} alt="home"></img>
                </Styled.NavButton>
                <Styled.NavButton id="nav-profile">
                    <img src={profile} alt="mypage" onClick={()=>{navigate("/mypage")}}></img>
                </Styled.NavButton>
            </div>
        </Styled.Topbar>
    );
}

export default Topbar;

