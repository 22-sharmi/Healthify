import { useNavigate } from "react-router-dom";
import Vdo from "./vdo/HealthifyMe.mp4";
import "./Welcome.css";

export default function Welcome() {
    const navigate = useNavigate();

    function handleOnClick() {
        navigate("/signin");
        console.log("Button Clicked");
    }

    return (
        <div className="welcome-container">
            <div className="header">
                <img src="https://www.healthifyme.com/in/images/Logo.png" alt="Brand Image" className="logo" />
                <button className="btn btn-dark join-btn" onClick={handleOnClick} type="button">Join Us</button>
            </div>
            <div className="video-container m-3">
                <div className="overlay-content">
                    <h2 className="fs-1">Healthify</h2>
                    <p className="lead fs-3">Your One Step Solution For Your Health Care Needs</p>
                    <button className="btn btn-dark join-btn" onClick={handleOnClick} type="button">Get Started</button>
                </div>
                <video className="video-background" muted loop autoPlay>
                    <source src={Vdo} type="video/mp4" />
                </video>
            </div>
            <div className="video-container m-3">
                <div className="overlay-content">
                    <h2 className="fs-1">Experience the World's Best Coaching</h2>
                    <p className="lead fs-3">Supercharged by Next-Gen AI</p>
                    <button className="btn btn-dark join-btn" onClick={handleOnClick} type="button">Chat With US</button>
                </div>
                <img src="https://www.healthifyme.com/in/images/Banner_Feb1-p-800.png" width={"450px"} alt="Coach"/>
            </div>
            <div className="video-container m-3">
            <img src="https://www.healthifyme.com/in/images/Snap-Banner-p-800.png" width={"450px"} alt="Coach"/>
                <div className="overlay-content">
                    <h2 className="fs-1">Too much on your plate to track?</h2>
                    <p className="lead fs-3">#JustHealthify with <span className="text-success">HealthifySnapTM</span></p>
                    <button className="btn btn-dark join-btn" onClick={handleOnClick} type="button">Get Pro</button>
                </div>
            </div>
            <div className="video-container m-3">
                <div className="overlay-content">
                    <h2 className="fs-1">Tired of the constant pricking to check your blood sugar?</h2>
                    <p className="lead fs-3">#JustHealthify with <span className="text-success">HealthifyCGM</span></p>
                    <button className="btn btn-dark join-btn" onClick={handleOnClick} type="button">Get Pro</button>
                </div>
                <img src="https://www.healthifyme.com/in/images/CGM-Banner-p-800.png" width={"450px"} alt="Coach"/>
            </div>
            <div className="bg-success">
                <p className="display-6 fw-bold text-light text-center">#JustHealthify</p>
            </div>
        </div>
    );
}
