import React from "react";
import NavBarData from "data/data.json";
import UrlData from "data/imageUrl.json";
import { InPageLeftNav, InPageCategory } from "components";
const data = NavBarData.NavBarData.mykids;
class MyKidsPage extends React.Component {
  render() {
    const params = this.props.match.params.category;
    console.log(data);
    return (
      <div className="page-container">
        <InPageLeftNav data={data} params={params} />
        <div className="contents">
          {/*<InPageCategory*/}
          {/*  data={data}*/}
          {/*  // category={this.category}*/}
          {/*  params={params}*/}
          {/*/>*/}
        </div>
      </div>
    );
  }
}

export default MyKidsPage;
