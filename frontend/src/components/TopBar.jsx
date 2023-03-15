import { useNavigate } from "react-router-dom";
import * as Styled from "styles/ComponentStyles";
import home from "img/home.png";
import profile from "img/profile.png";
import {FE_PATH} from "util/Enums";



function Topbar(){
    const navigate = useNavigate();
    
    return (
        <Styled.Topbar>
            <div id="logo" onClick={()=>{navigate(FE_PATH.course.list)}}>FriendsMentor</div>
            <div id="navgroup">
                <Styled.NavButton id="nav-home" onClick={()=>{navigate(FE_PATH.course.list)}}>
                    <img src={home} alt="home"></img>
                </Styled.NavButton>
                <Styled.NavButton id="nav-profile">
                    <img src={profile} alt="mypage" onClick={()=>{navigate(FE_PATH.mypage.mypage)}}></img>
                </Styled.NavButton>
            </div>
        </Styled.Topbar>
    );
}

export default Topbar;

