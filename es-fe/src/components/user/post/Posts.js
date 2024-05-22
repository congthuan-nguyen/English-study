import { Avatar, Col, Row, Space } from "antd";
import React from "react";
import styles from "./Post.module.css";
import Title from "antd/es/typography/Title";
import {
  KeyboardDoubleArrowDown,
  KeyboardDoubleArrowUp,
  MoreVert,
  PendingOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import WriteComment from "../comment/WriteComment";

const Posts = () => {
  return (
    <div>
      <div className="mse-32">
        <Row justify={"center"}>
          <Col span={22} className={`${styles.post} bg-wh`}>
            <div className={`p-32`}>
              <Row justify={"space-between"} align={"middle"}>
                <div className="fac">
                  <Space>
                    <Avatar size={48} />
                    <Title level={4} style={{ margin: 0 }}>
                      Account name
                    </Title>
                    <span>Đã đăng 14 phút trước</span>
                  </Space>
                </div>
                <MoreVert />
              </Row>
              <div>
                <Space direction="vertical" size={16}>
                  <Title level={3}>Tiêu đề của bài viết</Title>
                  <span>
                    Trọng âm là một phần cơ bản và quan trọng trong quá trình
                    học phát âm tiếng Anh. Việc rèn luyện dạng bài tập này
                    thường xuyên không chỉ giúp người học “ăn điểm” phần ngữ âm
                    ở các bài kiểm tra mà còn nâng cao khả năng phát âm chuẩn,
                    tự nhiên, phục vụ các bài thi Speaking (Kỹ năng nói) nói
                    riêng và việc giao tiếp bằng Tiếng Anh nói chung.
                  </span>
                  <div>
                    <Space size={16}>
                      <Link to={""}>#grammar</Link>
                      <Link to={""}>#knownledge</Link>
                    </Space>
                  </div>
                  <img
                    alt=""
                    width={"50%"}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMm7G6605fnEJP4-AEaWNI41fH6xh6cqyjSxn7mwkNg&s"
                  />
                  <Row className="bcb-green" align={"middle"}>
                    <Col span={4} className="buttonGrayIcon  ">
                      <Row justify={"center"}>
                        <KeyboardDoubleArrowUp />
                      </Row>
                    </Col>
                    <Col span={4} className="p-8 ">
                      <Row justify={"center"} align={"middle"}>
                        1123
                      </Row>
                    </Col>
                    <Col span={4} className="buttonGrayIcon bce-green ">
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
                </Space>
              </div>
              <div>
                <WriteComment />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Posts;
