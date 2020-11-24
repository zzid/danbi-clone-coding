import React from "react";
import { NavLink } from "react-router-dom";
import {
  listenToScrollEvent,
  removeScrollEvent,
} from "utils/listenToScrollEvent";
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
          <li
            className={`NavList__content-item-${i + 1}`}
            key={`navlist-content-item-${i}`}
          >
            {d.title}
          </li>
        ))}
      </ul>
    </li>
  );
};

class NavBar extends React.Component {
  state = {
    fixed: false,
    isOpen: false,
    isOn: true,
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
      isOpen: !prevState.isOpen,
    }));
  };
  render() {
    const { fixed, isOpen } = this.state;
    return (
      <nav
        className={
          fixed ? "NavBar__container NavBar__fixed" : "NavBar__container"
        }
      >
        <ul className="NavBar__ul">
          {Object.keys(data).map((d, i) => (
            <NavList oneData={data[d]} key={`top-nav-li-${i}`} />
          ))}
        </ul>
        <div className="show-all">
          <button
            className={isOpen ? "close" : "open"}
            onClick={this.handleShowAllClick}
          >
            <p>전체메뉴</p>
          </button>
        </div>
      </nav>
    );
  }
}
export default NavBar;
