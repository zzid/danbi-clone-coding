import React from "react";
import "./InPageCategory.scss";
import { NavLink } from "react-router-dom";
import UrlData from "../../data/imageUrl.json";

class InPageCategory extends React.Component {
  state = {
    curTitle: "",
    params: "",
  };
  componentDidMount() {
    if (this.props.params.match(/subject/g)) {
      this.setState({
        curTitle: "과목별 학습",
        params: this.props.params,
      });
    } else if (this.props.params.match(/look/g)) {
      this.setState({
        curTitle: "윙크 한눈에 보기",
        params: this.props.params,
      });
    } else if (this.props.params.match(/agestudy/g)) {
      this.setState({
        curTitle: "연령별 학습",
        params: this.props.params,
      });
    }
    console.log(this.props.data);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.params !== this.props.params) {
      if (this.props.params.match(/subject/g)) {
        this.setState({
          curTitle: "과목별 학습",
          params: this.props.params,
        });
      } else if (this.props.params.match(/look/g)) {
        this.setState({
          curTitle: "윙크 한눈에 보기",
          params: this.props.params,
        });
      } else if (this.props.params.match(/agestudy/g)) {
        this.setState({
          curTitle: "연령별 학습",
          params: this.props.params,
        });
      }
    }
  }

  render() {
    const { category, data } = this.props;
    const { curTitle } = this.state;
    return (
      <div className="tab-nav">
        <h3>{curTitle}</h3>
        <ul>
          {Object.keys(category).map((e, i) => {
            const d = category[e];
            return (
              <li key={`category-nav-li-${i}`}>
                <NavLink
                  to={`/${data.page}/${d.page}`}
                  activeClassName="is-active"
                >
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
