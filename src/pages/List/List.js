import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Card } from '../../components/Card/Card';

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
    <article className="sub-page">
      <div className="sub-header" />
      <div className="content-wrap list-wrap">
        <aside className="sub-aside">
          <p className="category1-title">신상품</p>
          <ul className="category2-list">
            <li>
              <Link to="#">차렵이불</Link>
            </li>
            <li className="category2-current">
              <Link to="#">패드 | 토퍼</Link>
            </li>
          </ul>
        </aside>
        <section className="sub-content">
          <div className="sub-content-head">
            <small className="products-amount">총 91건</small>
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
      </div>
    </article>
  );
};

export default List;
