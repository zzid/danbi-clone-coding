import React from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
import "./ModalComponent.scss";

const ModalComponent = ({ videoInfo, showModal, onClickVideoCancel }) => {
  return (
    <Modal
      visible={showModal}
      onCancel={onClickVideoCancel}
      zIndex={11111}
      centered
      maskClosable={false}
      footer={null}
      destroyOnClose
    >
      <h2>{videoInfo?.title}</h2>
      <video tabIndex="-1" src={videoInfo?.link} controls />
    </Modal>
  );
};
export default ModalComponent;
