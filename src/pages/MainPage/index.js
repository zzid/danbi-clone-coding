import React from "react";
import "./MainPage.scss";
import { Link } from "react-router-dom";
import { TableComponent, ModalComponent } from "components";

import videoHighlight from "data/videoData-highlight.json";
import videoDataObject1 from "data/videoData1.json";
import videoDataObject2 from "data/videoData2.json";
import tableDataObject1 from "data/tableData1.json";
import tableDataObject2 from "data/tableData2.json";
import VideoBox from "../../components/VideoBox";

// const tableData1 = tableDataObject1.data;
const videoData = Object.assign(
  {},
  videoHighlight,
  videoDataObject1.videos,
  videoDataObject2.videos
);

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onPlay: false,
      curVideo: null,
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
  onClickVideoContent = (event) => {
    const {
      target: { id },
    } = event;
    this.setState({ curVideo: videoData[id] });
  };
  onClickVideoCancel = () => {
    this.setState({ curVideo: null });
  };
  render() {
    const { onPlay, curVideo } = this.state;
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
            <TableComponent tableDataObject={tableDataObject1} />
            <div className={"mainpage-contents-videos right"}>
              <h2 className={"hgroup"}>재미있고 유익한 윙크 콘텐츠</h2>
              <div>
                <div className={"video-area"}>
                  <div
                    className={"video-title"}
                    onClick={this.onClickVideoContent}
                    id="video-highlight"
                  >
                    윙크 콘텐츠 하이라이트
                  </div>
                </div>
                <VideoBox
                  classNameProp={"first"}
                  videoObject={videoDataObject1}
                  onClickVideoContent={this.onClickVideoContent}
                />
              </div>
            </div>
          </div>
          <div className={"mainpage-contents-section-2"}>
            <TableComponent tableDataObject={tableDataObject2} />
            <div className={"mainpage-contents-videos right"}>
              <h2 className={"hgroup"}>윙크를 말한다.</h2>
              <VideoBox
                classNameProp={"second"}
                videoObject={videoDataObject2}
                onClickVideoContent={this.onClickVideoContent}
              />
            </div>
          </div>
        </div>
        {curVideo && (
          <ModalComponent
            showModal={true}
            onClickVideoCancel={this.onClickVideoCancel}
            videoInfo={curVideo}
          />
        )}
      </div>
    );
  }
}
export default MainPage;
