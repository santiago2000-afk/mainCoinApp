import React from "react";

const Opportunities = () => {
  return (
    <section className="text-white py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl font-extrabold mb-4 leading-snug sm:text-5xl md:text-6xl md:mb-6 lg:text-5xl lg:leading-tight lg:pt-16">
          Uncover Opportunities. <br className="hidden sm:block" /> Maximize Your Edge.
        </h2>

        {/* Description */}
        <p className="text-base text-gray-300 max-w-md mx-auto leading-relaxed sm:text-lg sm:max-w-2xl sm:mb-8 md:text-xl md:max-w-3xl lg:text-2xl lg:mb-10">
          Gain the insights and tools you need to unlock your potential. Stay ahead in a competitive landscape and take control of your success today.
        </p>
      
      </div>
    </section>
  );
};

export default Opportunities;
