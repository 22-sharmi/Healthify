import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignIn.css'; // Import custom CSS file for styling

const SignIn = () => {
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const password = e.target.password.value;

        if (!name || !password) {
            setLoginError('Please fill in all fields.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:444/login', {
                name,
                password,
            });

            if (response.data.success) {
                navigate('/what'); // Redirect to the next page upon successful login
            } else {
                setLoginError('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setLoginError('An error occurred. Please try again later.');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='signin-container'>
            <div className='signin-form-container'>
                <h2 className="signin-heading">Sign In</h2>
                <form onSubmit={handleSubmit} className="signin-form">
                    <input type="text" name="name" placeholder="Enter Your Name" className="signin-input" />
                    <div className="password-container">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            name="password" 
                            placeholder="Enter Your Password" 
                            className="signin-input" 
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
                    <button type="submit" className='signin-button'>Log In</button>
                </form>
                {loginError && <p className="signin-error">{loginError}</p>}
                <p>Need an Account? <a href='/SignUp' className='signin-link'>Sign Up</a></p>
            </div>
        </div>
    );
};

export default SignIn;
