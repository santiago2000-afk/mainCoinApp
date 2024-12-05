import React from 'react';

const NavbarRight = () => {
    return (
        <div className="text-white flex justify-between items-center rounded-lg p-4">
            {/* Menú de navegación */}
            <ul className="flex space-x-6 mr-2">
                <li>
                    <a 
                        href="/" 
                        className="text-white text-sm font-semibold hover:text-gray-200 focus:text-gray-200 transition duration-300"
                        aria-label="Get in touch"
                    >
                        Get in touch
                    </a>
                </li>
            </ul>

            {/* Botón "Launch App" */}
            <a
                href="/launch"  // Cambia este enlace con el que desees
                className="bg-white text-[#00ffa7] py-2 px-6 rounded-full text-sm font-semibold hover:bg-gray-100 focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 transition duration-300"
                aria-label="Launch App"
            >
                Launch App
            </a>
        </div>
    );
};

export default NavbarRight;
