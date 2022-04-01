import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from './Card';

import './List.scss';

const List = () => {
  const params = useParams();
  //const productId = params.id;
  const [products, setProducts] = useState([]);
  //const productUrl = `/products/${productInfo.id}`;

  useEffect(() => {
    fetch(`data/productsData.json`, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="products-list">
      {products.map(list => (
        <Card key={list.id} list={list} className="products-item" />
      ))}
    </div>
  );
};

export default List;
