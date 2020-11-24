import React from "react";
import NavBarData from "data/data.json";
import UrlData from "data/imageUrl.json";
import "./IntroducePage.scss";
import { InPageLeftNav, InPageCategory } from "components";
const data = NavBarData.NavBarData.wink;

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
    // const { curCategory } = this.state;
    if (params.match(/subject/g)) {
      this.category = UrlData.subjectlist;
    } else if (params.match(/look/g)) {
      this.category = UrlData.looklist;
    } else if (params.match(/agestudy/g)) {
      this.category = UrlData.agestudylist;
    } else if (params.match(/freestudy/g)) {
      this.category = UrlData.freestudy;
    }
    console.log(this.category);
    return (
      <div className="wink-container">
        <InPageLeftNav data={data} params={params} />
        <div className="contents">
          <InPageCategory
            data={data}
            category={this.category}
            params={params}
          />
          <div className="additional-div">
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
