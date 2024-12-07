import React from "react";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <section className="pb-6 text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Reorganizar la cuadrícula */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 300M */}
          <div className="flex flex-col items-center">
            <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
              <CountUp start={0} end={300} duration={2.5} separator="," />
            </div>
            <p className="text-xl sm:text-2xl text-gray-300 mt-2">Labelled addresses</p>
          </div>

          {/* 10.000 */}
          <div className="flex flex-col items-center">
            <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
              <CountUp start={0} end={10000} duration={2.5} separator="," />
            </div>
            <p className="text-xl sm:text-2xl text-gray-300 mt-2">🤓 Smart Money wallets</p>
          </div>

          {/* 12+ */}
          <div className="flex flex-col items-center">
            <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
              <CountUp start={0} end={12} duration={2.5} />
            </div>
            <p className="text-xl sm:text-2xl text-gray-300 mt-2">Chains</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
