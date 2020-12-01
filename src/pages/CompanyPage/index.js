import React from "react";
import "./CompanyPage.scss";

const CompanyPage = () => {
  const SectionDiv = ({ className, title, url, render }) => {
    return (
      <div className={className}>
        <div className={"title"}>
          <h1>{title}</h1>
        </div>
        {render}
        <div className={"section"}>
          <img src={url} />
        </div>
      </div>
    );
  };

  return (
    <div className={"companypage-container"}>
      <div className={"section company-introduce"}>
        <h3>회사 소개</h3>
        <img src="https://s.wink.co.kr/pc/images/about/section_01.png" />
      </div>
      <SectionDiv
        title={"단비교육 개요"}
        url={"https://s.wink.co.kr/pc/images/about/img_summary.png"}
      />
      <SectionDiv
        className={"company-history"}
        title={"단비교육 History"}
        url={"https://s.wink.co.kr/pc/1.1.0/company/company_history.png"}
      />
      <SectionDiv
        title={"단비교육 Mission & Vision"}
        url={"https://s.wink.co.kr/pc/images/about/img_goal.png"}
        render={
          <div className={"company-value section"}>
            (주)단비교육은 <span>"꼭 필요한 때에 알맞게 내리는 단비"</span>
            처럼 우리의 미래이자 희망인 어린 아이들에게 꼭 필요한 교육서비스를
            제공하고자 합니다.
          </div>
        }
      />
      <SectionDiv
        title={"윙크의 차별화 포인트"}
        url={
          "https://s.wink.co.kr/pc/images/about/img_differentiation_0528.png"
        }
      />
    </div>
  );
};
export default CompanyPage;
