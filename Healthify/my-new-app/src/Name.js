// Name.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Name() {
  const [name, setName] = useState('');
  const navigate= useNavigate();

  const handleSubmit = async () => {
    const userData = {
      gender:localStorage.getItem('gender'),
      lang:localStorage.getItem('lang'),
      age:localStorage.getItem('age'),
      height:localStorage.getItem('height'),
      weight:localStorage.getItem('weight'),
      what:localStorage.getItem('selectedCardTitles'),
      rule:localStorage.getItem('rule'),
      city:localStorage.getItem('city'),
      active:localStorage.getItem('active'),
      name,
    };


    if(name){
      navigate('/next')
      try {
        const response = await axios.post('http://localhost:8080/users', userData);
        console.log(response.data);
        
      } catch (error) {
        console.error(error);
      }
    }
    else{
      alert('Enter Your Name')
    }
    // Clear local storage
    localStorage.removeItem('gender');
    localStorage.removeItem('lang');
    localStorage.removeItem('age');
    localStorage.removeItem('height');
    localStorage.removeItem('weight');
    localStorage.removeItem('what');
    localStorage.removeItem('rule');
    localStorage.removeItem('city');
    localStorage.removeItem('active');

  };

  return (
    <div className='text-center container'>
      <h2>Hey there!</h2> <br/>
      <p>We are happy that you have taken the first step towards a healthier you. <br/>Let's kick-start your journey.</p> <br/>
      <form>
        <label htmlFor="name" className="fs-3"> What is Your Name?</label> <br/> <br/>
        <input
          type="text"
          placeholder="Enter Your Name "
          id="name"
          className="w-50 fs-5 text-center"
          onChange={(e) => setName(e.target.value)}
        />
        <br/> <br/>   
        <button className="btn btn-next btn-dark" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Name;
