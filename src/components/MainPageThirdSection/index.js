import React from "react";
import { SearchBar } from "components";
import { Link } from "react-router-dom";
import "./MainPageThirdSection.scss";
const MainPageThirdContent = () => {
  return (
    <div className={"bottom-area"}>
      <div className={"section mainpage-contents-section-3"}>
        <div className={"section-3-search left"}>
          <h2 className={"hgroup"}>
            유아 교육 상식
            <Link to={`/customer/noticelist`} className={"additional-btn"}>
              + 더보기
            </Link>
          </h2>
          <div className="search-area">
            <SearchBar
              placeHolder={"서비스 관련한 궁금한 사항을 검색해 보세요."}
            />
            <div className="keyword-box">
              <strong>추천검색어</strong>
              <ul>
                <li>
                  <Link to={"/info/infomain"}>수학공부</Link>
                </li>
                <li>
                  <Link to={"/info/infomain"}>자녀교육</Link>
                </li>
                <li>
                  <Link to={"/info/infomain"}>유아사춘기</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="board-preview">
            <ul className="qna-wrap">
              <li>
                <div className="cate">
                  <span>교육 ▶ 수학교육</span>
                  <span>4세~7세</span>
                </div>
                <div className="text-area">
                  <p className="question">
                    유아 수학공부 언제부터 시작하는 것이 좋은가요?
                  </p>
                  <p className="answer">
                    아이들의 발달 수준에 따라 다르겠지만 대략 만 24개월이 되면
                    기초적인 수 세기가 가능해지는데 이때가 수 교육이 가능해지는
                    시기라고 볼 수 있습니다. 그러나 수 세기가 가능하다는 것이
                    수의 의미를 정확히 알고 하는 것은 아니며 생활 속에서 익혀서
                    감각적으로 아는 것입니다. 따라서 무엇보다 중요한 점은 유아기
                    수학교육은 학습이 아닌 자연스러운 과정에서 습득되
                  </p>
                </div>
              </li>
              <li>
                <div className="cate">
                  <span>교육 ▶ 수학교육</span>
                  <span>4세~7세</span>
                </div>
                <div className="text-area">
                  <p className="question">
                    놀이로 시작하는 수학 지켜야 할 것은 무엇인가요?
                  </p>
                  <p className="answer">
                    놀이를 통한 학습은 유아로 하여금 흥미를 가지고 적극적으로
                    보다 오랜 시간 동안 주의를 집중하게 하여 효과적인 학습이
                    이루어지게 합니다. 왜냐면 놀이는 기쁨이나 즐거움 같은
                    긍적적인 정서가 바탕이 되므로, 놀이 자체에 활동적이고
                    적극적이게 되기 때문입니다. 그런데 교육적 가치를 강조한
                    놀이는 놀이 안에서 유아의 자율성과 적극성을 저해하는 문제가
                    생기기도 합
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={"section-3-contents right"}>
          <ul>
            <li>
              <p className="title">
                윙크 학습기 설치,
                <br /> 어렵지 않아요!
              </p>
              <a
                className="btn-link guide"
                href="https://s.wink.co.kr/marketing/guide/wink_guide.pdf"
                target="_blank"
                rel="noreferrer"
              >
                윙크 학습기
                <br />
                설치 가이드
              </a>
              <a
                className="btn-link guide"
                href="https://s.wink.co.kr/marketing/guide/wink_samsung_guide.pdf"
                target="_blank"
                rel="noreferrer"
              >
                삼성 학습기
                <br />
                설치 가이드
              </a>
            </li>
            <li>
              <p className="title">
                우리 아이 학습 현황은 기본!
                <br />
                일석다조 윙크 무료 학부모앱,
              </p>
              <p className="sub-title">지금 바로 설치하세요!</p>
              <Link to="/customer/download" className="btn-link">
                자세히 보기
              </Link>
            </li>
            <li>
              <p className="sub-title">우리 아이들의 가능성을 믿고</p>
              <p className="title">미래를 키우는 윙크선생님</p>
              <a
                className="btn-link"
                href="http://recruit.wink.co.kr/client/recruit/?pagename=teacher/teacher"
              >
                모집 요강
                <br />
                자세히 보기
              </a>
            </li>
            <li>
              <p className="sub-title">
                교육 전문가들과
                <br />
                학부모님의 의견을 반영한
              </p>
              <p className="title">윙크 탄생배경</p>
              <a
                href="https://www.wink.co.kr/client/desktop/?pagename=company/history"
                className="btn-link"
              >
                자세히 보기
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainPageThirdContent;
