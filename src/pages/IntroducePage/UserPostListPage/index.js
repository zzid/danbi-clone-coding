import React from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import boardData from "data/boardData1.json";
import "./UserPostListPage.scss";
import { SearchBar } from "components";
const { Column } = Table;

class UserPostListPage extends React.Component {
  renderSpecificColumn = (key, page, record) => {
    switch (key) {
      case "title":
        return <Link to={`/${page}/${record.key}`}>{record.title}</Link>;
      case "no":
        if (record.no === "추천") {
          return <span className={"tag-notice"}>{record.no}</span>;
        } else {
          return <span>{record.no}</span>;
        }
      default:
        return;
    }
  };

  render() {
    const { title, columns, page, data } = boardData;
    return (
      <div className={"board-table-container"}>
        <h3>{title}</h3>

        <Table dataSource={data} className={"board-table"}>
          {Object.keys(columns).map((key) => (
            <Column
              title={columns[key]}
              dataIndex={key}
              key={key}
              render={
                (key === "title" || key === "no") &&
                ((text, record) => this.renderSpecificColumn(key, page, record))
                // key === "title" &&
                // ((text, record) => <Link to={`/${page}`}>{record.title}</Link>)
              }
            />
          ))}
        </Table>
        <SearchBar placeHolder={"이름 아이디 제목을 입력해 주세요."} />
        <div className={"apply-free-study-div"}>
          <Link to={"/wink/studylist/freestudy"}>
            부담 없는 윙크 <span>무료학습</span>
            <br />
            자세히 알아보기
          </Link>
        </div>
      </div>
    );
  }
}
export default UserPostListPage;
