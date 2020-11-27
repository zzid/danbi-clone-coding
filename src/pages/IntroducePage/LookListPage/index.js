import React from "react";
import UrlData from "data/imageUrl.json";
import { InPageCategory } from "components";

const LookListPage = (props) => {
  const data = UrlData.looklist;
  const params = props.match.params.category;
  return (
    <>
      <InPageCategory
        categories={data}
        pageProps={{ title: "윙크 한눈에 보기", page: "wink/looklist" }}
      />
      <div className="wink-div">
        <img src={data[params].img} alt={`${params}`} />
        {params === "lookdevice" && (
          <a
            href="https://s.wink.co.kr/marketing/guide/wink_guide.pdf"
            target="_blank"
            rel="noreferrer"
            className="link-btn"
          >
            세부 내용 및 설치 방법 알아보기
          </a>
        )}
      </div>
    </>
  );
};
export default LookListPage;
