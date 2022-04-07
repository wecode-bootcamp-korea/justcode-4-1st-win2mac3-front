import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ListAside = props => {
  const [sub1Category, setSub1Category] = useState([]);
  const [sub2Category, setSub2Category] = useState([]);
  const type = props.type;

  useEffect(() => {
    fetch(`http://localhost:3000/data/sub1CategoryData.json`, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setSub1Category(data);
      });
    fetch(`http://localhost:3000/data/sub2CategoryData.json`, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setSub2Category(data);
      });
  }, []);

  const titleType = props.title[props.type];

  return (
    <aside className="sub-aside">
      <p className="category1-title">{titleType}</p>
      {titleType === '침구' && (
        <ul className="category2-list">
          <li className="category2-current">
            <Link to="/products/bed">차렵이불</Link>
          </li>
        </ul>
      )}
    </aside>
  );
};

export default ListAside;
