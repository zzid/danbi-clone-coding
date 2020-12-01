import React from "react";
import mykidsData from "data/mykidsPageData.json";
import { YearMonthPicker, SampleBox } from "components";
import "antd/dist/antd.css";

class SubjectKorPage extends React.Component {
  render() {
    return (
      <>
        <div className={"contents"}>
          <h3>{mykidsData.subjectkor.title}</h3>
          <SampleBox params={"subjectkor"} />
          <YearMonthPicker />
        </div>
      </>
    );
  }
}

export default SubjectKorPage;
