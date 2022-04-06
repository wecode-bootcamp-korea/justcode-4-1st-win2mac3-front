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
    fetch(`http://localhost:3000/data/productsData.json`, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  function handleSwipeRight() {
    setCurrentIndex(currentIndex + 1);
    console.log(`currentIndex:${currentIndex}`);
    if (currentIndex > 3) {
      setCurrentIndex(0);
      carouselInner.current.style.transition = `all 0s`;
    } else if (currentIndex < 0) {
      setCurrentIndex(5);
    }
    console.log(carouselInner.current.style.transform);
  }
  function handleSwipeLeft() {
    setCurrentIndex(currentIndex - 1);
    console.log(`currentIndex:${currentIndex}`);
    if (currentIndex < 1) {
      setCurrentIndex(5);
    }
  }
  const slideMovePx = -260 * (0 + currentIndex);

  return (
    <div className="carousel-wrap">
      <div className="carousel-list">
        <div
          className="carousel-inner"
          ref={carouselInner}
          style={{
            transform: `translateX(${
              //left 값으로 -만큼 이동해야 해서 음수로 만들어줌.
              slideMovePx
              //0.5 + currentIndex면 아이템의 반절만큼 이동
            }px)`,
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
