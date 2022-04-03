import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function MenuLink({ list }) {
  return (
    <li>
      <Link to={list.pageUrl}>{list.categoryName}</Link>
    </li>
  );
}

function ProductLink({ list }) {
  const [sub2Category, setSub2Category] = useState([]);
  useEffect(() => {
    fetch('./data/sub2CategoryData.json')
      .then(res => res.json())
      .then(data => {
        setSub2Category(data);
      });
  }, []);

  return (
    <div className="nav-depth3">
      <p className="sub1-category">
        <Link to={list.sub1_url}>{list.sub1_name}</Link>
      </p>
      {sub2Category &&
        sub2Category.map(subList => {
          return (
            <p key={subList.sub2_id} className="sub2-category">
              <Link to={subList.sub2_url}>{subList.sub2_name}</Link>
            </p>
          );
        })}
    </div>
  );
}
export { MenuLink, ProductLink };
