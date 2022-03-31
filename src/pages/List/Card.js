import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './List.scss';

const Card = () => {
  return (
    <div className="card-wrap">
      <div className="card-img-wrap">
        <div className="card-img-cover">
          <button className="card-btn" type="button">
            장바구니 버튼
          </button>
          <button className="card-btn" type="button">
            관심상품 버튼
          </button>
        </div>
        <Link className="card-img">
          <img src="" alt="" />
        </Link>
      </div>
      <span className="card-name">미스티블루 드로잉 주방매트</span>
      <p className="card-price">
        <dl>
          <dt>53,000</dt>
          <dd>40,000</dd>
        </dl>
        <span>32%</span>
      </p>
    </div>
  );
};

export default Card;
