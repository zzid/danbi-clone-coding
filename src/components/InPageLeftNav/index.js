import React from "react";
import "./InPageLeftNav.scss";
import { NavLink } from "react-router-dom";

class InPageLeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleScrollEvent = this.reqAnimationFrame.bind(this);
  }
  state = {
    fixed: false,
  };

  componentDidMount() {
    document.addEventListener("scroll", this.handleScrollEvent);
  }
  componentWillUnmount() {
    console.log("unmount : ", this.reqID);
    document.removeEventListener("scroll", this.handleScrollEvent);
    cancelAnimationFrame(this.reqID);
  }
  reqAnimationFrame() {
    this.reqID = requestAnimationFrame(() => {
      if (window.pageYOffset > 80) {
        this.setState({ fixed: true });
      } else if (window.pageYOffset < 50) {
        this.setState({ fixed: false });
      }
    });
  }

  onSetFixed = (flag) => {
    this.setState({ fixed: flag });
  };

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
