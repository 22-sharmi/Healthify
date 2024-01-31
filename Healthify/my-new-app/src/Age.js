import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Age() {
  const navigate = useNavigate();
  const [selectedAge, setSelectedAge] = useState(null);

  // Function to handle click on 'Next' button
  const handleNextClick = async () => {
    if (selectedAge) {
      try {
        // Make a POST request to the backend with the selected age
        const response = await axios.post('http://localhost:5000/age', {
          age: selectedAge
        });

        // Log the response from the backend
        console.log(response.data);

        // Navigate to the '/active' route
        navigate("/active");
      } catch (error) {
        console.error('Error:', error);
        // Handle error, e.g., show an alert
        alert("An error occurred. Please try again later.");
      }
    } else {
      // Alert the user if no age is selected
      alert("Please select your age.");
    }
  };

  return (
    <div className="container text-center m-5">
      <h3>What's your Age?</h3> <br />
      <p>Your age determines how much you should consume</p> <br />
      <div>
        <form action="">
          <label htmlFor="">Select your age in years :</label>
          <input
            type="number"
            name=""
            id=""
            min="18"
            onChange={(e) => setSelectedAge(e.target.value)}
          />
        </form>
      </div>
      <div className="d-flex justify-content-between">
        <a href="/Gen" className="btn btn-dark">
          Back
        </a>
        <button className="btn btn-next btn-dark" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
}
