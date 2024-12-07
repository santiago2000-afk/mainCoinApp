import React from "react";

const NansenAnalytics = () => {
  return (
    <section className="flex items-center justify-center min-h-screen text-white px-6 py-8">
      <div className="text-center max-w-2xl">
        {/* Título */}
        <h1
          className="text-4xl font-extrabold mb-4 leading-tight tracking-tight"
          style={{
            color: "#00ffa7",
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
        <div className="flex flex-col gap-3">
          <button
            className="px-6 py-3 text-sm md:text-base font-bold rounded-full text-gray-900 bg-[#00ffa7] hover:bg-[#00e69a] transition-all duration-300 shadow-md hover:shadow-lg"
            style={{
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Start for free
          </button>
          <button
            className="px-6 py-3 text-sm md:text-base font-bold rounded-full border-2 border-[#00ffa7] text-[#00ffa7] hover:bg-[#00ffa7] hover:text-gray-900 transition-all duration-300 shadow-md hover:shadow-lg"
            style={{
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default NansenAnalytics;
