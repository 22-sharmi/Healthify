import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';

const SignUp = () => {
    const navigate = useNavigate();
    const [signupError, setSignupError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const password = e.target.password.value;

        if (!name || !password) {
            setSignupError('Please fill in all fields.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:444/signup', {
                name,
                password,
            });

            if (response.data.success) {
                navigate('/signin'); // Redirect to the login page upon successful signup
            } else {
                setSignupError('Sign Up failed. Please check your details.');
            }
        } catch (error) {
            console.error('Error submitting signup form:', error);
            setSignupError('An error occurred. Please try again later.');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='signup-container'>
        <div className='signup-form-container'>
            <h2 className="signup-heading">Sign Up</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <input type="text" name="name" placeholder="Enter Your Name" className="signup-input" />
                <div className="password-container">
                    <input 
                        type={showPassword ? "text" : "password"} 
                        name="password" 
                        placeholder="Enter Your Password" 
                        className="signup-input" 
                    />
                    {/* Button to toggle password visibility */}
                    <button 
                        type="button" 
                        className="toggle-password-button"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                    {/* Checkbox to toggle password visibility */}
                    {/* <label>
                        <input 
                            type="checkbox" 
                            className="show-password-checkbox" 
                            onChange={togglePasswordVisibility} 
                        />
                        Show Password
                    </label> */}
                </div>
                <button type="submit" className='signup-button'>Sign Up</button>
            </form>
            {signupError && <p style={{ color: 'red' }}>{signupError}</p>}
            <p>Already have an Account? <a href='/SignIn' className='signin-link'>Sign In</a></p>
        </div>
    </div>
    );
};

export default SignUp;
