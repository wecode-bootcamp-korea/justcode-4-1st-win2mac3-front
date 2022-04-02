import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ListAside from './ListAside';
import ListContent from './ListContent';

import './List.scss';

const List = () => {
  const params = useParams();
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname);
  return (
    <article className="sub-page">
      <div className="sub-header">
        <img src="#" alt="#" />
      </div>
      <div className="content-wrap list-wrap">
        {pathname === '/products/new'}
        <ListAside title="new" />
        <ListContent type="new" />
      </div>
    </article>
  );
};

export default List;
