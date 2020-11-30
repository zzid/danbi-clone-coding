import React from "react";
import UrlData from "data/winkPageData.json";
import { InPageCategory } from "components";
import { Link } from "react-router-dom";
import "./SubjectListPage.scss";
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
        <div className={"next-btn-wrapper"}>
          <Link
            to={`/wink/subjectlist/${data[params].next.page}`}
            className={"next-btn"}
          >
            {`윙크 ${data[params].next.title} 내용 보러가기`}
          </Link>
        </div>
      </div>
    </>
  );
};
export default SubjectListPage;
