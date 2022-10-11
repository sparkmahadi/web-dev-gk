import React from 'react';
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
        <div className='p-6 border rounded-lg text-white  shadow-xl' style={{ backgroundColor: '#355c7d' }}>
            <div className="flex justify-between">
                <h6 className="text-lg mb-2 leading-5">Question {idx}: {question}</h6>
                <button onClick={showAnswer}><EyeIcon className="h-6 w-6 text-white" /></button>
            </div>
            <h5>Options:
                <div className='grid grid-cols-2 gap-2 lg:px-44'>
                    {
                        options.map((option, idx) =>
                            <div key={idx} onClick={() => handleClick(option, correctAnswer)} className='border border-dark hover:bg-blue-500 p-2 m-2 rounded-lg flex items-center'>
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