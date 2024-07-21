import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

const ImageGalleryComponent = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const openFullScreen = (index) => {
    setCurrentIndex(index);
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <div className="grid  md:grid-cols-4 grid-cols-2 justify-center gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index}`}
            className="cursor-pointer h-[200px] w-[300px] "
            onClick={() => openFullScreen(index)}
          />
        ))}
      </div>

      {isFullScreen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={closeFullScreen}
          >
            <FaTimes />
          </button>
          <button
            className="absolute left-5 text-white text-3xl"
            onClick={prevImage}
          >
            <FaArrowLeft />
          </button>
          <img
            src={images[currentIndex]}
            alt={`Full Screen ${currentIndex}`}
            className="max-h-full max-w-full"
          />
          <button
            className="absolute right-5 text-white text-3xl"
            onClick={nextImage}
          >
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGalleryComponent;
