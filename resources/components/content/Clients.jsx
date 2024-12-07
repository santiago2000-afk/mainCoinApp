import React from "react";

const Clients = () => {
  const clients = [
    { id: 1, name: "Google", logo: "https://cdn.prod.website-files.com/60118ca18674407b85935203/63fc65efad0fbf703f660c40_Group.svg" },
    { id: 2, name: "Facebook", logo: "https://cdn.prod.website-files.com/60118ca18674407b85935203/63fc65efa506caa3ad4823f0_Clip%20path%20group.svg" },
    { id: 3, name: "Twitter", logo: "https://cdn.prod.website-files.com/60118ca18674407b85935203/63fc65efb9bb103b341fa5cd_Clip%20path%20group-2.svg" },
    { id: 4, name: "Apple", logo: "https://cdn.prod.website-files.com/60118ca18674407b85935203/63fc65efc1ef8e49e36f0d5e_Mask%20group.svg" },
    { id: 5, name: "Arbiscan", logo: "https://cdn.prod.website-files.com/60118ca18674407b85935203/6406e4ac190545e3e8be2e80_logo-Arbiscan%201.webp" },
    { id: 6, name: "Chainlink", logo: "https://cdn.prod.website-files.com/60118ca18674407b85935203/65007c4041e827213d6f0e5e_chainlink.svg" },
    { id: 7, name: "Consensys", logo: "https://cdn.prod.website-files.com/60118ca18674407b85935203/65007e42315b98f799fb32a6_consensys.svg" },
    { id: 8, name: "Nansen", logo: "https://cdn.prod.website-files.com/60118ca18674407b85935203/6406e4ac9e2c94b8d843e5f3_Group%201597411.webp" },
    { id: 9, name: "LinkedIn", logo: "https://cdn.prod.website-files.com/60118ca18674407b85935203/63fc65eff87ebe7b363a9676_Group-2.svg" },
    { id: 10, name: "YouTube", logo: "https://cdn.prod.website-files.com/60118ca18674407b85935203/63fc65ef00930b089e506f34_Clip%20path%20group-3.svg" },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-8 sm:text-3xl md:text-4xl">
          Trusted by Global Leaders
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {clients.map((client) => (
            <div key={client.id} className="flex justify-center items-center p-4 bg-gray-900 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
              <img
                src={client.logo}
                alt={client.name}
                className="w-20 h-20 object-contain transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
