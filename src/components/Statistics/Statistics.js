import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, CartesianGrid, ComposedChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { QuizContext } from '../../layout/Main';



const Statistics = () => {
    const questions = useContext(QuizContext);
    return (
        <div className='min-h-screen'>
            <div data-aos="fade-left" className='m-6 md:my-10'>
                <h4 className='text-2xl text-center font-semibold'>Displayed below is a statistics of the questions available in our quiz topics.</h4>
                <p className='px-10 text-center'>Verical axis shows the total number of questions and the horizontal axis shows the topic's name.</p>

            </div>
            <div className='md:m-5 lg:mx-24 xl:mx-36'>
                <ResponsiveContainer width="100%" height={400} >
                    <ComposedChart
                        width={1000}
                        height={500}
                        data={questions}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis label={{ value: 'Topics', position: 'bottom', textAnchor: 'middle' }} dataKey="name" />
                        <YAxis label={{ value: 'Total Questions', angle: -90, position: 'insideLeft', textAnchor: 'middle' }} />
                        <Tooltip />
                        <Bar dataKey="total" barSize={20} fill="#413ea0" />
                    </ComposedChart>
                </ResponsiveContainer >
            </div >
        </div>
    );
};

export default Statistics;