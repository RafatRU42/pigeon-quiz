import React from 'react';
import pic from '../../profile.jpg'
import './home.css'

const Home = () => {
    return (
        <div className='home'>
            <h1>Welcome To Our Page</h1>

            <div className="text-section">
            <img src={pic} alt="" />
                <div className="text">
                    <h2>Our Schooling and Your Victory...</h2>
                    <hr />

                    <h3>We live in the age of Science and Tecnology. Without Tecnological knowledge no one can take his proper position in this modern world. Day by day the importance of the knowledge of science and tecnology is increasing. So, Take the IT knowledge and be advanced in today's world.Best wishes for You.You should do hard work. There is no Future for the lagy people. Future is for them who are hard worker. Fiamanillah... </h3>
                </div>
            </div>
        </div>
    );
};

export default Home;