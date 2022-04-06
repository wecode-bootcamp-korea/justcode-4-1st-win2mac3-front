import { useState, useEffect } from 'react';
import { MenuLink, ProductLink } from './Links.js';

const NavDepth2 = show => {
  const [pageCategory, setPageCategory] = useState([]);
  const [sub1Category, setSub1Category] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/pageCategoryData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setPageCategory(data);
      });
    fetch('http://localhost:3000/data/sub1CategoryData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setSub1Category(data);
      });
  }, []);

  return (
    <div className={`nav-depth2 ${!show.show ? 'nav-disable' : ''}`}>
      <div className="content-wrap">
        <ul className="nav-depth3">
          {pageCategory.map(list => (
            <MenuLink key={list.id} list={list} />
          ))}
        </ul>

        {sub1Category.map(list => (
          <ProductLink key={list.sub1_id} list={list} />
        ))}
      </div>
    </div>
  );
};

export { NavDepth2 };
