import React from "react";
import "./InPageLeftNav.scss";
import { NavLink } from "react-router-dom";

class InPageLeftNav extends React.Component {
  render() {
    const { title, page, contents } = this.props.data;
    return (
      <div className="nav-wrap">
        <nav>
          <h2>{title}</h2>
          <ul className="nav-left-ul">
            {contents.map((e) => (
              <li>
                <NavLink to={`/wink/${e.page}`} activeClassName="is-active">
                  {e.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}
export default InPageLeftNav;
