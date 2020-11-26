import React from "react";
import "./IntroducePage.scss";
import { InPageLeftNav, InPageCategory } from "components";

import NavBarData from "data/data.json";
import UrlData from "data/imageUrl.json";

const data = NavBarData.NavBarData.wink;
const pageData = Object.assign(
  {},
  Object.keys(UrlData).map((key) => UrlData[key])
);
class IntroducePage extends React.Component {
  // state = {
  //   curCategory: null,
  // };
  // componentDidMount() {
  //   const params = this.props.match.params.category;
  //
  //   if (params.match(/subject/g)) {
  //     this.setState({ curCategory: UrlData.subjectlist });
  //   } else if (params.match(/look/g)) {
  //     this.setState({ curCategory: UrlData.looklist });
  //
  //     // this.category = UrlData.looklist;
  //   }
  //   console.log(this.state.curCategory);
  // }
  render() {
    const params = this.props.match.params.category;
    this.category = UrlData[``];
    // const { curCategory } = this.state;
    if (params.match(/subject/g)) {
      this.category = UrlData.subjectlist;
    } else if (params.match(/look/g)) {
      this.category = UrlData.looklist;
    } else if (params.match(/agestudy/g)) {
      this.category = UrlData.agestudylist;
    } else if (params.match(/freestudy/g)) {
      this.category = UrlData.freestudylist;
    }
    console.log(this.category);
    console.log("pageData :", pageData);
    console.log(
      "next : ",
      Object.keys(UrlData).map((key) => UrlData[key])
    );
    return (
      <div className="page-container">
        <InPageLeftNav data={data} params={params} />
        <div className="contents">
          <InPageCategory
            data={data}
            category={this.category}
            params={params}
          />
          <div className="wink-div">
            <img src={this.category[params].img} alt={`${params}`} />
            {params === "lookdevice" && (
              <a
                href="https://s.wink.co.kr/marketing/guide/wink_guide.pdf"
                target="_blank"
                rel="noreferrer"
                className="link-btn"
              >
                세부 내용 및 설치 방법 알아보기
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default IntroducePage;
