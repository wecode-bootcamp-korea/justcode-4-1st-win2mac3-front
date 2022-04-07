import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.scss';
import OrderSummary from './OrderSummary';

function Detail() {
  const [productInfo, setProductInfo] = useState({});
  const [productColor, setProductColor] = useState([{}]);
  const [productSize, setProductSize] = useState([{}]);
  const [productComposition, setProductComposition] = useState([{}]);
  const [user, setUser] = useState({});

  const params = useParams();
  const urlById = params.id;

  const token = localStorage.getItem('token') || '';

  useEffect(() => {
    fetch('http://localhost:8000/user/verify', {
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(res => setUser(res));

    fetch(`http://localhost:8000/products/detail/${urlById}`)
      .then(res => res.json())
      .then(res => setProductInfo(res));
    fetch('http://localhost:8000/products/detail/colors')
      .then(res => res.json())
      .then(res => setProductColor(res));
    fetch('http://localhost:8000/products/detail/sizes')
      .then(res => res.json())
      .then(res => setProductSize(res));
    fetch('http://localhost:8000/products/detail/compositions')
      .then(res => res.json())
      .then(res => setProductComposition(res));
  }, [token, urlById]);

  let priceAfter = Number(productInfo.price_after).toLocaleString() + '원';
  let priceBefore = Number(productInfo.price_before).toLocaleString() + '원';
  let discountRate =
    Math.round((1 - productInfo.price_after / productInfo.price_before) * 100) +
    '%';
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const [composition, setComposition] = useState();
  const [currentColor, setCurrentColor] = useState([{}]);
  const [currentSize, setCurrentSize] = useState([{}]);
  const [currentComposition, setCurrentComposition] = useState([{}]);
  const [orderSummary, setOrderSummary] = useState(false);
  const [orderInfo, setOrderInfo] = useState({
    orderList: [{ id: 0, price: 0, quantity: 0 }],
  });
  const [totalPrice, setTotalPrice] = useState('');
  const [totalQuantity, setTotalQuantity] = useState('');
  const [render, setRender] = useState(0);

  const pickColor = e => {
    if (e.target.value !== 'none') {
      setCurrentColor(productColor.filter(obj => obj.value === e.target.value));
      setColor(e.target.value);
    }
  };

  const pickSize = e => {
    if (e.target.value !== 'none') {
      setCurrentSize(productSize.filter(obj => obj.value === e.target.value));
      setSize(e.target.value);
    }
  };

  const pickComposition = e => {
    if (e.target.value !== 'none') {
      setCurrentComposition(
        productComposition.filter(obj => obj.value === e.target.value)
      );
      setComposition(e.target.value);
    }
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
        user_id: user.user_id,
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
      if (orderInfo.orderList[0].id === 0) {
        orderInfo.orderList.shift();
      }
      setOrderInfo({
        orderList: orderInfo.orderList,
      });
      setOrderSummary(false);

      setCurrentColor([{}]);
      setCurrentSize([{}]);
      setCurrentComposition([{}]);

      setColor('none');
      setSize('none');
      setComposition('none');
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
    productColor,
    productComposition,
    productInfo.id,
    productInfo.name,
    productInfo.price_after,
    productSize,
    render,
    user.user_id,
  ]);

  // console.log(totalPrice);
  // console.log(render);
  console.log(orderInfo.orderList);

  const rerender = () => {
    render === 0 ? setRender(1) : setRender(0);
  };

  const countOut = id => {
    const newOrder = orderInfo.orderList.filter(obj => obj.id !== id);
    setOrderInfo({ orderList: newOrder });
  };

  const sendOrderForm = () => {
    fetch('http://localhost:8000/cart/write', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderInfo.orderList),
    }).then(res => res.json());
  };

  return (
    <div className="detailBody">
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
                <tbody>
                  <tr>
                    <td className="firstColumn itemDescription">상품설명</td>
                    <td className="itemDescription">
                      {productInfo.description}
                    </td>
                  </tr>
                  <tr>
                    <td className="firstColumn">색상</td>
                    <td>
                      <select
                        name="itemColor"
                        value={color}
                        onChange={pickColor}
                      >
                        <option value="none">
                          - &#91;필수&#93; 옵션을 선택해 주세요 -
                        </option>
                        {productColor.map(color => (
                          <option key={color.id} value={color.value}>
                            {color.name}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="firstColumn">사이즈</td>
                    <td>
                      <select name="itemSize" value={size} onChange={pickSize}>
                        <option value="none">
                          - &#91;필수&#93; 옵션을 선택해 주세요 -
                        </option>
                        {productSize.map(size => (
                          <option key={size.id} value={size.value}>
                            {size.name}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="firstColumn">구성</td>
                    <td>
                      <select
                        name="itemComposition"
                        value={composition}
                        onChange={pickComposition}
                      >
                        <option value="none">
                          - &#91;필수&#93; 옵션을 선택해 주세요 -
                        </option>
                        {productComposition.map(composition => (
                          <option
                            key={composition.id}
                            value={composition.value}
                          >
                            {composition.name}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {orderInfo.orderList.map(order => (
              <OrderSummary
                key={order.id}
                order={order}
                rerender={rerender}
                countOut={countOut}
              />
            ))}
            <div className="totalPrice">
              <span className="total">TOTAL</span>
              <span className="price">{totalPrice}</span>
              <span className="amount">({totalQuantity})</span>
            </div>
            <div className="buyBtnSection">
              <button className="buyBtn">구매하기</button>
              <div>
                <button className="cartBtn" onClick={sendOrderForm}>
                  장바구니
                </button>
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
