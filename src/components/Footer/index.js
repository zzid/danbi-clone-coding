import React from "react";
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
