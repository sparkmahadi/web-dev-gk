import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import { QuizContext } from './../../layout/Main';

const Cards = () => {
    const quizes = useContext(QuizContext);
    return (
        <div className="min-h-screen px-4 py-16 mb-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h4 className='my-nav text-3xl text-center text-white mb-5 p-2 rounded-lg'>Select Your Favourite Topic</h4>
            <div className="grid gap-5 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
                {
                    quizes.map(quiz => <Card key={quiz.id} quiz={quiz}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;