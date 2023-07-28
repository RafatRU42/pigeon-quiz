import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';
import './Quiz.css'
import ReactModal from 'react-modal';

const Quiz = () => {
    const question = useLoaderData();
const [isModalOpen, setIsModalOpen] = useState(false);

const handleFinishedQuiz = () => {
    // Calculate the score here based on the number of correct answers, etc.
    // For this example, let's assume the score is a random number between 0 and 100.
    const score = Math.floor(Math.random() * 101);

    // Open the modal and show the score
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

    console.log('quiaaa',question.data)
    return (
        <div className='quizes'>
            <h1 className='name'>{question.data.name}</h1>
            <h1 className='name'>Please Answer the Questions: {question.data.length}</h1>
            {
                question.data.questions.map(quiz => <SingleQuiz quiz = {quiz}></SingleQuiz>)
            }

<button class='quiz' onClick={handleFinishedQuiz}>Finished Quiz</button>

{/* Score Modal */}
<ReactModal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Your Score">
  <h2>Thank You for Finish The Quiz.</h2>
  <h3>We hope that this quiz will  increase your IT knowledge.</h3>
  <p>{/* Display the score here */}</p>
  <button onClick={closeModal}>Close</button>
</ReactModal>


        </div>
    );
};

export default Quiz;