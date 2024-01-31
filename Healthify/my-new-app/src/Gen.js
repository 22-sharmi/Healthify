import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Gen.css";
import axios from "axios";

export default function Gen() {
  const navigate = useNavigate();
  const [selectedGender, setSelectedGender] = useState("");
  const [gender,setgen]=useState()

  // Function to handle click on a gender card
  const handleCardClick = (gender) => {
    setSelectedGender(gender);
  };
//   const Data={
//     gender:"Male"
//  }
  // Function to handle click on 'Next' button
  const handleNextClick = async() => {
    if (selectedGender) {
      try {
        await axios.post('http://localhost:8080/gender',{gender:selectedGender});
         // Log the selected gender to the console
      console.log(selectedGender);
      
      // Navigate to the '/age' route
      navigate("/age");
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      }
    } else {
      alert("Please select your gender.");
    }
  };

  return (
    <div className="container text-center">
      <h3 className="">What's your biological sex?</h3> <br />
      <p>
        We support all forms of gender expression. <br />
        However, we need this to calculate your body metrics
      </p>
      <div>
        {" "}
        <br /> <br />
        <div className="d-flex justify-content-evenly">
          <div
            className={`card ${selectedGender === "male" ? "selected" : ""}`}
            style={{ width: "150px", height: "150px" }}
            onClick={() => handleCardClick("male")}
          >
            <center>
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  id="male"
                  width={100}
                >
                  <path d="M24,10a1,1,0,0,0-.06-.34h0a.05.05,0,0,0,0,0,.92.92,0,0,0-.17-.25.27.27,0,0,0-.08-.07.66.66,0,0,0-.2-.14l-.1,0A1,1,0,0,0,23,9H19a1,1,0,0,0,0,2h1.52l-2.13,2.05a6,6,0,1,0,1.44,1.4L22,12.35V14a1,1,0,0,0,2,0V10ZM15,22a4,4,0,1,1,4-4A4,4,0,0,1,15,22Z"></path>
                </svg>
              </i>
            </center>
            <div className="card-title"onChange={(e)=>setgen(e.target.value)}>Male</div>
          </div>
          <div
            className={`card ${selectedGender === "female" ? "selected" : ""}`}
            style={{ width: "150px", height: "150px" }}
            onClick={() => handleCardClick("female")}
          >
            <center>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="female" width={100}><path d="M17,9a6,6,0,0,0-4.58,9.87l-1,1.1-.68-.68a1,1,0,0,0-1.42,1.42l.73.73-.82.88A1,1,0,0,0,9.93,24a1,1,0,0,0,.73-.32l.78-.83.85.86a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-.91-.9L14,20.16A6,6,0,1,0,17,9Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,17,19Z"></path></svg>
              </i>
            </center>
            <div className="card-title" onChange={(e)=>setgen(e.target.value)}>Female</div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <a href="/lang" className=" btn btn-dark">
          Back
        </a>
        <button className="btn btn-next btn-dark" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
}
