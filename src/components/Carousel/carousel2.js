import { useState, useEffect, useRef } from 'react';
import { Card } from '../Card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './Carousel.scss';

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);
  const [dragItem, setDragItem] = useState({
    pressed: null,
    startX: null,
    transLeftOffset: null,
    dragSpeed: 1.25,
  });
  const slideInner = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:3000/data/productsData.json`, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  function handleMouseDown(e) {
    e.persist();
    const carousel = slideInner.current;
    const _startX = e.pageX - carousel.offsetLeft;
    const _transLeftOffset = this.giveMeIntValOf(
      carousel.firstChild.style.transform
    );

    setDragItem(
      {
        pressed: true,
        startX: _startX,
        transLeftOffset: _transLeftOffset,
      },
      () => {
        const { startX, transLeftOffset, dragSpeed } = dragItem;
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * dragSpeed;
        carousel.firstChildstyle.cssText = `
        transform:translateX(${transLeftOffset + walk}px);
        transition:transform 0.0s ease-in-out;
        `;
        //console.log(dragItem);
      }
    );
    console.log(giveMeIntValOf());
  }
  function giveMeIntValOf(el) {
    console.log(el);
    return parseInt(el.replace('translateX(', '').replace('px)', ''), 10);
  }
  return (
    <div className="carousel-wrap">
      <div className="carousel-list">
        <div
          className="carousel-inner"
          ref={slideInner}
          onMouseDown={handleMouseDown}
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
