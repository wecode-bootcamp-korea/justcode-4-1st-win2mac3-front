import React from 'react';
import './Login.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config';

function Login() {
  const initialValues = {
    email: '',
    password: '',
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [token, setToken] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const navigate = useNavigate();

  const sendForm = formValues => {
    fetch(`${BASE_URL}:8000/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formValues.email,
        password: formValues.password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.jwt) {
          const newToken = res.jwt;
          setToken(newToken);
        }
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  const validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = '아이디를 입력해주세요.';
      return errors;
    } else if (!values.email.includes('@')) {
      errors.email = '아이디 형식이 맞지 않습니다.';
      return errors;
    } else if (!values.password) {
      errors.password = '비밀번호를 입력해주세요.';
      return errors;
    } else if (values.password.length < 8 || values.password.length > 16) {
      errors.password = '비밀번호는 8자 이상, 16자 이하입니다.';
      return errors;
    }
    setIsSubmit(true);
    sendForm(formValues);
    errors.email = '';
    errors.password = '';
    return errors;
  };

  useEffect(() => {
    if (token !== null && isSubmit === true) {
      alert('로그인 성공');
      localStorage.setItem('token', token);
      navigate('../main');
    }
  }, [navigate, token, isSubmit]);

  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="아이디"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <p className="error">{formErrors.email}</p>

        <input
          type="password"
          placeholder="비밀번호"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
        {token === null && <p className="error">{formErrors.password}</p>}
        <div className="save-id">
          <input id="save" type="radio" name="login" />
          <label htmlFor="save">아이디저장</label>
          <input id="auto-login" type="radio" name="login" />
          <label htmlFor="auto-login">자동로그인</label>
        </div>
        <button className="login-btn">로그인</button>
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
              <i class="fa-brands fa-line fa-2x" />
              <span>Line으로 로그인</span>
            </div>
            <div className="sns-login">
              <i className="fa-brands fa-google fa-2x" />
              <span>Google로 로그인</span>
            </div>
          </div>
          <div className="sns-login-box__column">
            <div className="sns-login">
              <i className="fa-brands fa-twitter fa-2x" />
              <span>Twitter로 로그인</span>
            </div>
            {/* <div className="sns-login" /> */}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
