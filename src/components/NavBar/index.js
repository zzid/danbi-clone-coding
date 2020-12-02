import React from "react";
import { NavList } from "components";
import { NavLink, Link } from "react-router-dom";
import { ShowAllNavBar } from "components";
import "./NavBar.scss";
import NavBarData from "data/data.json";
const data = NavBarData.NavBarData;

class NavBar extends React.Component {
  state = {
    fixed: false,
    isShowAll: false,
  };
  componentDidMount() {
    this.props.listenToScrollEvent(this.onSetFixed);
  }
  onLinkClick = () => {
    this.setState({ isShowAll: false });
  };
  onSetFixed = (flag) => {
    this.setState({ fixed: flag });
  };

  handleShowAllClick = () => {
    this.setState((prevState) => ({
      isShowAll: !prevState.isShowAll,
    }));
  };
  render() {
    const { fixed, isShowAll } = this.state;
    return (
      <nav
        className={fixed ? "navbar-container navbar-fixed" : "navbar-container"}
      >
        <ul className={isShowAll ? "navbar-ul hide-this" : "navbar-ul"}>
          {Object.keys(data).map((d, i) => (
            <NavList oneData={data[d]} key={`navlist-${data[d].title}`} />
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
        <ShowAllNavBar classProp={isShowAll} onLinkClick={this.onLinkClick} />
      </nav>
    );
  }
}
export default NavBar;
