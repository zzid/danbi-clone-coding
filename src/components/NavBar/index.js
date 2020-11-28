import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ShowAllNavBar } from "components";
import "./NavBar.scss";
import NavBarData from "data/data.json";
const data = NavBarData.NavBarData;
const NavList = (props) => {
  return (
    <li className="navlist-list">
      <NavLink to={`/${props.oneData.page}`} activeClassName="is-active">
        {props.oneData.title}
      </NavLink>
      <ul className="navlist-contents">
        {props.oneData.contents.map((d, i) => (
          <Link
            className={`navlist-content-item-${i + 1}`}
            key={`nav-content-item-${i}`}
            to={`/${props.oneData.page}/${d.page}`}
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
  componentDidMount() {
    this.props.listenToScrollEvent(this.onSetFixed);
  }
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
