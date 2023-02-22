//import { useNavigate } from "react-router-dom";
import * as Styled from "styles/ComponentStyles";
import home from "img/home.png";
import profile from "img/profile.png";

//const navigate = useNavigate();

function Topbar(){
    return (
        <Styled.Topbar>
            <div id="logo">FriendsMentor</div>
            <div id="navgroup">
                <Styled.NavButton id="nav-home">
                    <img src={home} alt="home"></img>
                </Styled.NavButton>
                <Styled.NavButton id="nav-profile">
                    <img src={profile} alt="profile"></img>
                </Styled.NavButton>
            </div>
        </Styled.Topbar>
    );
}

export default Topbar;

