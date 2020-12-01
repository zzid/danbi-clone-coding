import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <div>
          <img
            src="https://s.wink.co.kr/pc/images/logo3.png"
            alt="footer-logo"
            className="footer-logo"
          />
          <div className="footer-content">
            <ul className="footer-menu">
              <li>
                <Link to={"/company"}>회사소개</Link>
              </li>
              <li>
                <a
                  href="https://s.wink.co.kr/danbi_common/html/agreement.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  이용약관
                </a>
              </li>
              <li>
                <a
                  href="https://s.wink.co.kr/danbi_common/html/privacy_policy.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  개인정보처리방침
                </a>
              </li>
              <li>
                <Link to={"/customer/noticelist"}>고객센터</Link>
              </li>
            </ul>
            <div className="footer-info">
              <p>
                (주)단비교육 &nbsp;&nbsp;&nbsp; 대표이사 : 권영금
                &nbsp;&nbsp;&nbsp; 개인정보 책임자 : 김철영
                <br />
                주소 : 서울 강남구 대치동 967-5 정우빌딩 &nbsp;&nbsp;&nbsp;
                이메일주소 : wink@danbiedu.co.kr
                <br />
                사업자 등록번호 : 629-87-00476 &nbsp;&nbsp;&nbsp;통신판매업
                신고번호 : 제 2017-서울강남-03262호
                <span className={"small-text"}>
                  Copyright © 2017 Danbi Edu&nbsp;All right reserved.
                </span>
              </p>
              <span className="service-area">
                <span className={"phone-number"}>
                  윙크 학부모님 공감센터 1522-1244
                </span>
                <span className={"small-text"}>월-금요일 10:00~20:00</span>
              </span>
            </div>
          </div>

          <img
            src="https://s.wink.co.kr/pc/images/img_character.png"
            alt=""
            className="character-1 footer-img"
          />
          <img
            src="https://s.wink.co.kr/pc/images/img_character3.png"
            alt=""
            className="character-2 footer-img"
          />
          <img
            src="https://s.wink.co.kr/pc/images/img_cloud.png"
            alt=""
            className="img-cloud footer-img"
          />
          <img
            src="https://s.wink.co.kr/pc/images/img_balloon3.png"
            alt=""
            className="img-balloon footer-img"
          />
        </div>
      </div>
    );
  }
}

export default Footer;
