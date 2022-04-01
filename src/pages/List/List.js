import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';

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
  console.log(products);
  return (
    <section>
      {products.map(list => {
        <Card key={list.id} list={list} />;
      })}
    </section>
  );
};

export default List;
