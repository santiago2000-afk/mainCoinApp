import React from "react";

const Opportunities = () => {
  return (
    <section className="py-12 text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Título */}
        <h2 className="text-3xl font-extrabold mb-4 leading-snug sm:text-4xl md:text-5xl md:mb-6 lg:text-6xl lg:leading-tight">
          Uncover Opportunities. <br className="hidden sm:block" /> Maximize Your Edge.
        </h2>

        {/* Descripción */}
        <p className="text-base text-gray-300 mb-6 max-w-md mx-auto leading-relaxed sm:text-lg sm:max-w-2xl sm:mb-8 md:text-xl md:max-w-3xl lg:text-2xl lg:mb-10">
          Gain the insights and tools you need to unlock your potential. Stay ahead in a competitive landscape and take control of your success today.
        </p>

      </div>
    </section>
  );
};

export default Opportunities;
