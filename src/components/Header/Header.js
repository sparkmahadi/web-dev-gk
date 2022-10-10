import React from 'react';

const Header = () => {
    return (
        <div className="relative">
            <img
                src="hero-image.png"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-gray-800 bg-opacity-75">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-20 lg:py-20">
                    <div>
                        <div className="w-full mb-12 xl:mb-0 xl:pr-16 text-center">
                            <h2 className="mb-2 font-sans text-3xl font-bold tracking-tight text-white sm:text-3xl">
                                Why Will You Join to <br />
                            </h2>
                            <h2><span className="font-sans text-3xl font-bold tracking-tight text-sky-200 sm:text-6xl">WEB DEV GK</span></h2>
                            <p className="p-4 px-20 text-gray-400 md:text-lg">
                                It stands for Web Development General Knowledge. You can improve your development skills by practicing and learning the quiz updated here. It will show you the abilities you've earned till now.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;