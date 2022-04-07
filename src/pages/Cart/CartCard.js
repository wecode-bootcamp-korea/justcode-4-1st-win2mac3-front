import React from 'react';
import './CartCard.scss';

function CartCard({ order, deleteItem }) {
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
      <td className="itemQuantity">{order.quantity}</td>
      <td className="itemPrice">
        {Number(order.price * order.quantity).toLocaleString() + '원'}
      </td>
      <td>무료배송</td>
      <td>
        <button onClick={deleteItem}>삭제</button>
      </td>
    </tr>
  );
}

export default CartCard;
