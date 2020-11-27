import React from "react";
import UrlData from "data/imageUrl.json";
import "./FreeStudyListPage.scss";

const FreeStudyListPage = (props) => {
  const data = UrlData.studylist;
  const params = props.match.params.category;
  return (
    <>
      <h3>무료 체험 학습 신청</h3>
      <div className="wink-div">
        {data[params].images && (
          <>
            <img src={data[params].images[0]} alt={`${params}`} />
            <img src={data[params].images[1]} alt={`${params}`} />
            <div className="btn-area">
              <a className="btn-freestudy">무료학습 신청하기</a>
            </div>
            <img src={data[params].images[2]} alt={`${params}`} />
          </>
        )}
      </div>
    </>
  );
};
export default FreeStudyListPage;
