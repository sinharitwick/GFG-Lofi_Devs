import React, { useState } from 'react';
import './slider.css'; // Import CSS file for styling

const CardSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePrevSlide = () => {
    setSlideIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextSlide = () => {
    setSlideIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="card-slider">
      <div className="card-slider-content" style={{ transform: `translateX(-${slideIndex * 25}%)` }}>
        {/* Card 1 */}
        <div className="card">
          {/* Card content */}
          hello1
        </div>

        {/* Card 2 */}
        <div className="card">
          {/* Card content */}
          hello2
        </div>

        {/* Card 3 */}
        <div className="card">
          {/* Card content */}
          hello3
        </div>

        {/* Card 4 */}
        <div className="card">
          {/* Card content */}
          hello4
        </div>

        {/* Card 5 */}
        <div className="card">
          {/* Card content */}
          hello5
        </div>
      </div>

      {/* Navigation buttons */}
      <button className="slider-button prev" onClick={handlePrevSlide} disabled={slideIndex === 0}>
        Prev
      </button>
      <button className="slider-button next" onClick={handleNextSlide} disabled={slideIndex === 1}>
        Next
      </button>
    </div>
  );
};

export default CardSlider;
