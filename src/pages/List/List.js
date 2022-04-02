import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ListAside from './ListAside';
import ListContent from './ListContent';

import './List.scss';

const List = () => {
  const params = useParams();
  //const productId = params.id;

  //const productUrl = `/products/${productInfo.id}`;

  return (
    <article className="sub-page">
      <div className="sub-header">
        <img src="#" alt="#" />
      </div>
      <div className="content-wrap list-wrap">
        <ListAside title="new" />
        <ListContent type="new" />
      </div>
    </article>
  );
};

export default List;
