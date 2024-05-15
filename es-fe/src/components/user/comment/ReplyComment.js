import { MoreVert } from "@mui/icons-material";
import { Avatar, Col, Modal, Row } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import WriteComment from "./WriteComment";

const ReplyComment = (props) => {
  return (
    <Modal
      open={props.openModalReply}
      onCancel={props.onCancel}
      title="Phản hồi"
      centered
      width={"50%"}
      footer={<WriteComment />}
    >
      <Row justify={"space-between"} align={"middle"}>
        <div className="fac">
          <Avatar size={40} className="me-8" />
          <Title level={5}>Account Name</Title>
        </div>
        <div>
          <MoreVert />
        </div>
        <Col span={24}>titi</Col>
      </Row>
    </Modal>
  );
};

export default ReplyComment;
