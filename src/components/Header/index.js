import React from "react";
import { NavBar } from "components";
import "./Header.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="Header__container">
        <div className="Header__header">
          <h1>
            <a href="/">wink</a>
          </h1>
          <p>
            <img src="logo" alt="logo" />
          </p>
          <div className="Header__header-util">
            <span>
              <a>회원가입</a>
            </span>
            <span>내정보</span>
            <span>로그인</span>
          </div>
        </div>
        <NavBar />
      </div>
    );
  }
}
export default Header;
