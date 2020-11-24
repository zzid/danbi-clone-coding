import React from "react";
import NavBarData from "data/data.json";
import UrlData from "data/imageUrl.json";
import "./IntroducePage.scss";
import { InPageLeftNav } from "components";
import { NavLink } from "react-router-dom";
const data = NavBarData.NavBarData.wink;

class IntroducePage extends React.Component {
  render() {
    const params = this.props.match.params.category;
    const looklist = UrlData.looklist[params];
    console.log(data);
    // const {} = this.state;

    return (
      <div className="wink-container">
        <InPageLeftNav data={data} />
        <div className="contents">
          <div className="tab-nav">
            <h3>{UrlData.looklist[params].title}</h3>
            <ul>
              {Object.keys(UrlData.looklist).map((e) => {
                const d = UrlData.looklist[e];
                return (
                  <li>
                    <NavLink to={`/wink/${d.page}`} activeClassName="is-active">
                      {d.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='additional-div'>
            <img src={looklist.img} alt={`${params}`} />
            {params === "lookdevice" && (
              <a
                href="https://s.wink.co.kr/marketing/guide/wink_guide.pdf"
                target="_blank"
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
