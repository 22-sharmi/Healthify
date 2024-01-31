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
        <div className="video-background-overlay">
            <video className="video-background w-100" muted loop autoPlay>
                <source src={Vdo} type="video/mp4" />
            </video>
            <div className="overlay-content">
                <button
                    className="overlay-button btn btn-outline-light w-100 ps-5 pe-5"
                    onClick={handleOnClick}
                    type="button"
                >
                    Jion Us
                </button>
            </div>
        </div>
    );
}
