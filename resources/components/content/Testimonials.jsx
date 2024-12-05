import React, { useState } from "react";

const Testimonials = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "John Doe",
      title: "CEO of Example Corp",
      image: "https://via.placeholder.com/150",
      comment:
        "This is a fantastic platform. It provides everything I need to streamline my business operations. Highly recommend it!",
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Founder of Tech Innovators",
      image: "https://via.placeholder.com/150",
      comment:
        "The user interface is incredibly intuitive, and the customer support is excellent. This site is a game-changer for our team!",
    },
    {
      id: 3,
      name: "Carlos Perez",
      title: "CTO of Green Solutions",
      image: "https://via.placeholder.com/150",
      comment:
        "I am impressed with the features and functionalities offered. It's exactly what we needed to improve our project management.",
    },
  ]);

  return (
    <section className="py-8 sm:py-16">
      <div className="container mx-auto text-center text-white px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-12 text-shadow-lg">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-gray-800 p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
            >
              <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 mb-6">
                <img
                  src={comment.image}
                  alt={comment.name}
                  className="w-20 h-20 rounded-full border-4 border-white mb-4 sm:mb-0"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-semibold text-gray-100">{comment.name}</h3>
                  <p className="text-sm text-gray-400">{comment.title}</p>
                </div>
              </div>

              <p className="text-lg text-gray-300 mb-6">{comment.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;