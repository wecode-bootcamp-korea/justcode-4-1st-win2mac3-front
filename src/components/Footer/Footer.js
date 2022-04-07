import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import '../../styles/common.scss';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="content-wrap">
          <div className="footer-list">
            <li className="text-list">
              <ol>
                <Link to="">회사소개</Link>
              </ol>
              <ol>
                <Link to="">이용약관</Link>
              </ol>
              <ol>
                <Link to="">개인정보처리방침</Link>
              </ol>
              <ol>
                <Link to="">고객센터</Link>
              </ol>
              <ol>
                <Link to="">커뮤니티</Link>
              </ol>
            </li>
            <li className="icon-list">
              <ol>
                <Link to="">
                  <i className="fa-brands fa-instagram" />
                </Link>
              </ol>
              <ol>
                <Link to="">
                  <i className="fa-brands fa-instagram-square" />
                </Link>
              </ol>
              <ol>
                <Link to="">
                  <i className="fa-brands fa-facebook" />
                </Link>
              </ol>
              <ol>
                <Link to="">
                  <i className="fa-solid fa-blog" />
                </Link>
              </ol>
              <ol>
                <Link to="">
                  <i className="fa-brands fa-youtube" />
                </Link>
              </ol>
            </li>
          </div>
        </div>
      </div>
      <div className="content-wrap">
        <div className="shop-info">
          <li className="box1">
            <h3>CUSTOMER CENTER</h3>
            <strong>
              <Link to="">15777-15777</Link>
            </strong>
            <ol>
              <span>[평일]</span>
            </ol>
            <ol>10:00 ~ 16:00</ol>
            <ol>(점심 12:00 ~ 14:00)</ol>
            <p />
            <ol>
              <span>[주말/공휴일]</span>
            </ol>
            <ol>휴무</ol>
          </li>
          <li className="box2">
            <h3>BANK ACCOUNT</h3>

            <ol>
              <span>우리나라</span> 1111-111-11111
            </ol>
            <ol>
              <span>대기업</span> 427-222222-22-222
            </ol>
            <ol>
              <span>예금주</span> : 주식회사 위코뷰
            </ol>
          </li>
          <li className="box3">
            <h3>SHOPPING MENU</h3>
            <ol>
              <Link to="">실시간 포토리뷰</Link>
            </ol>
            <ol>
              <Link to="">기획전</Link>
            </ol>
            <ol>
              <Link to="">이벤트</Link>
            </ol>
            <ol>
              <Link to="">매장안내</Link>
            </ol>
          </li>
          <li className="box4">
            <h3>RETURN & EXCHANGE</h3>

            <ol>서울광역시 서구 이서진로 47</ol>
            <ol>AP로지스틱스 (주)위코뷰</ol>
          </li>
        </div>
        <div className="company-info">
          <div className="company-info-text">
            <ul>
              <li>
                사업자명 :{' '}
                <span>
                  <Link to="">주식회사 위코뷰 </Link>
                </span>
              </li>
              <li>
                &nbsp;&nbsp;대표자명 : <span>김코드</span>
              </li>
              <li>
                &nbsp;&nbsp;주소(본사/쇼룸) :
                <span>
                  &nbsp;01115 인천특별시 마포구 토정비결로 111 (정상수동) 위코뷰
                </span>
              </li>
              <li>
                &nbsp;&nbsp;팩스 : <span>15777-15778</span>
              </li>
              <li>
                &nbsp;&nbsp;쇼룸전화 :
                <span>
                  &nbsp;<Link to="">15777-15777</Link>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                사업자 등록번호 : <span>111-11-11111</span>
              </li>
              <li>
                &nbsp;&nbsp;통신판매업 신고 :
                <span>
                  &nbsp;2050-인천마포-1111 &nbsp;
                  <Link to="">[사업자정보확인]</Link>
                </span>
              </li>
              <li>
                &nbsp;&nbsp;개인정보보호책임자 : 김코드
                <span>
                  &nbsp;<Link to="">(kimcode@wecoview.co.kr)</Link>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  대량구매/제휴문의 : <Link to="">바로가기</Link>
                </span>
              </li>
              <li>
                &nbsp;&nbsp;광고문의 :{' '}
                <span>
                  <Link to="">wecov@hanmail....</Link>
                </span>
              </li>
            </ul>
          </div>
          <div className="company-info-image">
            <ul>
              <li className="image">
                <Link to="">KG 이니시스&nbsp;&nbsp;</Link>
              </li>
              <li className="text">
                &nbsp;
                <Link to="">서비스 가입사실 확인 &#62;</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
