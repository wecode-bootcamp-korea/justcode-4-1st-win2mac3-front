import React, { useEffect, useState } from 'react';
import './Detail.scss';
import OrderSummary from './OrderSummary';

function Detail() {
  const [productInfo, setProductInfo] = useState({});
  const [productColor, setProductColor] = useState([{}]);
  const [productSize, setProductSize] = useState([{}]);
  const [productComposition, setProductComposition] = useState([{}]);

  useEffect(() => {
    fetch('./data/product_detail.json')
      .then(res => res.json())
      .then(res => setProductInfo(res));
  }, []);

  let priceAfter = Number(productInfo.price_after).toLocaleString() + '원';
  let priceBefore = Number(productInfo.price_before).toLocaleString() + '원';
  let discountRate =
    Math.round((1 - productInfo.price_after / productInfo.price_before) * 100) +
    '%';

  useEffect(() => {
    fetch('./data/colors_table.json')
      .then(res => res.json())
      .then(res => setProductColor(res));
  }, []);

  useEffect(() => {
    fetch('./data/sizes_table.json')
      .then(res => res.json())
      .then(res => setProductSize(res));
  }, []);

  useEffect(() => {
    fetch('./data/compositions_table.json')
      .then(res => res.json())
      .then(res => setProductComposition(res));
  }, []);

  const [currentColor, setCurrentColor] = useState('none');
  const [currentSize, setCurrentSize] = useState('none');
  const [currentComposition, setCurrentComposition] = useState('none');
  const [orderSummary, setOrderSummary] = useState(false);
  const [orderInfo, setOrderInfo] = useState({
    orderList: [{ id: 0, price: 0, quantity: 0 }],
  });
  const [totalPrice, setTotalPrice] = useState('');
  const [totalQuantity, setTotalQuantity] = useState('');

  const pickColor = e => {
    setCurrentColor(productColor.filter(obj => obj.value === e.target.value));
  };

  const pickSize = e => {
    setCurrentSize(productSize.filter(obj => obj.value === e.target.value));
  };

  const pickComposition = e => {
    setCurrentComposition(
      productComposition.filter(obj => obj.value === e.target.value)
    );
  };

  useEffect(() => {
    currentColor[0].value !== undefined &&
    currentSize[0].value !== undefined &&
    currentComposition[0].value !== undefined &&
    currentColor[0].value !== 'none' &&
    currentSize[0].value !== 'none' &&
    currentComposition[0].value !== 'none'
      ? setOrderSummary(true)
      : setOrderSummary(false);
  }, [currentColor, currentSize, currentComposition]);

  useEffect(() => {
    if (orderSummary) {
      orderInfo.orderList.push({
        id: orderInfo.orderList[orderInfo.orderList.length - 1].id + 1,
        product_id: productInfo.id,
        product_name: productInfo.name,
        color_id: currentColor[0].id,
        color_name: currentColor[0].name,
        size_id: currentSize[0].id,
        size_name: currentSize[0].name,
        composition_id: currentComposition[0].id,
        composition_name: currentComposition[0].name,
        price:
          productInfo.price_after +
          currentSize[0].price_add +
          currentComposition[0].price_add,
        quantity: 1,
      });
      setOrderInfo({
        orderList: orderInfo.orderList,
      });
    }
    setTotalPrice(
      Number(
        orderInfo.orderList
          .map(order => order.price * order.quantity)
          .reduce(function (prev, curr) {
            return prev + curr;
          }, 0)
      ).toLocaleString() + '원'
    );
    setTotalQuantity(
      Number(
        orderInfo.orderList
          .map(order => order.quantity)
          .reduce(function (prev, curr) {
            return prev + curr;
          }, 0)
      ).toLocaleString() + '개'
    );
  }, [
    currentColor,
    currentComposition,
    currentSize,
    orderInfo.orderList,
    orderSummary,
    productComposition,
    productInfo.id,
    productInfo.name,
    productInfo.price_after,
  ]);

  console.log(orderInfo.orderList);
  console.log(totalPrice);

  return (
    <div className="body">
      <div className="detailWrapper">
        <div className="homeToWhere">
          홈 &#62; {productInfo.one_sub_category} &#62;{' '}
          {productInfo.two_sub_category}
        </div>
        <div className="detailContainer">
          <div className="imageSection">
            <img src={productInfo.image_url} alt="" />
          </div>
          <div className="wordSection">
            <div className="itemName">
              <h2>{productInfo.name}</h2>
              <span className="recommendIcon">주문폭주</span>
            </div>
            <div className="priceSection">
              <div>
                <span className="afterDiscount">{priceAfter}</span>
                <span className="beforeDiscount">{priceBefore}</span>
              </div>
              <span className="discountRate">{discountRate}</span>
            </div>
            <div className="itemOption">
              <table>
                <tr>
                  <td className="firstColumn itemDescription">상품설명</td>
                  <td className="itemDescription">{productInfo.description}</td>
                </tr>
                <tr>
                  <td className="firstColumn">색상</td>
                  <td>
                    <select name="itemColor" onChange={pickColor}>
                      <option value="none">
                        - &#91;필수&#93; 옵션을 선택해 주세요 -
                      </option>
                      {productColor.map(color => (
                        <option key={color.value} value={color.value}>
                          {color.name}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="firstColumn">사이즈</td>
                  <td>
                    <select name="itemSize" onChange={pickSize}>
                      <option value="none">
                        - &#91;필수&#93; 옵션을 선택해 주세요 -
                      </option>
                      {productSize.map(size => (
                        <option key={size.value} value={size.value}>
                          {size.name}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="firstColumn">구성</td>
                  <td>
                    <select name="itemComposition" onChange={pickComposition}>
                      <option value="none">
                        - &#91;필수&#93; 옵션을 선택해 주세요 -
                      </option>
                      {productComposition.map(composition => (
                        <option
                          key={composition.value}
                          value={composition.value}
                        >
                          {composition.name}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              </table>
            </div>
            {orderInfo.orderList.map(order => (
              <OrderSummary key={order.id} order={order} />
            ))}
            <div className="totalPrice">
              <span className="total">TOTAL</span>
              <span className="price">{totalPrice}</span>
              <span className="amount">({totalQuantity})</span>
            </div>
            <div className="buyBtnSection">
              <button className="buyBtn">구매하기</button>
              <div>
                <button className="cartBtn">장바구니</button>
                <button className="keepBtn">찜하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
