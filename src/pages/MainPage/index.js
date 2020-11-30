import React from "react";
import {
  MainPageFirstSection,
  MainPageThirdSection,
  MainPageSecondSection,
} from "components";

import "./MainPage.scss";

class MainPage extends React.Component {
  render() {
    return (
      <div className="mainpage-container">
        <MainPageFirstSection />
        <MainPageSecondSection />
        <MainPageThirdSection />
      </div>
    );
  }
}
export default MainPage;
