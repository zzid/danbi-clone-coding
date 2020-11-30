import React from "react";
import "./InPageLeftNav.scss";
import { NavLink } from "react-router-dom";
import { listenToScrollEvent } from "utils/listenToScrollEvent";
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
    const { contents, page, title } = this.props.data;
    const { fixed } = this.state;
    return (
      <div className={fixed ? "nav-wrap fixed" : "nav-wrap"}>
        <nav>
          <h2>{title}</h2>
          <ul className="nav-left-ul">
            {contents.map((e) => (
              <>
                <li key={`category-${e.title}`}>
                  <NavLink
                    to={`/${page}/${e.page}`}
                    activeClassName="is-active"
                  >
                    {e.title}
                  </NavLink>
                </li>
                {/* if there is additional contents, below the content*/}
                {e.contents && (
                  <ul className="additional-ul">
                    {e.contents.map((content) => (
                      <li
                        className="additional-li"
                        key={`additional-${content.title}`}
                      >
                        <NavLink
                          to={`/${page}/${e.page}/${content.page}`}
                          activeClassName="is-active"
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
