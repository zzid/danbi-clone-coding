import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavList.scss";
class NavList extends React.Component {
  state = {
    isOpen: false,
  };
  onOpenClick = () => {
    this.setState((prev) => ({ isOpen: !prev.isOpen }));
  };
  onMouseLeaveFromList = () => {
    this.setState({ isOpen: false });
  };
  render() {
    const { isOpen } = this.state;
    return (
      <li className="navlist-list" onMouseLeave={this.onMouseLeaveFromList}>
        <NavLink to={`/${this.props.oneData.page}`} activeClassName="is-active">
          {this.props.oneData.title}
        </NavLink>
        <ul className="navlist-contents">
          {this.props.oneData.contents.map((data, i) => (
            <li key={`nav-content-item-${i}`}>
              <Link
                to={`/${this.props.oneData.page}/${data.page}`}
                onClick={this.props.onLinkClick}
              >
                {data.title}
              </Link>
              {data.contents && (
                <button
                  onClick={this.onOpenClick}
                  className={
                    isOpen ? "sublist-btn close-btn" : "sublist-btn open-btn"
                  }
                >
                  +
                </button>
              )}
              <ul>
                {data.contents && (
                  <div className={isOpen ? "sublist sublist-open" : "sublist"}>
                    {data.contents.map((subContent) => (
                      <li key={subContent.title}>
                        <Link
                          to={`/${this.props.oneData.page}/${data.page}/${subContent.page}`}
                          onClick={this.props.onLinkClick}
                        >
                          {subContent.title}
                        </Link>
                      </li>
                    ))}
                  </div>
                )}
              </ul>
            </li>
          ))}
        </ul>
      </li>
    );
  }
}

export default NavList;
