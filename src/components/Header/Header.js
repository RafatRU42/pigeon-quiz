import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { faDove } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Header = ({ data }) => {
    return (
        <div className='bg-blue-300 flex justify-between p-5 text-white'>
            <div className="">

                <h1 className='font-bold text-2xl'> <FontAwesomeIcon icon={faDove}></FontAwesomeIcon> Pigeon IT Center</h1>
            </div>
            <div className="">
                <Link className='p-3 font-bold text-lg' to={'/home'}>Home</Link>
                <Link className='p-3 font-bold text-lg' to={'/home'}></Link>
                <Link className='p-3 font-bold text-lg' to={'/quizRoute'}>Quiz</Link>
                <Link className='p-3 font-bold text-lg' to={'/Statistics'}>Statistics</Link>
                <Link className='p-3 font-bold text-lg' to={'/blog'}>Blog</Link>
            </div>
        </div>
    );
};

export default Header;