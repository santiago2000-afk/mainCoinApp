import React from 'react';

const Hero = () => {
  return (
    <section className="relative text-white px-6 py-12 sm:px-12 sm:py-16 lg:px-24 lg:py-24">


      {/* Contenedor */}
      <div className="container mx-auto z-10 flex flex-col sm:flex-row items-center justify-between space-y-8 sm:space-y-0">

        {/* Columna de texto */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-6 sm:w-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight font-poppins">
            Transforma tu futuro con criptomonedas
          </h1>
          <p className="text-lg sm:text-xl opacity-80 max-w-lg mx-auto sm:mx-0 font-roboto-mono">
            Únete a la revolución de las finanzas digitales. Comienza hoy mismo con nuestra plataforma segura y confiable.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
            <a
              href="/get-started"
              className="bg-[#00ffa7] text-black py-3 px-8 rounded-full text-md font-semibold hover:bg-[#00e890] transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#00ffa7] font-poppins"
            >
              Empezar Ahora
            </a>
            <a
              href="/learn-more"
              className="bg-transparent border-2 border-[#00ffa7] py-3 px-8 rounded-full text-md font-semibold text-[#00ffa7] hover:bg-[#00e890] hover:text-black transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#00ffa7] font-poppins"
            >
              Aprende Más
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="mt-12 sm:mt-0 sm:w-1/2 flex justify-center">
          <img
            src="https://via.placeholder.com/600x400" // Reemplaza con la URL de tu imagen
            alt="Transforma tu futuro con criptomonedas"
            className="w-full max-w-md rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
