import React from 'react';
import './Main.scss';
import CarouselBanner from './CarouselBanner';
import { ProductCarousel } from '../../components/Carousel/ProductCarousel';

function Main() {
  return (
    <div className="mainBody">
      <div className="mainContainer">
        <div className="carouselBanner">
          <CarouselBanner />
        </div>
        <div className="secondBanner">
          <div className="second-item">
            <img src="./images/section/section3.jpg" alt="section1" />
            <p className="second-title">Join Us! 신규회원혜택</p>
            <small className="second-desc">
              지금 가입하고 위코뷰 회원혜택을 누리세요
            </small>
          </div>
          <div className="second-item">
            <img src="./images/section/section1.jpg" alt="section2" />
            <p className="second-title">봄이 와서 세일해 봄</p>
            <small className="second-desc">따스한 봄을 100% 즐기는 방법</small>
          </div>
          <div className="second-item">
            <img src="./images/section/section2.jpg" alt="section3" />
            <p className="second-title">먼지 ZERO 프로젝트</p>
            <small className="second-desc">
              침구/커튼/러그 집 안 곳곳 먼지 걱정없이!
            </small>
          </div>
        </div>
        <div className="thirdBanner">
          <span className="thirdBannerTitle">BEST</span>
        </div>
        <ProductCarousel />
      </div>
    </div>
  );
}

export default Main;
