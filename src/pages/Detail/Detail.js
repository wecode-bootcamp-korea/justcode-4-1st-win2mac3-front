import React from 'react';
import './Detail.scss';

function Detail() {
  return (
    <div className="body">
      <div className="detailWrapper">
        <div className="homeToWhere">홈 &#62; &#35;먼지제로프로젝트</div>
        <div className="detailContainer">
          <div className="imageSection">
            <img src="./images/product/product01.jpg" alt="" />
          </div>
          <div className="wordSection">
            <div className="itemName">
              <h2>드리밍 고밀도 60수 바이오워싱 차렵이불</h2>
              <span className="recommendIcon">주문폭주</span>
            </div>
            <div className="priceSection">
              <div>
                <span className="afterDiscount">79,900원</span>
                <span className="beforeDiscount">115,000원</span>
              </div>
              <span className="discountRate">31%</span>
            </div>
            <div className="itemOption">
              <table>
                <tr>
                  <td className="firstColumn itemDescription">상품설명</td>
                  <td className="itemDescription">
                    주문폭주로 인해 &#91;바이올렛 SS 이불/이불세트, 옐로우 SS
                    이불세트&#93; 구매시 4/1부터 순차적으로 배송됩니다.
                  </td>
                </tr>
                <tr>
                  <td className="firstColumn">색상</td>
                  <td>
                    <select name="itemColor">
                      <option value="none">
                        - &#91;필수&#93; 옵션을 선택해 주세요 -
                      </option>
                      <option value="yellow">옐로우</option>
                      <option value="white">화이트</option>
                      <option value="blue">블루</option>
                      <option value="pink">핑크</option>
                      <option value="violet">바이올렛</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="firstColumn">사이즈</td>
                  <td>
                    <select name="itemSize">
                      <option value="none">
                        - &#91;필수&#93; 옵션을 선택해 주세요 -
                      </option>
                      <option value="supersingle">SS</option>
                      <option value="queen">Q</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="firstColumn">구성</td>
                  <td>
                    <select name="itemCompo">
                      <option value="none">
                        - &#91;필수&#93; 옵션을 선택해 주세요 -
                      </option>
                      <option value="set1">set 1</option>
                      <option value="set2">set 2</option>
                      <option value="set3">set 3</option>
                      <option value="set4">set 4</option>
                      <option value="set5">set 5</option>
                    </select>
                  </td>
                </tr>
              </table>
            </div>
            <div className="totalPrice">
              <span className="total">TOTAL</span>
              <span className="price">0원</span>
              <span className="amount">(0개)</span>
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
