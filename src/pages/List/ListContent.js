import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Card } from '../../components/Card/Card';

const ListContent = props => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (props.type === 'bed') {
      fetch('http://localhost:8000/products/alllist', { method: 'GET' })
        .then(res => res.json())
        .then(data => {
          setProducts(data);
        });
    } else if (props.type === 'best') {
      fetch('http://localhost:8000/products/allbestlist', { method: 'GET' })
        .then(res => res.json())
        .then(data => {
          setProducts(data);
        });
    } else if (props.type === 'new') {
      fetch('http://localhost:8000/products/allnewlist', { method: 'GET' })
        .then(res => res.json())
        .then(data => {
          setProducts(data);
        });
    }
  }, [props.type]);

  return (
    <section className="sub-content">
      <div className="sub-content-head">
        <small className="products-amount">
          총 {products && products.length}건
        </small>
        <p className="products-sort">
          <b>상품정렬 </b>
          <FontAwesomeIcon icon={faAngleDown} />
        </p>
      </div>
      <div className="products-list">
        {products.map(list => (
          <Card key={list.id} list={list} classProp="products-item" />
        ))}
        <div className="card-img-fake" />
        <div className="card-img-fake" />
        <div className="card-img-fake" />
      </div>
    </section>
  );
};

export default ListContent;
