import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import "./MainPageFirstSection.scss";
import slideImages from "data/slideImages.json";
class MainPageFirstSection extends React.Component {
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
      <div className="mainpage-first-content-container">
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
              <Carousel autoplay dots={false}>
                {slideImages.images.map((image, index) => (
                  <img src={image} alt={""} key={`slide-image-${index}`} />
                ))}
              </Carousel>
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
    );
  }
}

export default MainPageFirstSection;
