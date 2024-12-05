import React, { useState, useEffect, useCallback } from "react";

const Gallery = () => {
  const categories = [
    { id: 1, name: "Nature" },
    { id: 2, name: "Technology" },
    { id: 3, name: "Cities" },
  ];

  const images = [
    { id: 1, src: "https://via.placeholder.com/800x500?text=Nature1", category: "Nature" },
    { id: 2, src: "https://via.placeholder.com/800x500?text=Tech1", category: "Technology" },
    { id: 3, src: "https://via.placeholder.com/800x500?text=City1", category: "Cities" },
  ];

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(images[0]);
  const [progresses, setProgresses] = useState({
    Nature: 0,
    Technology: 0,
    Cities: 0,
  });
  const [isProgressing, setIsProgressing] = useState(false);

  const filteredImages = images.filter(
    (image) => image.category === categories[selectedCategoryIndex].name
  );

  const changeCategory = useCallback(() => {
    setSelectedCategoryIndex((selectedCategoryIndex + 1) % categories.length);
  }, [selectedCategoryIndex]);

  const changeImage = useCallback(() => {
    const currentIndex = filteredImages.findIndex((image) => image.id === activeImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setActiveImage(filteredImages[nextIndex]);
    setProgresses((prev) => ({
      ...prev,
      [categories[selectedCategoryIndex].name]: 0,
    }));
  }, [activeImage, filteredImages, selectedCategoryIndex]);

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/800x500?text=Image+Not+Found";
  };

  useEffect(() => {
    if (isProgressing) {
      const interval = setInterval(() => {
        setProgresses((prev) => {
          const currentCategory = categories[selectedCategoryIndex].name;
          if (prev[currentCategory] >= 100) {
            setProgresses((p) => ({
              ...p,
              [currentCategory]: 0,
            }));
            setIsProgressing(false);
            changeImage();
            changeCategory();
          }
          return {
            ...prev,
            [currentCategory]: prev[currentCategory] + 3,
          };
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isProgressing, changeImage, changeCategory, selectedCategoryIndex]);

  useEffect(() => {
    setIsProgressing(true);
  }, [activeImage]);

  return (
    <section className="flex flex-col lg:flex-row py-16 text-white">
      {/* Descripción y categorías */}
      <div className="lg:w-1/3 w-full p-6 space-y-6">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-gradient-to-r from-teal-300 via-green-400 to-blue-500 bg-clip-text mb-4 drop-shadow-md">
            Discover Captivating Visuals
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed tracking-wide drop-shadow-md">
            Immerse yourself in a stunning gallery of images across multiple categories. Let your imagination run wild with breathtaking visuals.
          </p>
        </div>

        <ul className="space-y-4">
          {categories.map((category, index) => (
            <li
              key={category.id}
              className={`flex items-center space-x-4 cursor-pointer py-3 px-6 rounded-md transition-all duration-300 transform ${
                selectedCategoryIndex === index
                  ? "bg-[#00ffa7] text-black"
                  : "hover:bg-[#00ffa7] hover:text-black"
              }`}
              onClick={() => {
                setSelectedCategoryIndex(index);
                setActiveImage(
                  images.find((image) => image.category === category.name)
                );
                setProgresses((prev) => ({
                  ...prev,
                  [category.name]: 0,
                }));
              }}
            >
              <div className="relative w-2 h-16 bg-gray-700 rounded-md">
                <div
                  className="progress-bar"
                  style={{
                    height: `${progresses[category.name]}%`,
                    background: "#00ffa7",
                    transition: "height 0.1s",
                  }}
                />
              </div>
              <span
                className={`text-xl sm:text-2xl font-semibold transition-all duration-300 ${
                  selectedCategoryIndex === index ? "text-black" : "text-gray-400"
                }`}
              >
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Galería de imágenes y miniaturas */}
      <div className="lg:w-2/3 w-full p-6 space-y-6">
        <div className="mb-8 relative">
          <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-gray-800 rounded-lg overflow-hidden shadow-xl transition-all duration-500 transform hover:scale-105">
            <img
              src={activeImage.src}
              alt="Selected"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={handleImageError}
            />
          </div>
        </div>

        <div className="flex space-x-4 overflow-x-auto py-4">
          {filteredImages.map((image) => (
            <Thumbnail key={image.id} image={image} onClick={setActiveImage} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Thumbnail = React.memo(({ image, onClick }) => (
  <div
    key={image.id}
    className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gray-700 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-110 hover:opacity-80 hover:border-2 hover:border-[#00ffa7]"
    onClick={() => onClick(image)}
  >
    <img
      src={image.src}
      alt={`Thumbnail ${image.id}`}
      className="w-full h-full object-cover"
      loading="lazy"
    />
  </div>
));

export default Gallery;
