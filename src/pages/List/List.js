import React from 'react';
import { useParams } from 'react-router-dom';
import ListAside from './ListAside';
import ListContent from './ListContent';

import './List.scss';

const typeByTitle = {
  new: '신상품',
  best: 'BEST',
  bed: '침구',
};

const List = () => {
  const params = useParams();
  const urlType = params.type;
  const bannerUrl = `http://3000:localhost/images/banner/${urlType}-banner.png`;

  return (
    <article className="sub-page">
      <div className="sub-header">
        <img src={bannerUrl} alt={urlType} />
      </div>
      <div className="content-wrap list-wrap">
        <ListAside type={urlType} title={typeByTitle} />
        <ListContent type={urlType} />
      </div>
    </article>
  );
};

export default List;
