import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Header } from './Header';
import { faBars } from '@fortawesome/free-solid-svg-icons';

/*import { SearchBar } from './SearchBar.js';*/
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="wrap">
        <Header />
        <ul class="nav-depth1">
          <li className="nav-category">
            <FontAwesomeIcon icon={faBars} className="menu-bar" />
            <span>제품카테고리</span>
          </li>
          <li>
            <Link to="#">신상품</Link>
          </li>
          <li>
            <Link to="#">베스트</Link>
          </li>
          <li>
            <Link to="#">봄,들이기</Link>
          </li>
          <li>
            <Link to="#">데코뷰 스타일링</Link>
          </li>
          <li>
            <Link to="#">기획전</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
