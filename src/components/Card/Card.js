import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ quiz }) => {
    const { id, name, logo, total } = quiz
    return (
        <div className="bg-sky-100 rounded">
            <div>
                <img
                    src={logo}
                    className="object-cover w-full h-64 rounded"
                    alt=""
                />
            </div>
            <div className="px-5 py-2 flex flex-col">
                <div className="inline-block mb-3 text-sky-500 rounded-lg"
                ><p className="text-2xl text-center"><span className='uppercase font-bold'>{name}</span></p>
                    <p className='text-center text-md font-semibold'>Questions: {total}</p>
                </div>
                <Link to={`/topic/${id}`} className='bg-blue-500 hover:bg-sky-600 rounded-lg text-white text-center font-semibold'>Start Practice</Link>
            </div>
        </div>
    );
};

export default Card;