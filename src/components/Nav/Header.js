import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCart } from '@fortawesome/free-regular-svg-icons/faCart';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons/faCaretdown';

const Header = () => {
  return (
    <div className="header">
      <p className="header-logo">
        <Link to="/main">
          <img src="./images/wecoview.svg" alt="logo" />
        </Link>
        <ul className="user-service">
          <li>
            <Link to="#">
              <FontAwesomeIcon icon={faCart} />
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
              고객센터 <FontAwesomeIcon icon={faCaretDown} />
            </Link>
          </li>
        </ul>
      </p>
    </div>
  );
};
export default Header;
