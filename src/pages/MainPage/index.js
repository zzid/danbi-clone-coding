import React from "react";
import "./MainPage.scss";
import { Link } from "react-router-dom";
class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onPlay: false,
    };
    this.videoRef = React.createRef();
  }
  handleRef = (video) => {
    this.videoRef = video;
  };
  onClickPlay = () => {
    this.setState((prevState) => ({
      onPlay: !prevState.onPlay,
    }));
    this.state.onPlay ? this.videoRef.pause() : this.videoRef.play();
  };
  render() {
    const { onPlay } = this.state;
    return (
      <div className="mainpage-container">
        <div className={"mainpage-first"}>
          <img
            src="https://s.wink.co.kr/pc/new_image/main/bg_main.jpg"
            alt="main"
          />
          <div className={onPlay ? "mainpage-video on-play" : "mainpage-video"}>
            <div>
              <img
                src="https://s.wink.co.kr/pc/images/main/bg_video.png"
                alt=""
                onClick={this.onClickPlay}
              />
              <video
                src="https://s.wink.co.kr/mobile/main_autoplay.mp4"
                poster="https://s.wink.co.kr/pc/images/main/bg_video_2.png"
                ref={this.handleRef}
              />
              <span>02:45</span>
            </div>
          </div>
          <div className="mainpage-slider">
            <div>
              <a href="http://blog.wink.co.kr/221380729500" target="_self">
                <img
                  src="https://s.wink.co.kr/production/u/4/2019/01/22/bDF00F04A6CB28B79263A643DCAAF0E05.%EC%83%89%EC%B9%A0%EA%B3%B5%EB%B6%80.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="mainpage-btns">
            <Link to="/wink/lookview">윙크 학습 자세히 보기</Link>
            <Link to="/wink/freestudy">
              윙크 무료 학습 알아보기
              <span>
                <img
                  src="https://s.wink.co.kr/marketing/banner/pc/main/banner_popup_main.png"
                  alt="pop-banner"
                />
              </span>
            </Link>
          </div>
        </div>
        <div className={"mainpage-contents"}>
          <div className={"mainpage-contents-section-1"}>
            <div className={"mainpage-contents-section-1-left"}>
              <h2 className={"hgroup"}>학부모님 사용후기</h2>
            </div>
            <div className={"mainpage-contents-section-1-right"}>
              <h2 className={"hgroup"}>재미있고 유익한 윙크 콘텐츠</h2>
              <div className={"video-area"}>
                <div className={"title-video"}>
                  <div>윙크 콘텐츠 하이라이트</div>
                </div>
              </div>
              <ul>
                <li>
                  <div>한글 콘텐츠 보기</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MainPage;
