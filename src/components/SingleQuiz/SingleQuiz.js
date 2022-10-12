import React from 'react';
import Option from '../Option/Option';
import './SingleQuiz.css'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SingleQuiz = ({quiz}) => {
const correct = {}
 const correctAnswer = (quiz) =>{
console.log('correct answer is ',quiz.correctAnswer)
const correct = quiz.correctAnswer;
document.getElementsByClassName('corrent').innertext = correct;

return correct;
 }

    
    console.log('rafat',quiz)
    return (
        <div className='border'>
            <div className="flex">
            <h1 className='style'>Question: {quiz.question}</h1>
            <FontAwesomeIcon onClick={()=>correctAnswer(quiz)} className='eye' icon={faEye}></FontAwesomeIcon>
            </div>
            <h2 className='correct'>{}</h2>
            <button>
            <h2>1.{quiz.options[0]}</h2>

            </button>
            <button>
                
            <h2>2.{quiz.options[1]}</h2>
            </button>
            <button>
                
            <h2>3.{quiz.options[2]}</h2>
            </button>
            <button>
                
            <h2>4.{quiz.options[3]}</h2>
            </button>
        </div>
    );
};

export default SingleQuiz;