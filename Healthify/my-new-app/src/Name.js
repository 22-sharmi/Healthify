import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Name() {
  const navigate = useNavigate();
  const [selectedName, setSelectedName] = useState('');

  // Function to handle click on 'Next' button
  const handleNextClick = () => {
    if (selectedName) {
      // Log the selected name to the console
      console.log(selectedName);
      
      // Navigate to the '/where' route
      navigate('/where');
    } else {
      // Alert the user if no name is selected
      alert('Please enter your name.');
    }
  };

  return (
    <div className="text-center">
      <h2>Hey there!</h2> <br/>
      <p>We are happy that you have taken the first step towards a healthier you. <br/>We need a few details to kick-start your journey.</p> <br/>
      <form>
        <label htmlFor="name" className="fs-3"> What is Your Name?</label> <br/> <br/>
        <input
          type="text"
          placeholder="Enter Your Name "
          id="name"
          className="w-25 fs-5 text-center"
          onChange={(e) => setSelectedName(e.target.value)}
        />
        <br/> <br/>   
        <p><a href="#" className="text-decoration-none text-danger">Have a referral code?</a></p> <br/>
        <button className="btn btn-next btn-dark" onClick={handleNextClick}>Next</button>
      </form>
    </div>
  );
}
