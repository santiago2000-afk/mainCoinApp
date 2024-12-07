import React from "react";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <section className="pb-16 text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Reorganizar la cuadrícula para que en tablets se muestren en columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
          {/* 300M */}
          <div className="flex flex-col items-center">
            <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#00ffa7] leading-tight">
              <CountUp start={0} end={300} duration={2.5} separator="," />
            </div>
            <p className="text-xl sm:text-2xl text-gray-300 mt-2">Labelled addresses</p>
          </div>

          {/* 10.000 */}
          <div className="flex flex-col items-center">
            <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#00ffa7] leading-tight">
              <CountUp start={0} end={10000} duration={2.5} separator="," />
            </div>
            <p className="text-xl sm:text-2xl text-gray-300 mt-2">🤓 Smart Money wallets</p>
          </div>

          {/* 12+ */}
          <div className="flex flex-col items-center">
            <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#00ffa7] leading-tight">
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
