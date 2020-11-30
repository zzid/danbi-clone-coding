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
          {this.props.oneData.contents.map((d, i) => (
            <li key={`nav-content-item-${i}`}>
              <Link to={`/${this.props.oneData.page}/${d.page}`}>
                {d.title}
              </Link>
              {d.contents && (
                <button
                  onClick={this.onOpenClick}
                  className={
                    isOpen ? "sublist-btn close-btn" : "sublist-btn open-btn"
                  }
                >
                  +
                </button>
              )}
              {d.contents && (
                <div className={isOpen ? "sublist sublist-open" : "sublist"}>
                  {d.contents.map((subContent) => (
                    <li>
                      <Link
                        to={`/${this.props.oneData.page}/${subContent.page}/${d.page}`}
                      >
                        {subContent.title}
                      </Link>
                    </li>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </li>
    );
  }
}

export default NavList;
