import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ quiz }) => {
    const { id, name, logo, total } = quiz
    return (
        <div data-aos="zoom-in" className="my-nav hover:bg-sky-700 rounded drop-shadow-lg">
            <div>
                <img
                    src={logo}
                    className="object-cover w-full h-64 rounded"
                    alt=""
                />
            </div>
            <div className="px-5 py-2 flex flex-col">
                <div className="inline-block mb-3 text-white rounded-lg"
                ><p className="text-2xl text-center"><span className='uppercase font-bold'>{name}</span></p>
                    <p className='text-center text-md'>Questions: {total}</p>
                </div>
                <Link to={`/topic/${id}`} className='bg-blue-500 hover:bg-white rounded-lg text-white hover:text-teal-900 text-center font-semibold py-1'>Start Practice</Link>
            </div>
        </div>
    );
};

export default Card;