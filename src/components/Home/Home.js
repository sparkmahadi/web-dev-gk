import React, { useContext } from 'react';
import Cards from '../Cards/Cards';
import Header from '../Header/Header';
import { QuizContext } from './../../App';

const Home = () => {

    return (
        <div>
            <Header></Header>
            <Cards></Cards>
        </div>
    );
};

export default Home;