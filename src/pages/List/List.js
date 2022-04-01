import { useState, useEffect } from 'react';
import Card from './Card';

import './List.scss';

const List = () => {
  const params = useParams();
  const productId = params.id;
  const [productInfo, setProductInfo] = useState();
  const productUrl = `/products/${productInfo.id}`;

  useEffect(() => {
    fetch(`data/productsData.json`, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setProductInfo(data);
      });
  }, []);
};

export default List;
