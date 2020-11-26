import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import "./TableComponent.scss";
const { Column } = Table;

const TableComponent = ({ tableDataObject }) => {
  const { title, data } = tableDataObject;
  return (
    <div className={"table-wrap"}>
      <h2 className={"hgroup"}>
        {title}
        <a className={"table-btn"}>+ 더보기</a>
      </h2>
      <Table dataSource={data} calssName="table-container">
        <Column title="No" dataIndex="no" key="no" />
        <Column
          title="제목"
          // dataIndex="title"
          key="title"
          render={(text, record) => <a href="/">{record.title}</a>}
        />
        {data[0]?.author && (
          <Column title="작성자" dataIndex="author" key="author" />
        )}
        {data[0]?.date && <Column title="작성일" dataIndex="date" key="date" />}
        {data[0]?.click && (
          <Column title="조회수" dataIndex="click" key="click" />
        )}

        {/*<Column*/}
        {/*  title="Action"*/}
        {/*  key="action"*/}
        {/*  render={(text, record) => (*/}
        {/*    <Space size="middle">*/}
        {/*      <a>Invite {record.title}</a>*/}
        {/*      <a>Delete</a>*/}
        {/*    </Space>*/}
        {/*  )}*/}
        {/*/>*/}
      </Table>
    </div>
  );
};

export default TableComponent;
