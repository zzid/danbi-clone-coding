import React from "react";
import { Link } from "react-router-dom";
import UrlData from "data/winkPageData.json";
import "./FreeStudyListPage.scss";

const FreeStudyListPage = (props) => {
  const data = UrlData.studylist;
  const params = props.match.params.category;
  return (
    <>
      <h3>{data[params].title}</h3>
      <div className="wink-div">
        {data[params].images && (
          <>
            <img src={data[params].images[0]} alt={`${params}`} />
            <img src={data[params].images[1]} alt={`${params}`} />
            <div className="btn-area">
              <Link to={"/wink/studylist/freestudy"} className="btn-freestudy">
                무료학습 신청하기
              </Link>
            </div>
            <img src={data[params].images[2]} alt={`${params}`} />
          </>
        )}
      </div>
    </>
  );
};
export default FreeStudyListPage;
