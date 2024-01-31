import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  function handleOnClick() {
    navigate("/signin");
    console.log("button Clicked");
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://healthifyme.imgix.net/static/images/home_website/landing/assets/HealthifyMe-Logonew-logo.svg?auto=format"
              alt=""
            />
          </a>
          <div className="collapse navbar-collapse" id="navbarText">
            <span className="navbar-text ms-auto">
              <form className="container-fluid justify-content-end">
                <button
                  className="btn btn-outline-dark"
                  onClick={() => handleOnClick()}
                  type="button"
                >
                  Sign In
                </button>
              </form>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
