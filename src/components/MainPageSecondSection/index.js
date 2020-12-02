import React from "react";
import { ModalComponent, TableComponent, VideoBox } from "components";
import "./MainPageSecondtSection.scss";

import videoHighlight from "data/videoData-highlight.json";
import videoDataObject1 from "data/videoData1.json";
import videoDataObject2 from "data/videoData2.json";
import tableDataObject1 from "data/tableData1.json";
import tableDataObject2 from "data/tableData2.json";

const videoData = Object.assign(
  {},
  videoHighlight,
  videoDataObject1.videos,
  videoDataObject2.videos
);

class MainPageSecondSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curVideo: null,
    };
  }
  onClickVideoContent = (event) => {
    const {
      target: { id },
    } = event;
    this.setState({ curVideo: videoData[id] });
  };
  onClickVideoModalCancel = () => {
    this.setState({ curVideo: null });
  };
  render() {
    const { curVideo } = this.state;
    return (
      <>
        <div className={"mainpage-second-content-container"}>
          <div className={"section mainpage-contents-first"}>
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
          <div className={"section mainpage-contents-second"}>
            <TableComponent tableDataObject={tableDataObject2} />
            <div className={"mainpage-contents-videos right"}>
              <h2 className={"hgroup"}>윙크를 말한다</h2>
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
            onClickVideoCancel={this.onClickVideoModalCancel}
            videoInfo={curVideo}
          />
        )}
      </>
    );
  }
}
export default MainPageSecondSection;
