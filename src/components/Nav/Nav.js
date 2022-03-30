import { useState, useEffect } from 'react';

import { Header } from './Header.js';
import { SearchBar } from './SearchBar.js';
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
