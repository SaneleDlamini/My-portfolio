import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import '../css/style.css';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='container home-content'>
            <h2 className='home-title'>Welcome to Awesome Movies</h2>
                <button className='browse-btn' onClick={() => { navigate('/movies') }}>Browse Movies</button>
        </div>
    )
}

export default Home
