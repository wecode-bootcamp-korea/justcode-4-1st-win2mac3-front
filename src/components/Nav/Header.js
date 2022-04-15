import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { BASE_URL } from '../../config';

const Header = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch(`${BASE_URL}:8000/user/verify`, {
        headers: {
          Authorization: token,
        },
      }).then(res => res.json());
    }
  }, []);

  return (
    <div className="header">
      <p className="header-logo">
        <Link to="/main">
          <img src="/images/wecoview.svg" alt="logo" />
        </Link>
      </p>
      <ul className="user-service">
        <li className="user-cart">
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingBag} />
          </Link>
        </li>
        <li>
          <Link to="/signup">회원가입</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="#">
            고객센터 &nbsp;&nbsp;
            <FontAwesomeIcon icon={faCaretDown} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export { Header };
