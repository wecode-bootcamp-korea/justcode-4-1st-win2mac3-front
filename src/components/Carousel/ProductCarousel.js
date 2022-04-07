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
  // useEffect(() => {
  //   // console.log(`currentIndex:${currentIndex}`);
  //   // console.log(products.length);
  // }, [currentIndex]);
  function handleSwipeRight() {
    if (currentIndex <= products.length) {
      carouselInner.current.style.transition = `all 0.6s ease-out`;
      setCurrentIndex(currentIndex + 1);
    } else {
      carouselInner.current.style.transition = `all 0s`;
      setCurrentIndex(currentIndex - currentIndex);
    }

    //console.log(carouselInner.current.style.transform);
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
