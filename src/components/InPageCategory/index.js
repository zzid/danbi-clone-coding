import React from "react";
import "./InPageCategory.scss";
import { NavLink } from "react-router-dom";

class InPageCategory extends React.Component {
  state = {
    curTitle: "",
    params: "",
  };
  componentDidMount() {
    let curData = this.props.data.contents.find(
      (e) => e.page === this.props.params
    );
    this.setState({
      curTitle: curData.title,
      params: this.props.params,
    });
    console.log(this.state.curTitle);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.params !== this.props.params) {
      let curData = this.props.data.contents.find(
        (e) => e.page === this.props.params
      );
      this.setState({
        curTitle: curData.title,
        params: this.props.params,
      });
    }
  }

  render() {
    const { category } = this.props;
    const { curTitle } = this.state;
    return (
      <div className="tab-nav">
        <h3>{curTitle}</h3>
        <ul>
          {Object.keys(category).map((e, i) => {
            const d = category[e];
            return (
              <li key={`category-nav-li-${i}`}>
                <NavLink to={`/wink/${d.page}`} activeClassName="is-active">
                  {d.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default InPageCategory;
