import React from 'react';
import './CartCard.scss';

function CartCard({ order, deleteItem, quantityMinus, quantityPlus }) {
  const clickDeleteHandler = () => {
    deleteItem(order.id);
  };
  const clickMinusHandler = () => {
    const newQauntity = order.quantity > 1 ? order.quantity - 1 : 1;
    quantityMinus(order.id, newQauntity);
  };
  const clickPlusHandler = () => {
    const newQauntity = order.quantity < 5 ? order.quantity + 1 : 5;
    quantityPlus(order.id, newQauntity);
  };

  return (
    <tr key={order.id}>
      <td>
        <img src={order.image_url} alt="" />
      </td>
      <td>
        <h3>{order.product_name}</h3>
        <span>
          -{order.color_name}/{order.size_name}/{order.composition_name}
        </span>
      </td>
      <td className="itemQuantity">
        <button onClick={clickMinusHandler}>
          <i class="fa-solid fa-minus" />
        </button>
        {order.quantity}
        <button onClick={clickPlusHandler}>
          <i class="fa-solid fa-plus" />
        </button>
      </td>
      <td className="itemPrice">
        {Number(order.price * order.quantity).toLocaleString() + '원'}
      </td>
      <td>무료배송</td>
      <td>
        <button className="itemDelete" onClick={clickDeleteHandler}>
          삭제
        </button>
      </td>
    </tr>
  );
}

export default CartCard;
