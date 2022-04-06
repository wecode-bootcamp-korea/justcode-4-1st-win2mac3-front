import { useState, useEffect, useRef } from 'react';
import { Card } from '../Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './Carousel.scss';

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);
  const [dragItem, setDragItem] = useState({
    pressed: false,
    startX: null,
  });
  const slideWrap = useRef(null);
  const slideInner = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:3000/data/productsData.json`, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  function handleMouseDown(e) {
    const carousel = slideInner.current;
    const _startX = e.nativeEvent.offsetX - carousel.offsetLeft;
    //console.log(carousel.offsetLeft);
    setDragItem({
      pressed: true,
      startX: _startX,
    });
    carousel.style.cursor = 'grabbing';
    console.log(dragItem);
  }
  function handleMouseUp(e) {
    setDragItem({ pressed: false });
  }
  function handleMouseEnter() {
    const carousel = slideInner.current;
    carousel.style.cursor = 'grab';
  }
  function handelMouseMove(e) {
    if (!dragItem.pressed) return;
    const carousel = slideInner.current;
    let currentX = e.nativeEvent.offsetX;

    carousel.style.left = `${currentX - dragItem.startX}px`;
    //console.log(carousel.style.left, currentX);
    checkBoundery();
  }
  function checkBoundery() {
    const carousel = slideInner.current;
    let outer = slideWrap.current.getBoundingClientRect();
    let inner = slideInner.current.getBoundingClientRect();

    if (parseInt(carousel.style.left) > 0) {
      carousel.style.left = '0px';
    } else if (inner.right < outer.right) {
      carousel.style.left = `-${inner.width - outer.width}px`;
    }

    //console.log(outer);
  }
  return (
    <div className="carousel-wrap">
      <div className="carousel-list" ref={slideWrap}>
        <div
          className="carousel-inner"
          ref={slideInner}
          onMouseUp={() => {
            handleMouseEnter();
            // handleMouseUp();
          }}
          onMouseDown={handleMouseDown}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handelMouseMove}
        >
          {products.map(list => (
            <Card key={list.id} list={list} classProp="carousel-item" />
          ))}
        </div>
      </div>
      <button className="carousel-btn next">
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      <button className="carousel-btn prev">
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
    </div>
  );
};

export { ProductCarousel };
