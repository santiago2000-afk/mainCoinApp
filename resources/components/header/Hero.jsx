import React from 'react';

const Hero = () => {
  return (
    <section className="relative text-white px-6 py-12 sm:py-16 lg:py-28">
      {/* Contenedor */}
      <div className="container mx-auto flex flex-col md:flex-col lg:flex-row items-center justify-between gap-8">
        {/* Columna de texto */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight font-poppins">
            Surface the Signal, Become Smart Money
          </h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-80 max-w-md lg:max-w-lg mx-auto lg:mx-0 font-roboto-mono">
            Empowering Crypto Investors and Teams With Onchain Insights To Make Informed Decisions.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 justify-center lg:justify-start">
            <a
              href="/get-started"
              className="bg-[#00ffa7] text-black py-3 px-6 sm:px-8 rounded-full text-md font-semibold hover:bg-[#00e890] transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#00ffa7] font-poppins shadow-lg hover:shadow-xl"
            >
              Launch App
            </a>
            <a
              href="/learn-more"
              className="bg-transparent border-2 border-[#00ffa7] py-3 px-6 sm:px-8 rounded-full text-md font-semibold text-[#00ffa7] hover:bg-[#00e890] hover:text-black transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#00ffa7] font-poppins shadow-lg hover:shadow-xl"
            >
              Explore Pricing
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img
            src="" // Reemplaza con la URL de tu imagen
            alt="Transforma tu futuro con criptomonedas"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
