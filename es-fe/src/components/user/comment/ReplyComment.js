import {
  KeyboardDoubleArrowDown,
  KeyboardDoubleArrowUp,
  MoreHoriz,
  MoreVert,
  PendingOutlined,
} from "@mui/icons-material";
import { Avatar, Badge, Col, Divider, List, Modal, Row } from "antd";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";
import WriteComment from "./WriteComment";

const ReplyComment = (props) => {
  const [dataList, setDataList] = useState([
    {
      title: "Account name",
      question: `Trong câu sau, từ ngữ "which" được sử dụng như thế nào: "The book which I borrowed from the library is very interesting."`,
    },
    {
      title: "Account name",
      question: `Hãy giải thích sự khác biệt giữa "much" và "many" khi sử dụng trong câu.`,
    },
    {
      title: "Account name",
      question: `Sử dụng thì đúng của động từ trong câu sau: "She (to study) all night for the exam tomorrow."`,
    },
    {
      title: "Account name",
      question: `Hãy viết lại câu sau bằng cách sử dụng giới từ "for": "I will be in London next week."`,
    },
    {
      title: "Account name",
      question: `so i like the title of the page"`,
    },
  ]);
  return (
    <Modal
      open={props.openModalReply}
      onCancel={props.onCancel}
      title="Phản hồi"
      centered
      width={"50%"}
      footer={null}
    >
      <Row align={"top"}>
        <Col span={10} className="h100">
          <div className="me-16">
            <div className="fac">
              <Avatar size={40} className="me-8" />
              <Title level={5}>Account Name</Title>
            </div>
            <div className="p-16">Bình luận</div>
            <Row className="bcb-green">
              <Col span={6} className="buttonGrayIcon bce-green ">
                <Row justify={"center"}>
                  <KeyboardDoubleArrowUp />
                </Row>
              </Col>
              <Col span={6} className="buttonGrayIcon bce-green ">
                <Row justify={"center"}>
                  <KeyboardDoubleArrowDown />
                </Row>
              </Col>
              <Col span={6} className="buttonGrayIcon bce-green ">
                <Row justify={"center"}>
                  <PendingOutlined />
                </Row>
              </Col>
              <Col span={6} className="buttonGrayIcon">
                <Row justify={"center"}>
                  <MoreVert />
                </Row>
              </Col>
            </Row>
            <div>
              <WriteComment />
            </div>
          </div>
        </Col>
        <Col span={14}>
          <List
            id="scroll-hover"
            itemLayout="vertical"
            header={<Title level={5}>Bình luận (1226)</Title>}
            dataSource={dataList}
            pagination={{ pageSize: 5, align: "center", position: "bottom" }}
            style={{ height: "50vh" }}
            loadMore={
              <Row justify={"center"}>
                <span className="buttonGrayIcon">
                  <MoreHoriz />
                </span>
              </Row>
            }
            renderItem={(item, index) => (
              <List.Item
                extra={
                  <img
                    width={240}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                }
              >
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://api.dicebear.com/7.x/miniavs/svg?seed=1`}
                    />
                  }
                  title={<span>{item.title}</span>}
                />
                <div>{item.question}</div>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </Modal>
  );
};

export default ReplyComment;
