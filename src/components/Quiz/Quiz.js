import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';
import { toast } from 'react-toastify';

const Quiz = () => {
    const [rightAns, setRightAns] = useState(0)

    const quizResponse = useLoaderData();
    const quizData = quizResponse.data;
    const { id, name, logo, questions, total } = quizData;

    const handleClick = (option, correctAnswer) => {
        if (option === correctAnswer) {
            toast.success('You are right!')
            setRightAns(rightAns + 1);

        }
        else {
            toast.error("You've choosen the wrong option")
        }
    }

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div data-aos="zoom-in" className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">Quiz Topic: <span className='uppercase'>{name}</span></span>
                        </span>
                    </h2>
                </div>
                <p className="text-base text-gray-700 md:text-lg">
                    Total Questions: {total}
                </p>
                {rightAns > 0 && <h5 className='inline-block text-xl mt-2 bg-green-500 text-white font-semibold px-3 py-1 rounded-lg'>Right Answers Yet : {rightAns}</h5>}
            </div>
            <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-1">
                {
                    questions.map((question, idx) => <QuizDetails key={idx} idx={idx} questionData={question} handleClick={handleClick}></QuizDetails>)
                }
            </div>
        </div>
    );
};

export default Quiz;