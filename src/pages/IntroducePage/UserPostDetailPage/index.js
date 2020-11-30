import React from "react";

import boardData from "data/boardData1.json";

class UserPostDetailPage extends React.Component {
  render() {
    const params = this.props.match.params.id;
    const { title } = boardData;
    return (
      <div>
        <h3>{title}</h3>
        <div>{`key = ${params}`}</div>
      </div>
    );
  }
}
export default UserPostDetailPage;
