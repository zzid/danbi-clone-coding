import React from "react";
import mykidsData from "data/mykidsPageData.json";
import { Redirect } from "react-router-dom";
import { YearMonthPicker, SampleBox } from "components";
import { Modal } from "antd";
import "antd/dist/antd.css";
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

class ElemantaryPage extends React.Component {
  state = {
    needToSignIn: true,
    goRedirect: false,
  };

  onCancelModal = () => {
    this.setState({ needToSignIn: false, goRedirect: true });
  };

  render() {
    const { needToSignIn, goRedirect } = this.state;
    if (goRedirect) return <Redirect to={"/mykids"} />;
    return (
      <>
        <AccessControlModal
          needToSignIn={needToSignIn}
          onCancelModal={this.onCancelModal}
        />
        <div className={"contents"}>
          <h3>{mykidsData.elemantary.title}</h3>
          <SampleBox params={"elemantary"} />
          <YearMonthPicker />
        </div>
      </>
    );
  }
}
export default ElemantaryPage;
