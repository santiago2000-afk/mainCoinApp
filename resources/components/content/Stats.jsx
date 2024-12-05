import React from "react";

const Stats = () => {
  return (
    <section className="pb-16 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-200 mb-8 sm:text-3xl md:text-4xl">
          Key Metrics
        </h2>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
          {/* 300M */}
          <div className="flex flex-col items-center">
            <div className="text-4xl sm:text-5xl font-semibold" style={{ color: "#00ffa7" }}>
              300M
            </div>
            <p className="text-lg text-gray-300 mt-2">Labelled addresses</p>
          </div>

          {/* 10.000 */}
          <div className="flex flex-col items-center">
            <div className="text-4xl sm:text-5xl font-semibold" style={{ color: "#00ffa7" }}>
              10.000
            </div>
            <p className="text-lg text-gray-300 mt-2">🤓 Smart Money wallets</p>
          </div>

          {/* 12+ */}
          <div className="flex flex-col items-center">
            <div className="text-4xl sm:text-5xl font-semibold" style={{ color: "#00ffa7" }}>
              12+
            </div>
            <p className="text-lg text-gray-300 mt-2">Chains</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;