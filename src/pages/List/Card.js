import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './List.scss';

const Card = () => {
  return (
    <div className="card-wrap">
      <div className="card-img-wrap">
        <div className="card-img-cover">
          <button className="card-btn" type="button">
            <i class="fa-regular fa-cart-shopping" />
          </button>
          <button className="card-btn" type="button">
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
        <Link className="card-img">
          <img
            src="https://images.pexels.com/photos/1421176/pexels-photo-1421176.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="product1"
          />
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
