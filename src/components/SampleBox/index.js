import mykidsData from "data/mykidsPageData.json";
import { Link } from "react-router-dom";

const SampleBox = ({ params }) => {
  return (
    <>
      {mykidsData[params].text ? (
        <div className="sample-box">
          <strong className="title">
            아래는 <span className="dot">샘</span>
            <span className="dot">플</span> 화면입니다.
          </strong>
          <p>
            {mykidsData[params]?.text}
            <br />
            <br />
            윙크 학습을 직접 체험해 보시려면
            <br />
            <strong>'무료 학습 신청'을 해주세요.</strong>
          </p>
          <div className="btn-wrapper">
            <Link
              to={"/wink/studylist/freestudy"}
              className="study-btn study on"
            >
              무료 학습 신청
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SampleBox;
