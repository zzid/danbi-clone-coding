import React from "react";
import mykidsData from "data/mykidsPageData.json";
import { YearMonthPicker, SampleBox } from "components";
import "antd/dist/antd.css";

class ReadingPage extends React.Component {
  render() {
    return (
      <>
        <div className={"contents"}>
          <h3>{mykidsData.reading.title}</h3>
          <SampleBox params={"reading"} />
          <YearMonthPicker />
        </div>
      </>
    );
  }
}

export default ReadingPage;
