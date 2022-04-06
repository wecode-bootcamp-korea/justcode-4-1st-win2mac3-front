import React from 'react';
import './Main.scss';
import CarouselBanner from './CarouselBanner';

function Main() {
  return (
    <div className="mainBody">
      <div className="mainContainer">
        <div className="carouselBanner">
          <CarouselBanner />
        </div>
        <div className="secondBanner">
          <table>
            <tbody>
              <tr className="firstRow">
                <td>
                  <img src="./images/banner/ex4.jpg" alt="" />
                </td>
                <td>
                  <img src="./images/banner/ex5.jpg" alt="" />
                </td>
                <td>
                  <img src="./images/banner/ex6.jpg" alt="" />
                </td>
              </tr>
              <tr className="secondRow">
                <td>Join Us! 신규회원혜택</td>
                <td>봄이 와서 세일해 봄</td>
                <td>먼지 ZERO 프로젝트</td>
              </tr>
              <tr className="thirdRow">
                <td>지금 가입하고 데코뷰 회원혜택을 누리세요</td>
                <td>따스한 봄을 100% 즐기는 방법</td>
                <td>침구/커튼/러그 집 안 곳곳 먼지 걱정없이!</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="thirdBanner">
          <span className="thirdBannerTitle">WHAT'S NEW</span>
        </div>
      </div>
    </div>
  );
}

export default Main;
