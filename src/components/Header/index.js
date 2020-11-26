import React from "react";
import { NavBar } from "components";
import logoDesc from "data/logo_desc.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header__container">
      <div className="Header__header">
        <h1>
          <a href="/">
            <img src="https://s.wink.co.kr/pc/images/logo.png" alt="logo" />
          </a>
        </h1>
        <p>
          <img src={logoDesc} alt="logo-desc" />
        </p>
        <div className="Header__header-util">
          <a href="#" className="join">
            회원가입
          </a>
          <ul>
            <li>내정보</li>
            <li>로그인</li>
          </ul>
        </div>
      </div>
      <NavBar />
    </div>
  );
};
export default Header;
