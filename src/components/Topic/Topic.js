import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({data}) => {
    const {id, name, logo, total} = data
    return (
        <div className='topic'>
           <div className="single-topic">
           <img className='h-[300px] w-full' src={logo} alt="" />
            <h3 className='text-xl text-center font-bold '>{name}</h3>
            <h4 className='text-xl'>Total Question: {total}</h4>
        <Link className='w-full mt-4 text-white font-bold btn btn-success' to ={`/topic/${id}`}>Start Quiz</Link>

           </div>

        </div>
    );
};

export default Topic;