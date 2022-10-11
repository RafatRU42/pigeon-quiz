import React from 'react';
import pic from '../../profile.jpg'
import './home.css'

const Home = () => {
    return (
        <div className='home'>
            <h1>This is Home</h1>
            <img src={pic} alt="" />
        </div>
    );
};

export default Home;