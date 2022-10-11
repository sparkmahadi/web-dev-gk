import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';

export const QuizContext = createContext([]);

const Main = () => {
    const quizResponse = useLoaderData();
    const quizes = quizResponse.data;
    return (
        <div>
            <QuizContext.Provider value={quizes}>
                <Nav></Nav>
                <Outlet></Outlet>
                <Footer></Footer>
            </QuizContext.Provider>
        </div>
    );
};

export default Main;