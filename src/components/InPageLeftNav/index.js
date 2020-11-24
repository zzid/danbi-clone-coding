import React from "react";
import "./InPageLeftNav.scss";
import { NavLink } from "react-router-dom";
import {
  listenToScrollEvent,
  removeScrollEvent,
} from "utils/listenToScrollEvent";
class InPageLeftNav extends React.Component {
  state = {
    fixed: false,
  };
  onSetFixed = (flag) => {
    this.setState({ fixed: flag });
  };
  componentDidMount() {
    listenToScrollEvent(this.onSetFixed);
  }

  render() {
    const { contents, title } = this.props.data;
    const { fixed } = this.state;
    return (
      <div className={fixed ? "nav-wrap fixed" : "nav-wrap"}>
        <nav>
          <h2>{title}</h2>
          <ul className="nav-left-ul">
            {contents.map((e, i) => (
              <>
                <li key={`left-nav-li-${i}`}>
                  <NavLink to={`/wink/${e.page}`} activeClassName="is-active">
                    {e.title}
                  </NavLink>
                </li>
                {e.contents && (
                  <ul className="additional-ul">
                    {e.contents.map((content, i) => (
                      <li className="additional-li" key={`additional-li-${i}`}>
                        <NavLink
                          to="/"
                          className="additional-navlink"
                          activeClassName="additional-is-active"
                        >
                          {content.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}
export default InPageLeftNav;
