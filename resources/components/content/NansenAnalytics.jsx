import React from "react";

const NansenAnalytics = () => {
  return (
    <section className="flex items-center justify-center min-h-screen text-white px-6">
      <div className="text-center max-w-2xl">
        {/* Título */}
        <h1
          className="text-4xl sm:text-5xl lg:text-5xl font-extrabold mb-4 leading-tight tracking-tight"
          style={{
            color: "",
            fontFamily: "'Poppins', sans-serif",
            textShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
          }}
        >
          See Forward with Nansen’s Blockchain Analytics
        </h1>

        {/* Descripción */}
        <p
          className="text-base text-gray-300 mb-6"
          style={{
            fontFamily: "'Roboto', sans-serif",
            lineHeight: "1.75",
          }}
        >
          Looking for new possibilities? Discover them now.
        </p>
        {/* Botones */}
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 justify-center lg:justify-center">
            <a
              href="/get-started"
              className="bg-[#00ffa7] text-black py-3 px-6 sm:px-8 rounded-full text-md font-semibold hover:bg-[#00e890] transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#00ffa7] font-poppins shadow-lg hover:shadow-xl"
            >
              Start for free
            </a>
            <a
              href="/learn-more"
              className="bg-transparent border-2 border-[#00ffa7] py-3 px-6 sm:px-8 rounded-full text-md font-semibold text-[#00ffa7] hover:bg-[#00e890] hover:text-black transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#00ffa7] font-poppins shadow-lg hover:shadow-xl"
            >
              Get in touch
            </a>
        </div>
        
      </div>
    </section>
  );
};

export default NansenAnalytics;
