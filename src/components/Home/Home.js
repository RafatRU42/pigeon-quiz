import React from 'react';
import { useLoaderData } from 'react-router-dom';
import pic from '../../profile.jpg'
import Quiz from '../Quiz/Quiz';
import Statistics from '../Statistics/Statistics';
import Topic from '../Topic/Topic';
import './home.css'
import toast, { Toaster } from 'react-hot-toast';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import "react-awesome-slider/dist/styles.css";



const Home = () => {
  const quiz = useLoaderData();


  // const slider = (
  //     <AwesomeSlider >
  //       <div data-src="https://i.ibb.co/mHtSwZy/image-1.jpg" />
  //       <div data-src="https://i.ibb.co/mHtSwZy/image-1.jpghttps://i.ibb.co/R7Nk1GL/21235128.jpg" />
  //       <div data-src="https://i.ibb.co/mHtSwZy/image-1.jpg" />
  //     </AwesomeSlider>
  //   );


  return (
    <div className='home'>
     

      <div>


  
      </div>

      <div className=''>
      <img  className=' w-full' src="https://i.ibb.co/T0JwSqs/1.jpg" alt="" />

      </div>

      <div className="rafat">

        {
          quiz.data.map(data => <Topic key={data.id} data={data}></Topic>,)
        }
      </div>
    </div>
  );
};

export default Home;