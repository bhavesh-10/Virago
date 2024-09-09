import React, { useState } from 'react';
import axios from 'axios';
import { auth, googleAuthProvider, signInWithPopup } from './Firebase';
import './LoginPage.css';  // Your CSS file
import GoogleLogo from '../assets/icons8-google.svg';  // Google Logo
import EyeIcon from '../assets/eye.svg';  // Eye icon (as an image source)

const LoginPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userId: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);  // State to manage password visibility

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/auth/register', formData);
            window.location.href = '/';
        } catch (error) {
            console.error(error);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleAuthProvider);
            window.location.href = '/';
        } catch (error) {
            console.error('Google Sign-In Error:', error);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container">
            <div className="image-container"></div>
            <div className="form-container">
                <h2>Welcome Veeres!</h2>
                <p>Please enter your details</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="userId"
                        placeholder="User ID"
                        value={formData.userId}
                        onChange={handleChange}
                    />
                    <div className="password-input-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="password-input"
                        />
                        <span className="eye-icon" onClick={togglePasswordVisibility}>
                            <img
                                src={EyeIcon}
                                alt="Toggle visibility"
                                className={showPassword ? 'eye-open' : 'eye-closed'}  // Optional styling for different states
                            />
                        </span>
                    </div>
                    <button type="submit">Create Account</button>
                </form>
                <button className="google-login-button" onClick={handleGoogleLogin}>
                    <img src={GoogleLogo} alt="Google Logo" width="20" />
                    Log in with Google
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
