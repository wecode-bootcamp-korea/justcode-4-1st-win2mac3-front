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
  function imgBanner(urlType) {
    if (urlType === 'new') {
      return <img src="/images/banner/new-banner.png" alt={urlType} />;
    } else if (urlType === 'best') {
      return <img src="/images/banner/best-banner.png" alt={urlType} />;
    } else {
      return <img src="/images/banner/bed-banner.png" alt={urlType} />;
    }
  }

  return (
    <article className="sub-page">
      <div className="sub-header">{imgBanner(urlType)}</div>
      <div className="content-wrap list-wrap">
        <ListAside type={urlType} title={typeByTitle} />
        <ListContent type={urlType} />
      </div>
    </article>
  );
};

export default List;
