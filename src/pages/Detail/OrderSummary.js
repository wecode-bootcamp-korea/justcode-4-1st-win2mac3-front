import React, { useEffect, useState } from 'react';
import './OrderSummary.scss';

function OrderSummary({ order, rerender, countOut }) {
  const [quantity, setQuantity] = useState(order.quantity);
  const [priceStr, setPriceStr] = useState('');

  const quantityMinus = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
    rerender();
  };
  const quantityPlus = () => {
    quantity < 5 ? setQuantity(quantity + 1) : setQuantity(5);
    rerender();
  };

  const clickDeleteHandler = () => {
    countOut(order.id);
  };

  useEffect(() => {
    order.quantity = quantity;
    setPriceStr((order.price * order.quantity).toLocaleString() + '원');
  }, [order, quantity]);

  return (
    <div>
      {order.id > 0 && (
        <div className="optionSummary">
          <div className="summary">
            <span>{order.product_name}</span>
            <span className="options">
              -{order.color_name}/{order.size_name}/{order.composition_name}
            </span>
          </div>
          <div className="quantity">
            <table>
              <tr>
                <td>
                  <button onClick={quantityMinus}>
                    <i class="fa-solid fa-minus" />
                  </button>
                </td>
                <td>
                  <span>{quantity}</span>
                </td>
                <td>
                  <button onClick={quantityPlus}>
                    <i class="fa-solid fa-plus" />
                  </button>
                </td>
              </tr>
            </table>
          </div>
          <div className="price">{priceStr}</div>
          <div className="cancel" onClick={clickDeleteHandler}>
            <i class="fa-solid fa-xmark" />
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderSummary;
