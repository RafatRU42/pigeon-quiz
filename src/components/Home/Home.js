import React from 'react';
import { useLoaderData } from 'react-router-dom';
import pic from '../../profile.jpg'
import Quiz from '../Quiz/Quiz';
import Statistics from '../Statistics/Statistics';
import Topic from '../Topic/Topic';
import './home.css'
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
    const quiz = useLoaderData();
    console.log('quiz',quiz.data)
    return (
        <div className='home'>
            <h1>Welcome To Our Page</h1>
          

            <div className="text-section">
            <img src={pic} alt="" />
                <div className="text">
                    <h2>Our Schooling and Your Victory...</h2>
                    <hr />

                    <h3>We live in the age of Science and Technology. Without Technological knowledge no one can take his proper position in this modern world. Day by day the importance of the knowledge of science and tecnology is increasing. So, Take the IT knowledge and be advanced in today's world.Best wishes. Fiamanillah... </h3>
                </div>
            </div>
           <div className="rafat">
      
          {
            quiz.data.map(data=> <Topic key ={data.id} data ={data}></Topic>,)
          }
           </div>
        </div>
    );
};

export default Home;