import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
const data = [
  {
    title: "윙크소개",
    contents: [
      { title: "윙크 한눈에 보기" },
      { title: "과목별 학습" },
      { title: "학부모님 사용 후기" },
      { title: "학습, 체험 신청" },
    ],
  },
  {
    title: "우리아이 현황",
    contents: [
      { title: "종합" },
      { title: "과목별 학습" },
      { title: "독서 선택 활동" },
    ],
  },
];
class NavList extends React.Component {
  state = {
    mouseOver: false,
  };
  onMouseOver = () => {
    this.setState({ mouseOver: true });
  };
  onMouseOut = () => {
    this.setState({ mouseOver: false });
  };
  render() {
    const { mouseOver } = this.state;
    return (
      <li
        className="NavList__container"
        //   onMouseOver={this.onMouseOver}
        //   onMouseOut={this.onMouseOut}
      >
        <Link to={`${this.props.oneData.title}`} />
        {this.props.oneData.title}
        {/* {mouseOver && ( */}
        <ul className="NavList__contents">
          {this.props.oneData.contents.map((d, i) => (
            <li className={`NavList__content-item-${i + 1}`}>{d.title}</li>
          ))}
        </ul>
        {/* )} */}
      </li>
    );
  }
}
class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar__container">
        <nav>
          <ul className="NavBar__first">
            {data.map((d, i) => (
              <NavList oneData={d} />
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}
export default NavBar;
