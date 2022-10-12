import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({data}) => {
    const {id, name, logo, total} = data
    return (
        <div className='topic'>
           <div className="single-topic">
           <img src={logo} alt="" />
            <h3>{name}</h3>
            <h4>Total Question: {total}</h4>
           <button className='button'><Link to ={`/topic/${id}`}>Start Quiz</Link></button>

           </div>

        </div>
    );
};

export default Topic;