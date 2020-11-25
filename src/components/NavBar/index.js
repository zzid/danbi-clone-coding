import React from "react";
import { NavLink, Link } from "react-router-dom";
import {
  listenToScrollEvent,
  removeScrollEvent,
} from "utils/listenToScrollEvent";
import { ShowAllNavBar } from "components";
import "./NavBar.scss";
import NavBarData from "data/data.json";
const data = NavBarData.NavBarData;
const NavList = (props) => {
  return (
    <li className="NavList__list">
      <NavLink to={`/${props.oneData.page}`} activeClassName="is-active">
        {props.oneData.title}
      </NavLink>
      <ul className="NavList__contents">
        {props.oneData.contents.map((d, i) => (
          <Link
            className={`NavList__content-item-${i + 1}`}
            key={`navlist-content-item-${i}`}
            to={`/wink/${d.page}`}
          >
            {d.title}
          </Link>
        ))}
      </ul>
    </li>
  );
};

class NavBar extends React.Component {
  state = {
    fixed: false,
    isShowAll: false,
  };
  onSetFixed = (flag) => {
    this.setState({ fixed: flag });
  };
  componentDidMount() {
    this.scrollRequest = listenToScrollEvent(this.onSetFixed);
    console.log(this.scrollRequest);
    // this.listenToScrollEvent();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  componentWillUnmount() {
    removeScrollEvent(this.scrollRequest);
  }

  handleShowAllClick = () => {
    this.setState((prevState) => ({
      isShowAll: !prevState.isShowAll,
    }));
  };
  render() {
    const { fixed, isShowAll } = this.state;
    return (
      <nav
        className={
          fixed ? "NavBar__container NavBar__fixed" : "NavBar__container"
        }
      >
        <ul className={isShowAll ? "NavBar__ul hide-this" : "NavBar__ul"}>
          {Object.keys(data).map((d, i) => (
            <NavList oneData={data[d]} key={`top-nav-li-${i}`} />
          ))}
        </ul>
        <div className="show-all">
          <button
            className={isShowAll ? "close" : "open"}
            onClick={this.handleShowAllClick}
          >
            <p>전체메뉴</p>
          </button>
        </div>
        <ShowAllNavBar classProp={isShowAll} />
      </nav>
    );
  }
}
export default NavBar;
