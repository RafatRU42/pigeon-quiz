import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { faDove } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Header = () => {
    return (
        <div className='header'>
            <div className="title">
                
                <h1> <FontAwesomeIcon icon={faDove}></FontAwesomeIcon> Pigeon IT Center</h1>
            </div>
            <div className="links">
                <Link to = {'/home'}>Home</Link>
                <Link to = {'/home'}>Topic</Link>
                <Link to = {'/Statistics'}>Statistics</Link>

                <Link to = {'/blog'}>Blog</Link>
            </div>
        </div>
    );
};

export default Header;