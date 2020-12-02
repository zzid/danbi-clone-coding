import React from "react";
import { NavBar } from "components";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = ({ listenToScrollEvent }) => {
  return (
    <div className="header-container">
      <div className="header-top">
        <h1>
          <Link to={"/"}>
            <img src="https://s.wink.co.kr/pc/images/logo.png" alt="logo" />
          </Link>
        </h1>
        <p>
          <img
            src={"https://s.wink.co.kr/pc/images/logo_desc.png"}
            alt="logo-desc"
          />
        </p>
        <div className="header-top-util">
          <Link to={"/"} className="join">
            회원가입
          </Link>
          <ul>
            <li>내정보</li>
            <li>로그인</li>
          </ul>
        </div>
      </div>
      <NavBar listenToScrollEvent={listenToScrollEvent} />
    </div>
  );
};
export default Header;
