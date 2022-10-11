import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="title">
                <h1>Pigeon IT Center</h1>
            </div>
            <div className="links">
                <Link to = {'/home'}>Home</Link>
                <Link to = {'/topic'}>Topic</Link>
                <Link to = {'/Statistics'}>Statistics</Link>

                <Link to = {'/blog'}>Blog</Link>
            </div>
        </div>
    );
};

export default Header;