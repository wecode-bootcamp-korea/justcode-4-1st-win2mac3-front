import { useState, useEffect, useRef } from 'react';
import { Card } from '../Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './Carousel.scss';

const ProductCarousel = () => {
  const copyDataAmount = 5;
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(copyDataAmount);
  const carousels = setCarousels();
  const carouselInner = useRef();

  useEffect(() => {
    fetch(`http://localhost:3000/data/productsData.json`, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  function handleSwipe(direction) {
    //currentIndex는 currentIndex(0)에서 direction 값(-1 혹은 1)을 더한 값으로 세팅된다.
    setCurrentIndex(currentIndex + direction);
    console.log(`currentIndex:${currentIndex},direction:${direction}`);
    //handleSlide에 이렇게 더한 값을 인자로 넘겨준다. 하지만 currentIndex 그대로를 넘겨주면 작동하지 않음.
    handleSlide(currentIndex + direction);
  }
  function handleSlide(paramIndex) {
    //인자로 들어온 paramIndex와 현재 currentIndex의 상태를 콘솔로 출력
    console.log(`paramIndex:${paramIndex}, currentIndex:${currentIndex}`);
    //currentIndex의 값을 paramIndex로 바꿔준다.
    setCurrentIndex(paramIndex);
    //paramIndex-0의 값이 -1일때
    if (paramIndex - copyDataAmount < 0) {
      //paramIndex에 products.length의 개수를 더한다.(ex:1+=8 = 9)
      paramIndex += products.length;
      //currentIndex는 값이 더해진 paramIndex로 세팅된다.(9)
      setCurrentIndex(paramIndex);
    } else if (paramIndex - copyDataAmount >= products.length) {
      //paramIndex-0의 값이 8보다 같거나 클 때, paramIndex에서 -8을 한다.(8-8||9-8)
      paramIndex -= products.length;
      //currentIndex는 값이 더해진 paramIndex로 세팅된다.(0|| 1)
      setCurrentIndex(paramIndex);
    }
  }
  function setCarousels() {
    console.log(products);
    let addedFront = [],
      addedLast = [];
    let i = 0;

    while (i < copyDataAmount) {
      addedLast.push(products[i % products.length]);
      addedFront.unshift(products[products.length - 1 - (i % products.length)]);
      i++;
    }
    //console.log(addedFront, addedLast);
    console.log(...addedFront);
    return [...addedFront, ...addedLast, ...products];
  }
  console.log(carousels);
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
          {/*products.map(list => (
            <Card key={list.id} list={list} classProp="carousel-item" />
          ))*/}
          {carousels.map(list => (
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
