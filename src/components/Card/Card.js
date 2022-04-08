import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Card.scss';

const Card = list => {
  const navigate = useNavigate();
  const listData = list.list;

  const priceAfter = Number(listData.price_after).toLocaleString() + '원';
  const priceBefore = Number(listData.price_before).toLocaleString() + '원';
  const discountRate =
    Math.round((1 - listData.price_after / listData.price_before) * 100) + '%';

  const goToLogin = () => {
    alert('로그인 후 이용 가능한 서비스입니다.');
    navigate('/login');
  };

  return (
    <div className={list.classProp}>
      <div className="card-wrap">
        <div className="card-img-wrap">
          <div className="card-img-cover">
            <button
              className="card-btn cart"
              type="button"
              onClick={() => {
                navigate('/cart');
              }}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
            <button
              className="card-btn heart"
              type="button"
              onClick={goToLogin}
            >
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <Link className="card-img" to={`/detail/` + listData.id}>
              <img src={listData.image_url} alt={listData.name} />
            </Link>
          </div>
        </div>
        <Link className="card-name" to={`/detail/` + listData.id}>
          {listData.name}
        </Link>
        <p className="card-price">
          <span>
            <b className="price-after">{priceAfter}</b>
            <em className="price-before">{priceBefore}</em>
          </span>

          <span className="price-discount">{discountRate}</span>
        </p>
      </div>
    </div>
  );
};

export { Card };
