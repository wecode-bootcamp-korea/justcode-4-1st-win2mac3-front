import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../../config';

const ListAside = props => {
  const [sub1Category, setSub1Category] = useState([]);
  const [sub2Category, setSub2Category] = useState([]);
  const type = props.type;

  useEffect(() => {
    fetch(`${BASE_URL}:8000/products/onesublist/1`, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setSub1Category(data);
      });
    fetch(`${BASE_URL}:8000/products/twosublist/1`, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setSub2Category(data);
      });
  }, []);

  const titleType = props.title[props.type];

  return (
    <aside className="sub-aside">
      <p className="category1-title">{titleType}</p>
      <ul className="category2-list">
        {titleType === '침구' && (
          <li className="category2-current">
            <Link to="/products/bed">차렵이불</Link>
          </li>
        )}
      </ul>
      {/*추후 기능 추가
      sub1Category && (
        <ul className="category2-list">
          <li className="category2-current">
            <Link to="/products/bed">차렵이불</Link>
          </li>
        </ul>
      )*/}
    </aside>
  );
};

export default ListAside;
