import React from "react";
import mykidsData from "data/mykidsPageData.json";
import { YearMonthPicker, SampleBox } from "components";
import "antd/dist/antd.css";

class LearningPage extends React.Component {
  render() {
    return (
      <>
        <div className={"contents"}>
          <h3>{mykidsData.learning.title}</h3>
          <SampleBox params={"learning"} />
          <YearMonthPicker />
        </div>
      </>
    );
  }
}

export default LearningPage;
