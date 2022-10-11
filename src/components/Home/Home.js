import React, { useContext } from 'react';
import Cards from '../Cards/Cards';
import Header from '../Header/Header';
import { QuizContext } from './../../App';

const Home = () => {
    // const { quizResponse } = useContext(QuizContext);
    // const quizResponse = useLoaderData();
    // const quizes = quizResponse.data;
    return (
        <div>
            <Header></Header>
            <Cards></Cards>
        </div>
    );
};

export default Home;