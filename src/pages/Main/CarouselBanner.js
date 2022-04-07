import React, { useEffect, useRef, useState } from 'react';
import './CarouselBanner.scss';

function CarouselBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  let target = document.getElementsByClassName('firstCarouselContainer')[0];
  const [delay, setDelay] = useState(5000);
  const [buttonChange, setButtonChange] = useState(
    'fa-regular fa-circle-pause'
  );

  const slideToPrev = () => {
    delay === 5000 ? setDelay(5001) : setDelay(5000);
    if (currentSlide >= 1) {
      target.style.transition = 'all 1s';
      setCurrentSlide(currentSlide - 1);
    } else {
      target.style.transition = '0s';
      setCurrentSlide(4);
    }
  };

  const slideToNext = () => {
    delay === 5000 ? setDelay(5001) : setDelay(5000);
    if (currentSlide <= 3) {
      target.style.transition = 'all 1s';
      setCurrentSlide(currentSlide + 1);
    } else {
      setDelay(0);
      target.style.transition = '0s';
      setCurrentSlide(0);
    }
  };

  const stopAndGo = () => {
    if (delay !== null) {
      setDelay(null);
      setButtonChange('fa-regular fa-circle-play');
    } else {
      setDelay(5000);
      setButtonChange('fa-regular fa-circle-pause');
    }
  };

  const useInterval = (callback, delay) => {
    const savedCallback = useRef();
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useInterval(slideToNext, delay);

  const slideSpot = 0 + currentSlide * 1900;

  return (
    <div className="firstCarouselWrapper">
      <div className="backPart">
        <div
          className="firstCarouselContainer"
          style={{ transform: `translateX(-${slideSpot}px)` }}
        >
          <img src="./images/banner/main-banner-0.png" alt="mainBanner0" />
          <img src="./images/banner/main-banner-1.png" alt="mainBanner1" />
          <img src="./images/banner/main-banner-2.png" alt="mainBanner2" />
          <img src="./images/banner/main-banner-3.png" alt="mainBanner3" />
          <img src="./images/banner/main-banner-0.png" alt="mainBanner0" />
        </div>
      </div>
      <div className="sideButtonBox">
        <button className="prevBtn" onClick={slideToPrev}>
          <i className="fa-solid fa-angle-left" />
        </button>
        <button className="nextBtn" onClick={slideToNext}>
          <i className="fa-solid fa-angle-right" />
        </button>
      </div>
      <div className="playAndPauseButtonBox">
        <button className="playAndPauseBtn" onClick={stopAndGo}>
          <i class={buttonChange} />
        </button>
      </div>
    </div>
  );
}

export default CarouselBanner;
