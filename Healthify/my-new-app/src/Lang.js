import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Lang.css"; // Import CSS file for styling

export default function Lang() {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState('');

  // Function to handle click on 'Next' button
  const handleNextClick = async() => {
    if (selectedLanguage) {
      try {
        await axios.post('http://localhost:5050/lang', { lang: selectedLanguage });
        // Log the selected language to the console
        console.log(selectedLanguage);
        
        // Navigate to the '/gen' route
        navigate('/gen');
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      }
    } else {
      // Alert the user if no language is selected
      alert('Please select a language.');
    }
  };

  return (
    <div className="container text-center lang-container">
      <h3>Which language do you prefer to speak in?</h3>
      <p>This does not affect your app language</p>
      <form>
        <label htmlFor="lang" className="lang-label">Choose your Language: </label>
        <select 
          id="lang" 
          name="lang" 
          className="lang-select"
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="" disabled selected>Select language</option>
          <option value="tamil">Tamil</option>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          <option value="telugu">Telugu</option>
          <option value="kannada">Kannada</option>
          <option value="malayalam">Malayalam</option>
          <option value="gujarati">Gujarati</option>
          <option value="bengali">Bengali</option>
          <option value="marathi">Marathi</option>
        </select>
      </form>
      <div className="d-flex justify-content-between lang-buttons">
        <a href="/where" className="btn btn-dark lang-back-btn">Back</a>
        <button className="btn btn-next btn-dark lang-next-btn" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}
