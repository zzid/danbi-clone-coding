import React from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import "antd/dist/antd.css";
import "./TableComponent.scss";
const { Column } = Table;

const TableComponent = ({ tableDataObject }) => {
  const { title, columns, page, data } = tableDataObject;
  return (
    <div className={"table-wrap"}>
      <h2 className={"hgroup"}>
        {title}
        <Link to={`/${page}`} className={"additional-btn"}>
          + 더보기
        </Link>
      </h2>
      <Table dataSource={data} calssName="table-container">
        {Object.keys(columns).map((key) => (
          <Column
            title={columns[key]}
            dataIndex={key}
            key={key}
            render={
              key === "title" &&
              ((text, record) => <Link to={`/${page}`}>{record.title}</Link>)
            }
          />
        ))}
      </Table>
    </div>
  );
};

export default TableComponent;
