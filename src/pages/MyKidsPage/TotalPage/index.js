import React from "react";
import mykidsData from "data/mykidsPageData.json";
import { YearMonthPicker, SampleBox } from "components";
import "./TotalPage.scss";
import "antd/dist/antd.css";

class TotalPage extends React.Component {
  render() {
    return (
      <>
        <div className={"contents"}>
          <h3>{mykidsData.total.title}</h3>
          <SampleBox params={"total"} />
          <YearMonthPicker />
        </div>
      </>
    );
  }
}

export default TotalPage;
