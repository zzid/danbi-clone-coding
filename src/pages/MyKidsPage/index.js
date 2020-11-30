import React from "react";
import NavBarData from "data/data.json";
import mykidsData from "data/mykidsPageData.json";
import { InPageLeftNav } from "components";
import { Link } from "react-router-dom";
import "./MyKidsPage.scss";

const data = NavBarData.NavBarData.mykids;

class MyKidsPage extends React.Component {
  render() {
    const params = this.props.match.params.category;
    return (
      <div className={"page-container"}>
        <InPageLeftNav data={data} params={params} />
        <div className={"contents"}>
          <h3>종합</h3>
          <div className="sample-box">
            <strong className="title">
              아래는 <span className="dot">샘</span>
              <span className="dot">플</span> 화면입니다.
            </strong>
            <p>
              {mykidsData[params]?.text}
              <br />
              <br />
              윙크 학습을 직접 체험해 보시려면
              <br />
              <strong>'무료 학습 신청'을 해주세요.</strong>
            </p>
            <div className="btn-wrapper">
              <Link
                to={"/wink/studylist/freestudy"}
                className="study-btn study on"
              >
                무료 학습 신청
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyKidsPage;
