import React from 'react';
import Option from '../Option/Option';

const SingleQuiz = ({quiz}) => {
    console.log('rafat',quiz.options[0])
    return (
        <div>
            <h1>{quiz.question}</h1>
            <h2>{quiz.options[0]}</h2>
            <h2>{quiz.options[1]}</h2>
            <h2>{quiz.options[2]}</h2>
            <h2>{quiz.options[3]}</h2>
        </div>
    );
};

export default SingleQuiz;