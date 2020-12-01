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
                {/* if there is additional contents */}
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
                {/* this below is for customer page*/}
                {e.text && (
                  <div className={"text-in-category"}>
                    <span className={"title"}>{e.text.title}</span>
                    <br />
                    <span className={"phone-number"}>{e.text.phoneNumber}</span>
                    <span className={"sub-title"}>
                      {e.text.weekdays}{" "}
                      <span className={"time"}>{e.text.weekdaysTime}</span>
                    </span>
                    <br />
                    <span className={"sub-title"}>
                      {e.text.weekend}{" "}
                      <span className={"time"}>{e.text.weekendTime}</span>
                    </span>
                  </div>
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
