import React from 'react';
import './Login.scss';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [idInput, setIdInput] = useState('');
  const [pwInput, setPwInput] = useState('');
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/signup');
  };

  const isValid = idInput.includes('@') && pwInput.length > 5;

  const handleIdInput = event => {
    setIdInput(event.target.value);
  };
  const handlePwInput = event => {
    setPwInput(event.target.value);
  };

  return (
    <div>
      <div className="login-form">
        <ul className="user-status">
          <Link
            to="/signup"
            className="link"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            기존회원이세요?
          </Link>
          <Link
            to="/signup"
            className="link"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            비회원 배송조회
          </Link>
        </ul>
        <input
          type="text"
          placeholder="아이디"
          onChange={handleIdInput}
          required
        />

        <input
          type="password"
          placeholder="비밀번호"
          required
          onChange={handlePwInput}
        />
        <div className="save-id">
          <input id="save" type="radio" name="login" />
          <label htmlFor="save">아이디저장</label>
          <input id="auto-login" type="radio" name="login" />
          <label htmlFor="auto-login">자동로그인</label>
        </div>
        <button
          className="login-btn"
          onClick={() => {
            goToMain();
          }}
          disabled={!isValid}
        >
          기존 회원 로그인
        </button>
        <div className="find">
          <div className="find-column">
            <span>아이디 찾기</span>
            <span>|</span>
            <span>비밀번호 찾기</span>
          </div>
          <div className="find-column">
            <span>가입하기</span>
          </div>
        </div>
        <div className="sns-login-box">
          <div className="sns-login-box__column">
            <div className="sns-login">
              <i className="fa-solid fa-heart" />
              <span>HEART로 로그인</span>
            </div>
            <div className="sns-login">
              <i className="fa-solid fa-star" />
              <span>STAR로 로그인</span>
            </div>
          </div>
          <div className="sns-login-box__column">
            <div className="sns-login">
              <i className="fa-solid fa-moon" />
              <span>MOON으로 로그인</span>
            </div>
            {/* <div className="sns-login" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
