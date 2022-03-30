import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Header } from './Header.js';
import { SearchBar } from './SearchBar';
import './Nav.scss';

const Nav = () => {
  return (
    <div className="wrap">
      <Header />
      <nav className="nav">
        <SearchBar />
      </nav>
    </div>
  );
};

export default Nav;
