import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';
import './Quiz.css'

const Quiz = () => {
    const question = useLoaderData();
    console.log('quiaaa',question.data)
    return (
        <div className='quizes'>
            <h1 className='name'>{question.data.name}</h1>
            <h1 className='name'>Please Answer the Questions: {question.data.length}</h1>
            {
                question.data.questions.map(quiz => <SingleQuiz quiz = {quiz}></SingleQuiz>)
            }
        </div>
    );
};

export default Quiz;