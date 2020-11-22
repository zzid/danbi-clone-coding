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
const NavList = (props) => {
  return (
    <li className="NavList__list">
      <Link to={`/?page=${props.oneData.title}`}>{props.oneData.title}</Link>
      <ul className="NavList__contents">
        {props.oneData.contents.map((d, i) => (
          <li className={`NavList__content-item-${i + 1}`}>{d.title}</li>
        ))}
      </ul>
    </li>
  );
};

class NavBar extends React.Component {
  state = {
    fixed: false,
  };
  componentDidMount() {
    this.listenToScrollEvent();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        if (window.pageYOffset > 120) {
          this.setState({ fixed: true });
        } else if (window.pageYOffset < 50) {
          this.setState({ fixed: false });
        }
      });
    });
  };

  render() {
    const { fixed } = this.state;
    return (
      <nav className={fixed ? "NavBar__container fixed" : "NavBar__container"}>
        <ul className="NavBar__ul">
          {data.map((d, i) => (
            <NavList oneData={d} />
          ))}
        </ul>
      </nav>
    );
  }
}
export default NavBar;
