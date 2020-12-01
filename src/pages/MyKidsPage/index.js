import React from "react";
import NavBarData from "data/data.json";
import mykidsData from "data/mykidsPageData.json";
import { Redirect } from "react-router-dom";
import { InPageLeftNav, YearMonthPicker, SampleBox } from "components";
import "./MyKidsPage.scss";
import { Modal } from "antd";
import "antd/dist/antd.css";

const data = NavBarData.NavBarData.mykids;
const AccessControlModal = ({ needToSignIn, onCancelModal }) => {
  return (
    <Modal
      visible={needToSignIn}
      onCancel={onCancelModal}
      maskClosable={false}
      zIndex={11111}
      footer={null}
    >
      <div className={"access-control-modal-container"}>
        <p className={"text"}>해당 메뉴는 7세 이상만 이용가능 합니다.</p>
        <button className={"btn"} onClick={onCancelModal}>
          확인
        </button>
      </div>
    </Modal>
  );
};
class MyKidsPage extends React.Component {
  state = {
    needToSignIn: false,
    goRedirect: false,
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    let curParams = this.props.match.params.category;
    if (prevProps.match.params.category !== curParams) {
      if (mykidsData[curParams].needToSignIn) {
        this.setState({ needToSignIn: true });
      }
    }
  }

  onCancelModal = () => {
    this.setState({ needToSignIn: false, goRedirect: true });
  };
  render() {
    const params = this.props.match.params.category;
    const { needToSignIn, goRedirect } = this.state;
    if (goRedirect) return <Redirect to={"/mykids"} />;
    return (
      <>
        <AccessControlModal
          needToSignIn={needToSignIn}
          onCancelModal={this.onCancelModal}
        />
        <div className={"page-container"}>
          <InPageLeftNav data={data} params={params} />
          <div className={"contents"}>
            <h3>{mykidsData[params]?.title}</h3>
            <SampleBox params={params} />
            <YearMonthPicker />
          </div>
        </div>
      </>
    );
  }
}

export default MyKidsPage;
