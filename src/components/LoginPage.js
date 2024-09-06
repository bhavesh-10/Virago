import React, { useState } from 'react';
import axios from 'axios';
import { auth, googleAuthProvider, signInWithPopup } from '../Firebase';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userId: '',
        password: '',
    });

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

    return (
        <div>
            <h2>Login or Create an Account</h2>
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
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit">Create Account</button>
            </form>
            <button onClick={handleGoogleLogin}>Login with Google</button>
        </div>
    );
};

export default LoginPage;
