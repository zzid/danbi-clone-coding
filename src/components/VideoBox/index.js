import React from "react";
import "./VideoBox.scss";
const VideoBox = ({ classNameProp, videoObject, onClickVideoContent }) => {
  return (
    <>
      <ul className={`video-box-container`}>
        {Object.keys(videoObject.videos).map((key, i) => {
          return (
            <li
              className={`video-box ${classNameProp}`}
              key={`videobox-${classNameProp}-${i}`}
            >
              <div
                id={videoObject.videos[key].value}
                onClick={onClickVideoContent}
              >
                {videoObject.videos[key].title}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default VideoBox;
