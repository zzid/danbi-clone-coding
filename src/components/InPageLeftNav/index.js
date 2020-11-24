import React from "react";
import "./InPageLeftNav.scss";
import { NavLink } from "react-router-dom";

class InPageLeftNav extends React.Component {
  render() {
    const { contents, title } = this.props.data;
    // const title = contents.find((e) => e.page === params);
    // const { setCurrentTitle } = this.props;
    return (
      <div className="nav-wrap">
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
