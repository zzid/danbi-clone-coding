import React from "react";
import { InPageCategory } from "components";
import UrlData from "data/winkPageData.json";
import "./AgeStudyListPage.scss";

const AgeStudyListPage = (props) => {
  const params = props.match.params.category;
  const data = UrlData.agestudylist;
  return (
    <div className={"age-study-wrapper"}>
      <InPageCategory
        categories={data}
        pageProps={{ title: "연령별 학습", page: "wink/agestudylist" }}
      />
      <div className="wink-div">
        <img src={data[params].img} alt={`${params}`} />
      </div>
    </div>
  );
};
export default AgeStudyListPage;
