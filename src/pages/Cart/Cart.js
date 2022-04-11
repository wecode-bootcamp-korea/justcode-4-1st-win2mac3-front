import React, { useState, useEffect } from 'react';
import './Cart.scss';
import CartCard from './CartCard';

function Cart() {
  const [orderList, setOrderList] = useState([]);
  // const [newOrderList, setNewOrderList] = useState([]);
  const token = localStorage.getItem('token') || '';
  const [user, setUser] = useState({});
  const [render, setRender] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8000/user/verify', {
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(res => setUser(res));

    fetch(`http://localhost:8000/cart/read/${user.user_id}`)
      .then(res => res.json())
      .then(res => setOrderList(res));
  }, [token, user.user_id, render]);

  console.log(orderList);

  const deleteItem = id => {
    fetch(`http://localhost:8000/cart/delete/${id}`).then(res => res.json);
    rerender();
  };

  const quantityMinus = (id, quantity) => {
    fetch('http://localhost:8000/cart/quantityminus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        quantity: quantity,
      }),
    }).then(res => res.json);
    rerender();
  };

  const quantityPlus = (id, quantity) => {
    fetch('http://localhost:8000/cart/quantityplus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        quantity: quantity,
      }),
    }).then(res => res.json);
    rerender();
  };

  const rerender = () => {
    render === 0 ? setRender(1) : setRender(0);
  };

  const totalPrice = orderList
    .map(order => order.price * order.quantity)
    .reduce(function (prev, curr) {
      return prev + curr;
    }, 0);

  const deliveryFee = totalPrice > 50000 ? 0 : 3000;

  return (
    <div className="cartBody">
      <div className="cartWrapper">
        <p>홈 &#62; 장바구니</p>
        <h2>장바구니</h2>
        <div className="cartContainer">
          <p>장바구니에 담긴 상품은 10일 동안 보관됩니다.</p>
          {orderList.length === 0 && (
            <div className="emptyCart">
              <p>장바구니가 비어 있습니다.</p>
            </div>
          )}
          {orderList.length !== 0 && (
            <div className="hasItemCart">
              <table>
                <thead>
                  <td className="cartImage">이미지</td>
                  <td className="cartDesc">상품정보</td>
                  <td className="cartQuantity">수량</td>
                  <td className="cartPrice">상품구매금액</td>
                  <td className="cartDelivery">배송비</td>
                  <td className="cartChoise">선택</td>
                </thead>
                <tbody>
                  {orderList.map(order => (
                    <CartCard
                      key={order.id}
                      order={order}
                      deleteItem={deleteItem}
                      quantityMinus={quantityMinus}
                      quantityPlus={quantityPlus}
                    />
                  ))}
                </tbody>
              </table>
              <div className="Summary">
                <div className="totalItemPrice">
                  <span>총 상품금액</span>
                  <div className="changeToWon">
                    {Number(totalPrice).toLocaleString() + '원'}
                  </div>
                </div>
                <div className="totalDeliveryFee">
                  <span>총 배송비</span>
                  <div className="changeToWon">
                    {Number(deliveryFee).toLocaleString() + '원'}
                  </div>
                </div>
                <div className="totalPayPrice">
                  <span>결제예정금액</span>
                  <div className="changeToWon">
                    {Number(totalPrice + deliveryFee).toLocaleString() + '원'}
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="cartBtn">
            <button className="chosenItemOrderBtn">선택상품주문</button>
            <button className="totalItemOrderBtn">전체상품주문</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
