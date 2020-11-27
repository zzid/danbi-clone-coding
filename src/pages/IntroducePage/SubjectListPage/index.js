import React from "react";
import UrlData from "data/imageUrl.json";
import { InPageCategory } from "components";

const SubjectListPage = (props) => {
  const data = UrlData.subjectlist;
  const params = props.match.params.category;
  return (
    <>
      <InPageCategory
        categories={data}
        pageProps={{ title: "과목별 학습", page: "wink/subjectlist" }}
      />
      <div className="wink-div">
        <img src={data[params].img} alt={`${params}`} />
      </div>
    </>
  );
};
export default SubjectListPage;
