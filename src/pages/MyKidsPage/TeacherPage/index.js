import React from "react";
import mykidsData from "data/mykidsPageData.json";
import { YearMonthPicker, SampleBox } from "components";
import "antd/dist/antd.css";

class TeacherPage extends React.Component {
  render() {
    return (
      <>
        <div className={"contents"}>
          <h3>{mykidsData.teacher.title}</h3>
          <SampleBox params={"teacher"} />
        </div>
      </>
    );
  }
}

export default TeacherPage;
