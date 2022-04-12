import { useState, useEffect, useRef } from 'react';
import { Card } from '../Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './Carousel.scss';

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselInner = useRef();

  useEffect(() => {
    fetch(`http://localhost:8000/products/alllist`, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, []);
  function handleSwipeRight() {
    if (currentIndex < products.length) {
      carouselInner.current.style.transition = `all 0.6s ease-out`;
      setCurrentIndex(currentIndex + 1);
      //console.log(`if문 1: ${currentIndex}`);
    } else {
      carouselInner.current.style.transition = `all 0s`;
      setCurrentIndex(currentIndex - currentIndex);
    }
  }
  function handleSwipeLeft() {
    if (currentIndex <= 0) {
      carouselInner.current.style.transition = `all 0s`;
      setCurrentIndex(products.length);
    } else {
      carouselInner.current.style.transition = `all 0.6s ease-out`;
      setCurrentIndex(currentIndex - 1);
    }
  }
  const slideMovePx = -390 * (0 + currentIndex);

  return (
    <div className="carousel-wrap">
      <div className="carousel-list">
        <div
          className="carousel-inner"
          ref={carouselInner}
          style={{
            transform: `translateX(${slideMovePx}px)`,
          }}
        >
          {products.map(list => (
            <Card key={list.id} list={list} classProp="carousel-item" />
          ))}
          {products.map(list => (
            <Card key={list.id} list={list} classProp="carousel-item" />
          ))}
        </div>
      </div>
      <button
        className="carousel-btn next"
        onClick={() => {
          handleSwipeRight();
        }}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      <button
        className="carousel-btn prev"
        onClick={() => {
          handleSwipeLeft();
        }}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
    </div>
  );
};

export { ProductCarousel };
