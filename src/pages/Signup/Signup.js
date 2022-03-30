import React from 'react';
import './Signup.scss';

function Signup() {
  return (
    <div>
      <section className="sign-up">
        <span className="guide">홈 > 회원가입</span>
        <div className="form">
          <div className="title">회원가입</div>
          <div className="form-main">
            <div className="sub-title">
              <span>기본정보</span>
              <span>
                <span className="dot">⁎</span>필수입력사항
              </span>
            </div>
            <div className="input-field">
              <label htmlFor="id" className="label">
                아이디<span className="dot">⁎</span>
              </label>
              <span>
                <input id="id" type="text" />
                <span className="condition-red">아이디를 입력해 주세요.</span>
                <span className="condition-grey">(영문소문자/숫자,4~16자)</span>
              </span>
            </div>
            <div className="input-field">
              <label htmlFor="password" className="label">
                비밀번호<span className="dot">⁎</span>
              </label>
              <span>
                <input id="password" type="text" />
                <span className="condition-grey">(영문소문자/숫자,4~16자)</span>
              </span>
            </div>
            <div className="input-field">
              <label htmlFor="password-check" className="label">
                비밀번호 확인<span className="dot">⁎</span>
              </label>
              <input id="password-check" type="text" />
            </div>
            <div className="input-field">
              <label htmlFor="name" className="label">
                이름<span className="dot">⁎</span>
              </label>
              <input id="name" type="text" />
            </div>
            <div className="input-field">
              <label htmlFor="address" className="label">
                주소<span className="dot">⁎</span>
              </label>
              <div className="address">
                <span className="search">
                  <input id="address" type="text" />
                  <button>주소검색</button>
                </span>
                <input type="text" />
                <input type="text" />
              </div>
            </div>

            <div className="input-field">
              <label htmlFor="number" className="label">
                일반전화
              </label>
              <select id="number">
                <option>02</option>
                <option>031</option>
                <option>032</option>
              </select>
              <span className="dash">-</span>
              <input className="num" type="text" />
              <span className="dash">-</span>
              <input className="num" type="text" />
            </div>
            <div className="input-field">
              <label htmlFor="mobile" className="label">
                휴대전화<span className="dot">⁎</span>
              </label>
              <div>
                <div className="mobile-wrap">
                  <select id="mobile">
                    <option>010</option>
                    <option>011</option>
                    <option>017</option>
                  </select>
                  <span className="dash">-</span>
                  <input className="num" type="text" />
                  <span className="dash">-</span>
                  <input className="num" type="text" />
                </div>
                <span className="condition-red">휴대폰 번호를 입력하세요.</span>
              </div>
            </div>
            <div className="input-field">
              <label htmlFor="email" className="label">
                이메일<span className="dot">⁎</span>
              </label>
              <input id="email" type="text" />
            </div>
            <div className="input-field">
              <label htmlFor="member" className="label">
                평생회원
              </label>
              <div>
                <div className="radio-wrap">
                  <input className="radio" id="member" type="radio" />
                  <span>동의함</span>
                  <input className="radio" type="radio" />
                  <span>동의안함</span>
                </div>
                <span className="guidance">
                  - 평생회원으로 가입하시면 주식회사 데코뷰 회원 탈퇴 시까지는
                  휴면회원으로 전환되지 않습니다.
                </span>
              </div>
            </div>
          </div>

          <div className="form-main">
            <div className="sub-title">
              <span>추가정보</span>
              <span />
            </div>
            <div className="input-field">
              <label htmlFor="dob" className="label">
                생년월일
              </label>
              <div>
                <div className="dob-wrap">
                  <input className="num" id="dob" type="text" />
                  <span className="dash">년</span>
                  <input className="num" type="text" />
                  <span className="dash">월</span>
                  <input className="num" type="text" />
                  <span className="dash">일</span>

                  <div className="radio-wrap">
                    <input className="radio" type="radio" />
                    <span>양력</span>
                    <input className="radio" type="radio" />
                    <span>음력</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="input-field">
              <label htmlFor="recommend" className="label">
                추천인아이디
              </label>
              <input id="recommend" type="text" />
            </div>
          </div>

          <div className="form-main">
            <div className="sub-title">
              <span>약관동의</span>
              <span />
            </div>
            <div className="clause-wrap">
              <div className="clause">
                <input className="input" type="radio" />
                <span>
                  이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 모두
                  동의합니다.
                </span>
              </div>
              <button>약관보기</button>
            </div>
          </div>
        </div>
        <div className="submit">
          <button>회원가입</button>
        </div>
      </section>
    </div>
  );
}

export default Signup;
