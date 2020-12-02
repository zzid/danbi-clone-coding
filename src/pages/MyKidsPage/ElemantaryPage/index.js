import React from "react";
import mykidsData from "data/mykidsPageData.json";
import { Redirect } from "react-router-dom";
import { YearMonthPicker, SampleBox } from "components";
import { Modal } from "antd";
import "antd/dist/antd.css";
import "./ElemantaryPage.scss";
const AccessControlModal = ({ needToSignIn, onCancelModal }) => {
  return (
    <Modal
      wrapClassName={"elemantarypage-container"}
      visible={needToSignIn}
      onCancel={onCancelModal}
      maskClosable={false}
      zIndex={11111}
      footer={null}
      destroyOnClose
      afterClose={() => alert("here")}
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

  onCancelModal = (event) => {
    this.setState({ needToSignIn: false, goRedirect: true });
  };

  render() {
    const { needToSignIn, goRedirect } = this.state;
    return (
      <div className={"elemantarypage-container contents"}>
        <h3>{mykidsData.elemantary.title}</h3>
        <SampleBox params={"elemantary"} />
        <YearMonthPicker />{" "}
        <AccessControlModal
          needToSignIn={needToSignIn}
          onCancelModal={this.onCancelModal}
        />
        {goRedirect && <Redirect to={"/mykids"} />}
      </div>
    );
  }
}
export default ElemantaryPage;
