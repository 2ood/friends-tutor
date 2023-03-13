import mainlogo from "img/mainlogo.png";
import React from "react";
import HorizonLine from "util/HorizontalLine";
import { useNavigate } from 'react-router';


function MainPage() {
    const navigate = useNavigate();
 
    const navigateToSignIn = () => {
    navigate("/sign-in");
    };

    const navigateToSignUp = () => {
        navigate("/sign-up");
        };

    return (
        <div classname="Main"
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}>
            <div>
                <img style={{ width:'300px'}} src={mainlogo} alt = "" />
                <p
                style={{
                margin: "-15px 0px 40px 0px",
                lineHeight: "20px",
                fontSize: "43px",
                fontWeight: "bold",
                fontFamily: "Neverland",
                color: "#787878"
                }}>Friends</p>
                <p
                style={{
                margin: "31px 0px 50px 0px",
                lineHeight: "20px",
                fontSize: "43px",
                fontFamily: "Neverland",
                fontWeight: "bold",
                color: "#40A7D7"
                }}>Tutor</p>
                <p
                style={{
                margin: "31px 0px 50px 0px",
                lineHeight: "20px",
                fontSize: "18px",
                fontFamily: "Gulim",
                fontWeight: "bold",
                color: "#787878"
                }}>Meet my friends tutors!</p>
            </div>
            <HorizonLine/>
            <div>
                <button onClick={navigateToSignIn}           
                style={{
                    border: "2px solid white",
                    width: "250px",
                    height: "50px",
                    borderRadius: "20px",
                    margin: "55px 10px 10px 10px",
                    backgroundColor: "#40A7D7",
                    color: "#ffffff",
                    fontSize: "16px",
                    fontFamily: "Gulim",
                    fontWeight: "bold",
                }}> Sign in </button>
            </div>
            <div>
                <button onClick={navigateToSignUp}           
                style={{
                    border: "1.1px solid #787878",
                    width: "250px",
                    height: "50px",
                    borderRadius: "20px",
                    borderColor: "#787878",
                    margin: "10px 10px 10px 10px",
                    backgroundColor: "#ffffff",
                    color: "#787878",
                    fontSize: "16px",
                    fontFamily: "Gulim",
                    fontWeight: "bold",
                }}> Sign up </button>
            </div>
        </div>
    );
};
export {MainPage};