import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Card = list => {
  console.log(list);
  return (
    <div className="card-wrap">
      <div className="card-img-wrap">
        <div className="card-img-cover">
          <button className="card-btn cart" type="button">
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
          <button className="card-btn heart" type="button">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <Link className="card-img" to="#">
            <img src={list.image_url} alt={list.name} />
          </Link>
        </div>
      </div>
      <Link className="card-name" to="#">
        {list.name}
      </Link>
      <p className="card-price">
        <span>
          <b className="price-after">{list.price_after}</b>
          <em className="price-before">{list.price_before}</em>
        </span>

        <span className="price-discount">32%</span>
      </p>
    </div>
  );
};

export default Card;
