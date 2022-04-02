import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Card } from '../../components/Card/Card';

const ListContent = props => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`data/productsData.json`, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, []);
  console.log(props);
  console.log(products);
  return (
    <section className="sub-content">
      <div className="sub-content-head">
        <small className="products-amount">총 {products.length}건</small>
        <p className="products-sort">
          <b>상품정렬 </b>
          <FontAwesomeIcon icon={faAngleDown} />
        </p>
      </div>
      <div className="products-list">
        {products.map(list => (
          <Card key={list.id} list={list} className="products-item" />
        ))}
      </div>
    </section>
  );
};

export default ListContent;
