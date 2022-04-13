import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const Header = () => {
  const [logInState, setLogInState] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('http://localhost:8000/user/verify', {
        headers: {
          Authorization: token,
        },
      })
        .then(res => res.json())
        .then(res => {
          loginHandler();
        });
    }
  }, [logInState]);

  const loginHandler = () => {
    setLogInState(true);
  };

  const logoutHandler = () => {
    localStorage.clear();
    setLogInState(false);
  };

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
          {logInState === false && <Link to="/login">로그인</Link>}
          {logInState === true && <span onClick={logoutHandler}>로그아웃</span>}
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
