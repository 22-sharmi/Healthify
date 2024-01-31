import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AgeHeightWeight.css'; // Import custom CSS

export default function AgeHeightWeight() {
  const navigate = useNavigate();
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleNextClick = async () => {
    if (age && height && weight) {
      try {
        await axios.post('http://localhost:5000/user', { age, height, weight });
        navigate('/next');
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="age container text-center mt-5">
      <h3>Enter Your Age, Height, and Weight</h3>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              className="form-control"
              value={age}
              min={18}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="height">Height (in cm):</label>
            <input
              type="number"
              id="height"
              className="form-control"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight (in kg):</label>
            <input
              type="number"
              id="weight"
              className="form-control"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
              required
            />
          </div>
          <div className='d-flex justify-content-between'>
          <a href="/lang" className="btn btn-back">Back</a>
          <button className=" button btn btn-dark" onClick={handleNextClick}>
            Next
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
