import React, { useState } from 'react';

const Banner = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white p-4 shadow-md flex justify-between items-center flex-col sm:flex-row">
            <div className="flex flex-col sm:flex-row items-center justify-center text-center sm:text-left w-full">
                <h2 className="text-[14px] font-bold mr-4 sm:text-[16px] sm:mr-6">
                    Solana is now free for all Nansen users
                </h2>
                <a
                    href="http://"
                    className="bg-white text-black py-2 px-6 rounded-full text-xs font-semibold hover:bg-gray-100 transition duration-300 mt-3 sm:mt-0"
                >
                    Explore Now
                </a>
            </div>
            <div className="flex items-center">
                <button
                    onClick={handleClose}
                    className="text-white text-2xl font-bold hover:text-gray-300"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default Banner;
