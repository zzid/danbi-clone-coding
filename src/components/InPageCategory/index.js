import React from "react";
import "./InPageCategory.scss";
import { NavLink } from "react-router-dom";

class InPageCategory extends React.Component {
  render() {
    const { categories, pageProps } = this.props;
    return (
      <div className="tab-nav">
        <h3>{pageProps.title}</h3>
        <ul>
          {Object.keys(categories).map((e, i) => {
            const d = categories[e];
            return (
              <li key={`category-nav-li-${i}`}>
                <NavLink
                  to={`/${pageProps.page}/${d.page}`}
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
