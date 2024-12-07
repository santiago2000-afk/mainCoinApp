import React from 'react';

const NavbarRight = () => {
    return (
        <div className="text-white flex justify-between items-center rounded-lg p-4">
            {/* Navigation Menu */}
            <ul className="flex space-x-6 mr-4">
                <li>
                    <a 
                        href="/" 
                        className="text-white text-base font-medium tracking-wide hover:text-[#00ffa7] focus:text-[#00ffa7] transition duration-300"
                        aria-label="Get in touch"
                    >
                        Get in touch
                    </a>
                </li>
            </ul>

            {/* "Launch App" Button */}
            <a
                href="/launch" // Update this link as needed
                className="text-[#00ffa7] border-2 border-[#00ffa7] py-2 px-6 rounded-full text-base font-medium tracking-wide hover:bg-[#00ffa7] hover:text-white focus:ring-2 focus:ring-[#00ffa7] focus:ring-offset-2 transition duration-300"
                aria-label="Launch App"
            >
                Launch App
            </a>
        </div>
    );
};

export default NavbarRight;
