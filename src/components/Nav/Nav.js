import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Header } from './Header';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { NavDepth2 } from './NavDepth2.js';
import './Nav.scss';

const Nav = () => {
  let [clicked, setClicked] = useState(false);

  function handleCategory() {
    !clicked ? setClicked(true) : setClicked(false);
  }

  return (
    <nav className="nav-wrap">
      <div className="content-wrap">
        <Header />
        <div className="nav">
          <ul className="nav-depth1">
            <li className="nav-category" onClick={handleCategory}>
              <FontAwesomeIcon icon={faBars} className="menu-bar" />
              <span>제품카테고리</span>
            </li>
            <li>
              <Link to="/products/new">신상품</Link>
            </li>
            <li>
              <Link to="/products/best">베스트</Link>
            </li>
            <li>
              <Link to="/products/best">봄,들이기</Link>
            </li>
            <li>
              <Link to="/products/best">위코뷰 스타일링</Link>
            </li>
            <li>
              <Link to="/products/best">기획전</Link>
            </li>
          </ul>
          <div className="search-section">
            <input type="text" className="search-input" />
            <button className="search-btn">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
      </div>
      <NavDepth2 show={clicked} />
    </nav>
  );
};

export default Nav;
