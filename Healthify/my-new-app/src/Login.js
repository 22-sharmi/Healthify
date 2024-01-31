import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignIn from "./SignIn";

export default function Login() {
  const navigate = useNavigate(); // React Router's useNavigate hook for navigation
  const [Num,SetNum]=useState();
  // Function to handle click on 'Agree & Sign Up' button
  function handleAgreeSignUpClick() {
    if (Num) {
      console.log('Agree & Sign Up button clicked'); // Log button click
    navigate('/name'); // Navigate to '/name' route
    } else {
      // Alert the user if no language is selected
      alert('Please Provide your Number.');
    }
    
  }

  // Function to handle click on social media icons
  function handleSocialMediaClick(platform) {
    console.log(`${platform} icon clicked`); // Log social media icon click
    // Add logic for handling social media icon clicks
  }
  function LoginNnumberValue(e){
    e.preventDefault();
    axios.post('http://localhost:444/api/phonenumber')
  }
  return (
    <div>
      <div>
        {/* Header */}
        <h3 className="text-center">Create Your Account</h3> <br />
        <center>
          <div>
            <form onSubmit={LoginNnumberValue}>
              {/* Phone number input
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                placeholder="Enter Your Phone Number"
                id="phone" value={Num} onChange={(e)=>SetNum(e.target.value)}
                style={{
                  width: '200px',
                  border: 'none',
                  borderBottom: '1px solid black',
                }}
                required
              />{' '} */}
              <SignIn/>
              <br /> <br />
              {/* Checkbox to receive updates */}
              <input type="checkbox" required /> Receive updates and remainders on{' '}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjqp0S6kdf4XwQcnO9gJK_AE5MzMshs0RcWg&usqp=CAU"
                width="40px"
                alt=""
              />{' '}
              whatsapp <br />
              <p>
                By signing up, I agree to the{' '}
                <a href="" className="text-dark">
                  Terms of Service{' '}
                </a>
                and{' '}
                <a href="" className="text-dark">
                  Privacy Policy{' '}
                </a>
                including using cookies
              </p>{' '}
              <br />
              {/* Agree & Sign Up button */}
              <button className="btn btn-next btn-dark" onClick={handleAgreeSignUpClick}>Agree & Sign Up</button>
            </form>{' '}
            <br /> <br />
            <p className="text-secondary">or connect with</p>
            {/* Social media icons */}
            <div>
              {/* Facebook icon */}
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                  onClick={() => handleSocialMediaClick('facebook')}
                >
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>
              </i>
              {/* Twitter icon */}
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                  onClick={() => handleSocialMediaClick('twitter')}
                >
                  <path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path>
                </svg>
              </i>
              {/* Google icon */}
              <i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                  onClick={() => handleSocialMediaClick('google')}
                >
                   <path fill="#e0e0e0" d="M5.5,40.5h37c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11v26C2,38.933,3.567,40.5,5.5,40.5z"></path><path fill="#d9d9d9" d="M26,40.5h16.5c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11L26,40.5z"></path><path fill="#eee" d="M6.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L6.745,40.5z"></path><path fill="#e0e0e0" d="M25.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L18.771,31.616L25.745,40.5z"></path><path fill="#ca3737" d="M42.5,9.5h-37C3.567,9.5,2,9.067,2,11v26c0,1.933,1.567,3.5,3.5,3.5H7V12h34v28.5h1.5c1.933,0,3.5-1.567,3.5-3.5V11C46,9.067,44.433,9.5,42.5,9.5z"></path><path fill="#f5f5f5" d="M42.5,7.5H24H5.5C3.567,7.5,2,9.036,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.036,44.433,7.5,42.5,7.5z"></path><path fill="#e84f4b" d="M43.246,7.582L24,21L4.754,7.582C3.18,7.919,2,9.297,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.297,44.82,7.919,43.246,7.582z"></path>
                </svg>
              </i>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}
