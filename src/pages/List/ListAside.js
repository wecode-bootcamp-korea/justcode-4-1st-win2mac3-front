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
  //console.log(sub1Category);
  const titleType = props.title[props.type];
  //console.log(titleType);
  return (
    <aside className="sub-aside">
      <p className="category1-title">{titleType}</p>
      <ul className="category2-list">
        {titleType === '침구' && (
          <li className="category2-current">
            <Link to="#">차렵이불</Link>
          </li>
        )}
      </ul>
      {/*추후 기능 추가
      sub1Category && (
        <ul className="category2-list">
          <li>
            <Link to="#">차렵이불</Link>
          </li>
          <li className="category2-current">
            <Link to="#">패드 | 토퍼</Link>
          </li>
        </ul>
      )*/}
    </aside>
  );
};

export default ListAside;
