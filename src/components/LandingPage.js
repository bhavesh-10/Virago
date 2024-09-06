import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const LandingPage = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    };

    return (
        <div>
            <Navbar />
            <main style={{ padding: '20px', textAlign: 'center' }}>
                <h1>Welcome to Virago</h1>
                <p>Your journey starts here. Explore our features and offerings through the navigation above.</p>
                
                {/* Button to navigate to the login page */}
                <div style={{ marginTop: '30px' }}>
                    <button onClick={goToLogin} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
                        Go to Login
                    </button>
                </div>
            </main>
        </div>
    );
};

export default LandingPage;
