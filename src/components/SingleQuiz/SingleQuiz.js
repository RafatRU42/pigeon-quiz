import React, { useEffect, useState } from 'react';
import Option from '../Option/Option';
import './SingleQuiz.css'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import toast, { Toaster } from 'react-hot-toast';
import ReactModal from 'react-modal';

// import { toast } from 'react-hot-toast';







const SingleQuiz = ({ quiz }) => {
  const [clickedOption, setClickedOption] = useState(null);
  const [answerClicked, setAnswerClicked] = useState(false);

  const correctAnswer = () => {
    toast.success('Correct Answer: ' + quiz.correctAnswer);
  };

  const optionChecker = (option) => {
    if (answerClicked) return; // Prevent further clicks after an answer is clicked

    setAnswerClicked(true);
    setClickedOption(option);

    if (option === quiz.correctAnswer) {
      toast.success('Your Answer is correct.');
    } else {
      toast.error('Your Answer Is Wrong');
    }
  };

  const isOptionCorrect = (option) => option === quiz.correctAnswer;
  const isOptionDisabled = () => answerClicked;

  return (
  <div>
      <div className='border'>
      <div className="flex">
        <h1 className='style'>Question: {quiz.question}</h1>
        <FontAwesomeIcon onClick={correctAnswer} className='eye' icon={faEye} />
      </div>

      <button onClick={() => optionChecker(quiz.options[0])} disabled={isOptionDisabled()}>
        <h2 style={{ color: clickedOption === quiz.options[0] ? (isOptionCorrect(quiz.options[0]) ? 'green' : 'red') : 'inherit' }}>1. {quiz.options[0]}</h2>
      </button>
      <button onClick={() => optionChecker(quiz.options[1])} disabled={isOptionDisabled()}>
        <h2 style={{ color: clickedOption === quiz.options[1] ? (isOptionCorrect(quiz.options[1]) ? 'green' : 'red') : 'inherit' }}>2. {quiz.options[1]}</h2>
      </button>
      <button onClick={() => optionChecker(quiz.options[2])} disabled={isOptionDisabled()}>
        <h2 style={{ color: clickedOption === quiz.options[2] ? (isOptionCorrect(quiz.options[2]) ? 'green' : 'red') : 'inherit' }}>3. {quiz.options[2]}</h2>
      </button>
      <button onClick={() => optionChecker(quiz.options[3])} disabled={isOptionDisabled()}>
        <h2 style={{ color: clickedOption === quiz.options[3] ? (isOptionCorrect(quiz.options[3]) ? 'green' : 'red') : 'inherit' }}>4. {quiz.options[3]}</h2>
      </button>
    </div>
  </div>
  );
};

export default SingleQuiz;


