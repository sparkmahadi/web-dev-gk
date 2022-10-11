import React, { useState } from 'react';
import { CursorArrowRaysIcon, EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizDetails = ({ questionData, idx, handleClick }) => {
    idx += 1;
    // console.log(questionData);
    const { id, correctAnswer, question, options } = questionData;

    const showAnswer = () => {
        toast.info(`Ans: ${correctAnswer}`)
    }

    return (
        <div className='p-6 border rounded shadow-sm'>
            <div className="flex justify-between">
                <h6 className="mb-2 font-semibold leading-5">Question {idx}: {question}</h6>
                <button onClick={showAnswer}><EyeIcon className="h-6 w-6 text-blue-500" /></button>
            </div>
            <h5>Options:
                <div className='grid grid-cols-2 gap-2 lg:px-44'>
                    {
                        options.map((option, idx) =>
                            <div key={idx} onClick={() => handleClick(option, correctAnswer)} className='bg-sky-100 hover:bg-sky-300 p-2 m-2 rounded-lg flex items-center'>
                                <CursorArrowRaysIcon className='h-4 w-4 mr-2'></CursorArrowRaysIcon>
                                <div className=''>{option}</div>
                                <ToastContainer position="top-center"
                                    autoClose={700}></ToastContainer>
                            </div>)
                    }
                </div>
            </h5>
        </div>
    );
};

export default QuizDetails;