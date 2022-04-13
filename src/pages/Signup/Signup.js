import React from 'react';
import './Signup.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const initialValues = {
    username: '',
    email: '',
    password: '',
    passwordcheck: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errors = validate(formValues);
    if (!errors) {
      navigate('/main');
      return;
    }
    setFormErrors(errors);
    // setIsSubmit(true);
    sendForm(formValues);
  };

  const sendForm = formValues => {
    fetch('http://localhost:8000/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: formValues.username,
        email: formValues.email,
        password: formValues.password,
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res));
    console.log({
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
    });
  };

  const navigate = useNavigate();

  const emailValidation = (email, errors) => {
    const emailRegex =
      /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    if (!email) {
      errors.email = '아이디를 입력해주세요.';
    } else if (!emailRegex.test(email)) {
      errors.email = '아이디 형식이 맞지 않습니다.';
    }
    return errors;
  };

  const passwordValidation = (password, errors) => {
    const pwRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!password) {
      errors.password = '비밀번호를 입력해주세요.';
    } else if (
      password.length < 8 ||
      password.length > 16 ||
      !pwRegex.test(password)
    ) {
      errors.password = '아이디와 비밀번호를 다시 입력해주세요.';
    }
    return errors;
  };

  const passwordCheckValidation = (password, passwordcheck, errors) => {
    if (password !== passwordcheck) {
      errors.passwordcheck = '비밀번호가 일치하지 않습니다.';
    }
    return errors;
  };

  const userNameValidation = (username, errors) => {
    if (!username) {
      errors.username = '이름을 입력해주세요.';
    } else if (username.length < 2 || username.length > 5) {
      errors.username = '이름이 형식에 맞지 않습니다.';
    }
    return errors;
  };

  const validate = values => {
    const errors = {};

    emailValidation(values.email, errors);
    passwordValidation(values.password, errors);
    passwordCheckValidation(values.password, values.passwordcheck, errors);
    userNameValidation(values.username, errors);

    return null;
  };
  return (
    <div>
      <form className="sign-up" onSubmit={handleSubmit}>
        <span className="path">홈 &#62; 회원가입</span>
        <div className="form">
          <div className="title">회원가입</div>
          <div className="table">
            <div className="table-title">
              <span>기본정보</span>
              <span>
                <img src="images/required_dot.png" alt="필수" />
                필수입력사항
              </span>
            </div>
            <div className="input-field">
              <label htmlFor="id" className="label">
                아이디
                <img src="images/required_dot.png" alt="필수" />
              </label>
              <span>
                <input
                  id="id"
                  type="text"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <p className="error">{formErrors.email}</p>
                <span className="condition">
                  ('@'포함 영문소문자/숫자,4~16자)
                </span>
              </span>
            </div>

            <div className="input-field">
              <label htmlFor="password" className="label">
                비밀번호
                <img src="images/required_dot.png" alt="필수" />
              </label>
              <span>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                />
                <p className="error">{formErrors.password}</p>
                <span className="condition">
                  (영문 대소문자/숫자/특수문자 포함, 8~16자)
                </span>
              </span>
            </div>

            <div className="input-field">
              <label htmlFor="password-check" className="label">
                비밀번호 확인
                <img src="images/required_dot.png" alt="필수" />
              </label>
              <input
                id="pw-check"
                type="password"
                name="passwordcheck"
                value={formValues.passwordcheck}
                onChange={handleChange}
              />
              <p className="error">{formErrors.passwordcheck}</p>
            </div>
            <div className="input-field">
              <label htmlFor="name" className="label">
                이름
                <img src="images/required_dot.png" alt="필수" />
              </label>
              <input
                id="username"
                type="text"
                name="username"
                value={formValues.username}
                onChange={handleChange}
              />
              <p className="error">{formErrors.username}</p>
            </div>
            <div className="input-field">
              <label htmlFor="address" className="label">
                주소
              </label>
              <div className="address">
                <span className="search">
                  <input id="address" type="text" placeholder="우편번호" />
                  <button>주소검색</button>
                </span>
                <input type="text" placeholder="기본주소" />
                <input type="text" placeholder="나머지 주소(선택 입력 가능)" />
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
                휴대전화
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
              </div>
            </div>
            <div className="input-field">
              <label htmlFor="email" className="label">
                이메일
              </label>
              <input id="email" type="text" />
            </div>
            <div className="input-field">
              <label htmlFor="member" className="label">
                평생회원
              </label>
              <div>
                <div className="radio-wrap">
                  <input
                    className="radio"
                    id="member"
                    type="radio"
                    name="agree"
                  />
                  <span>동의함</span>
                  <input
                    className="radio"
                    defaultChecked
                    type="radio"
                    name="agree"
                  />
                  <span>동의안함</span>
                </div>
                <span className="guidance">
                  - 평생회원으로 가입하시면 주식회사 데코뷰 회원 탈퇴 시까지는
                  휴면회원으로 전환되지 않습니다.
                </span>
              </div>
            </div>
          </div>

          <div className="table">
            <div className="table-title">
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
                    <input
                      className="radio"
                      value="solar"
                      type="radio"
                      name="calendar"
                      defaultChecked
                    />
                    <span>양력</span>
                    <input
                      className="radio"
                      value="lunar"
                      type="radio"
                      name="calendar"
                    />
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

          <div className="table">
            <div className="table-title">
              <span>약관동의</span>
              <span />
            </div>
            <div className="clause-wrap">
              <div className="clause">
                <input className="input" type="checkbox" name="checkbox" />
                <label className="main-content">
                  이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 모두
                  동의합니다.
                </label>
              </div>
            </div>
            <div className="clause-wrap">
              <div className="clause">
                <input className="input" type="checkbox" name="checkbox" />
                <label className="content">
                  <span>[필수]</span> 이용약관 동의
                </label>
              </div>
              <i className="fa-solid fa-angle-down" />
            </div>
            <div className="clause-wrap">
              <div className="clause">
                <input className="input" type="checkbox" name="checkbox" />
                <label className="content">
                  <span>[필수]</span> 개인정보처리방침 동의
                </label>
              </div>
              <i className="fa-solid fa-angle-down" />
            </div>
            <div className="clause-wrap">
              <div className="clause">
                <input className="input" type="checkbox" name="checkbox" />
                <label className="content">
                  <span>[선택]</span> 개인정보 제3자 제공 동의
                </label>
              </div>
              <i className="fa-solid fa-angle-down" />
            </div>
            <div className="clause-wrap">
              <div className="clause">
                <input className="input" type="checkbox" name="checkbox" />
                <label className="content">
                  <span>[선택]</span> 쇼핑정보 수신 동의
                </label>
              </div>
              <i className="fa-solid fa-angle-down" />
            </div>
          </div>
        </div>
        <div className="submit">
          <button className="submitBtn">회원가입</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
