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
  function handleSwipe(direction) {
    setCurrentIndex(currentIndex => currentIndex + direction);

    //console.log(currentIndex,carouselInner.current.style.transform);
  }
  function handleSlide(index) {
    if (index < 0) {
      index = products.length - 1;
    } else if (index > products.length) {
      index = 0;
    }
  }
  function slideCopy() {
    let addedFront = [],
      addedLast = [];
    let index = 0;
    let addCount = 5;
    while (index < addCount) {
      addedLast.push(products[index % products.length]);
      addedFront.unshift(
        products[products.length - 1 - (index % products.length)]
      );
      console.log(...addedFront, ...addedLast, ...products);
    }
  }

  return (
    <div className="carousel-wrap">
      <div className="carousel-list">
        <div
          className="carousel-inner"
          ref={carouselInner}
          style={{
            transform: `translateX(${
              //left 값으로 -만큼 이동해야 해서 음수로 만들어줌.
              (-100 / 10) * (0 + currentIndex)
              //0.5 + currentIndex면 아이템의 반절만큼 이동
            }%)`,
          }}
        >
          {products.map(list => (
            <Card key={list.id} list={list} classProp="carousel-item" />
          ))}
        </div>
      </div>
      <button
        className="carousel-btn next"
        onClick={() => {
          handleSwipe(-1);
        }}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      <button
        className="carousel-btn prev"
        onClick={() => {
          handleSwipe(1);
        }}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
    </div>
  );
};

export { ProductCarousel };
