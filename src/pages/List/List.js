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
      return (
        <img
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e860acea-d10e-424f-89c0-13c8ec7097e4/new-banner-.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220407T120503Z&X-Amz-Expires=86400&X-Amz-Signature=3fbf7c4ac05a092cad92e3a278f210ab22ccdf0663d933146b6d7cec69deb796&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22new-banner-.png%22&x-id=GetObject"
          alt={urlType}
        />
      );
    } else if (urlType === 'best') {
      return (
        <img
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/91146597-38c4-4e89-9c01-f71a8d2a58c8/best-banner.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220407T121028Z&X-Amz-Expires=86400&X-Amz-Signature=0cfdf7f87c6299adfdb6ae6928c4dbf402a10f52e590e5bc5af0fe92b7c2332e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22best-banner.png%22&x-id=GetObject"
          alt={urlType}
        />
      );
    } else {
      return (
        <img
          src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/96baa22d-ecc3-4914-bd02-924248aa2640/bedding-banner.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220407T120828Z&X-Amz-Expires=86400&X-Amz-Signature=2bce4294d72dadd41a1020f3217c88f9c2c9f63f21a771d6a615a28c861b575c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bedding-banner.png%22&x-id=GetObject"
          alt={urlType}
        />
      );
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
