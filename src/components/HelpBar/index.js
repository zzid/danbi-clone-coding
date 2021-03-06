import React from "react";
import { Link } from "react-router-dom";
import "./HelpBar.scss";

class HelpBar extends React.Component {
  state = {
    fixed: false,
  };
  componentDidMount() {
    this.props.listenToScrollEvent(this.onSetFixed);
  }
  onSetFixed = (flag) => {
    this.setState({ fixed: flag });
  };

  render() {
    const { fixed } = this.state;
    return (
      <div
        className={
          fixed ? "help-bar-container header-fixed" : "help-bar-container"
        }
      >
        <div className="free-trial">
          <Link to="/wink/freestudylist/freestudy">
            <img
              src={
                "https://s.wink.co.kr/pc/1.1.0/common/floating/ico_free_study.png"
              }
              alt="img"
            />
            <p>
              <span>무료</span>
              <span> 학습 혜택 받기</span>
            </p>
          </Link>
        </div>
        <ul>
          <li className="help-li-request">
            <Link to={"/wink/studylist/paidstudy"}>윙크 유료 학습 신청</Link>
          </li>
          <li className="help-li-talk">
            <a href="https://customer.happytalk.io/public_v1/chat_v4/public_point?go=C&is_login=N&uid=&site_id=4000000177&category_id=64405&division_id=64406&usergb=W&title=%5B%ED%85%8C%EC%8A%A4%ED%8A%B8+%EC%83%81%EB%8B%B4%EC%B0%BD%5D">
              1:1 실시간 채팅 상담
            </a>
          </li>
          <li className="help-li-report">
            <Link to="/customer/report">건의및 불편 신고</Link>
          </li>
          <li className="help-li-recruit">
            <a href="http://recruit.wink.co.kr/client/recruit/?pagename=teacher/teacher">
              윙크 선생님 모집
            </a>
          </li>
        </ul>
        <div className="help-bar-cs-area">
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
