import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quiz = useLoaderData();
    console.log('quiaaa',quiz)
    return (
        <div>
            <h1>This is Quiz section</h1>
        </div>
    );
};

export default Quiz;