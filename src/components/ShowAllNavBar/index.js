import React from "react";
import data from "data/data.json";
import { Link } from "react-router-dom";
import "./ShowAllNavBar.scss";
const NavBarData = data.NavBarData;
const ShowAllAdditional = data.ShowAllAdditional;
const ShowAllNavBar = ({ classProp }) => {
  return (
    <div
      className={
        classProp
          ? "show-all-nav-bar-container"
          : "show-all-nav-bar-container show-all-hide"
      }
    >
      <div className={"upper"}>
        {Object.keys(NavBarData).map((key) => (
          <div className={"show-all-menu-list"}>
            <Link to={`/${NavBarData[key].page}`}>{NavBarData[key].title}</Link>
            <ul>
              {NavBarData[key].contents.map((content, i) => (
                <li key={`show-all-nav-upper-content-${i}`}>
                  <Link to={`/${NavBarData[key].page}/${content.page}`}>
                    {content.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={"downer"}>
        {Object.keys(ShowAllAdditional).map((key) => (
          <div className={"show-all-menu-list"}>
            <Link to={`/${ShowAllAdditional[key].page}`}>
              {ShowAllAdditional[key].title}
            </Link>
            <ul>
              {ShowAllAdditional[key].contents?.map((content, i) => (
                <li key={`show-all-nav-downer-content-${i}`}>
                  <Link to={"#"}>{content.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowAllNavBar;
