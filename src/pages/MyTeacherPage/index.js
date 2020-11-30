import React from "react";
import NavBarData from "data/data.json";
import { InPageLeftNav } from "components";
const data = NavBarData.NavBarData.myteacher;

class MyTeacherPage extends React.Component {
  render() {
    const params = this.props.match.params.category;
    return (
      <div className="page-container">
        <InPageLeftNav data={data} params={params} />
        <div className="contents"></div>
      </div>
    );
  }
}

export default MyTeacherPage;
