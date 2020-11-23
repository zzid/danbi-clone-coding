import React from "react";
import listenToScrollEvent from "utils/listenToScrollEvent";
import winkBot from "data/ico_free_study.png";
import "./HelpBar.scss";

class HelpBar extends React.Component {
  state = {
    fixed: false,
  };
  onSetFixed = (flag) => {
    this.setState({ fixed: flag });
  };
  componentDidMount() {
    listenToScrollEvent(this.onSetFixed);
  }

  render() {
    const { fixed } = this.state;
    return (
      <div
        className={
          fixed ? "HelpBar__container Header__fixed" : "HelpBar__container"
        }
      >
        <div className="free-trial">
          <a>
            <img src={winkBot} alt="img" />
            <p>
              <span>무료</span>
              {" 학습 혜택 받기"}
            </p>
          </a>
        </div>
        <ul>
          <li>
            <a>
              {/*<img src="" alt="img" />*/}
              윙크 유료 학습 신청
            </a>
          </li>
          <li>
            <a>
              {/*<img src="" alt="img" />*/}
              1:1 실시간 채팅 상담
            </a>
          </li>
          <li>
            <a>
              {/*<img src="" alt="img" />*/}
              건의및 불편 신고
            </a>
          </li>
          <li>
            <a>
              {/*<img src="" alt="img" />*/}
              윙크 선생님 모집
            </a>
          </li>
        </ul>
        <div className="HelpBar__cs-area">
          <p className="title">윙크 학부모님 공감센터</p>
          <p className="sub-title">
            학부모님 말씀을 경청하며 최선을 다해 도와드리겠습니다.
          </p>
          <span>1522-1244</span>
        </div>
        <div className="working-time">평일 10:00~20:00</div>
      </div>
    );
  }
}

export default HelpBar;
