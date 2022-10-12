import React from 'react';
import Option from '../Option/Option';
import './SingleQuiz.css'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleQuiz = ({quiz}) => {


 const correctAnswer = (quiz) =>{
// console.log('correct answer is ',quiz)
const correct = quiz.correctAnswer;
alert( correct)
document.getElementById('para').innerText = correct;
 }

    
    // console.log('rafat',quiz)



    const optionChacker = (quiz)=>{
        console.log('optionChacker', quiz)
        if(quiz.correctAnswer === quiz.options[0]){
            alert('Your answer is correct')
        }
        // else if(quiz.correctAnswer === quiz.options[1]){
        //     console.log('Your Answer is correct')
        // }
        
        else{
            alert('Your answer is wrong')
        }
    }

    const secondChacker= (quiz) =>{
        if(quiz.correctAnswer === quiz.options[1]){
           alert('Your Answer is Right')
        }
        else{
            alert('Your answer is wrong')
        }
    }


    const thirdChacker = () =>{
        if(quiz.correctAnswer===quiz.options[2]){
                alert('Your Answer is Correct')
        }
        else{
            alert('Your answer is Wrong')
        }
    }

    const fourthChacker = () =>{
        if(quiz.correctAnswer===quiz.options[3]){
            alert('Your answer is correct')
        }
        else{
            alert('Your answer is wrong')
        }
    }

 
    
    return (
        <div className='border'>
            <div className="flex">
            <h1 className='style'>Question: {quiz.question} 
            {/* {<p id='para'></p>} */}
            </h1>

            <FontAwesomeIcon onClick={()=>correctAnswer(quiz)} className='eye' icon={faEye}></FontAwesomeIcon>
            </div>

            <button onClick={()=>optionChacker(quiz)}>
            <h2>1.{quiz.options[0]}</h2>
            

            </button>
            <button onClick={()=>secondChacker(quiz)}>
                
            <h2>2.{quiz.options[1]}</h2>
            </button>
            <button>
                
            <h2 onClick={(()=>thirdChacker(quiz))}>3.{quiz.options[2]}</h2>
            </button>
            <button onClick={()=>fourthChacker(quiz)}>
                
            <h2>4.{quiz.options[3]}</h2>
            </button>
        </div>
    );
};

export default SingleQuiz;