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





            <h1 className='text-3xl font-bold text-center my-5'>{question.data.name}</h1>
            <h1 className='text-xl font-bold text-center'>Please Answer the Questions{question.length}</h1>
            {
                question.data.questions.map(quiz => <SingleQuiz quiz = {quiz}></SingleQuiz>)
            }

<div className='text-center'>
<button className='btn btn-outline btn-accent  my-5' onClick={handleFinishedQuiz}>Finish Quiz</button>

</div>
{/* Score Modal */}
<ReactModal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Your Score">
 <div className='text-center mt-10'>
 <h2 className='text-center text-green-600 text-2xl font-bold'>Thank You for Finish The Quiz.</h2>
  <h3 className='text-xl font-bold text-green-400 text-center'>We hope that this quiz will  increase your IT knowledge.</h3>
  <p>{/* Display the score here */}</p>
  <button className="btn btn-outline btn-accent mt-10" onClick={closeModal}>Close</button>
 </div>
</ReactModal>


        </div>
    );
};

export default Quiz;