// Parent component for multi-step form
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import Gender from './Gender';
import Lang from './Lang';
import AgeHeightWeight from './AgeHeightWeight';
import Gen from './Gen';

export default function MultiStepForm() {
  const navigate = useNavigate();

  // State to store form data
  const [formData, setFormData] = useState({
    gender: '',
    lang: '',
    age: '',
    height: '',
    weight: ''
  });

  // Function to handle form submission for each step
  const handleSubmit = async () => {
    try {
      // Submit data based on the current step
      if (window.location.pathname === '/gen') {
        await axios.post('http://localhost:8080/gender', { gender: formData.gender });
        navigate('/lang');
      } else if (window.location.pathname === '/lang') {
        await axios.post('http://localhost:8080/lang', { lang: formData.lang });
        navigate('/age');
      } else if (window.location.pathname === '/age') {
        await axios.post('http://localhost:8080/user', { age: formData.age, height: formData.height, weight: formData.weight });
        navigate('/next');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  // Function to handle data change for each step
  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Routes>
      <Route path="/gen" element={<Gen onSubmit={handleSubmit} onChange={handleChange} />} />
      <Route path="/lang" element={<Lang onSubmit={handleSubmit} onChange={handleChange} />} />
      <Route path="/age" element={<AgeHeightWeight onSubmit={handleSubmit} onChange={handleChange} />} />
    </Routes>
  );
}


