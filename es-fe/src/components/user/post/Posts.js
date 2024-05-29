import { Avatar, Col, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
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
import Image from "../../image/Image";
import PostUpload from "./PostUpload";

const Posts = (props) => {
  return (
    <div>
      <PostUpload />
      <div className="mse-32">
        <Row justify={"center"}>
          <Col span={24} className={`${styles.post} bg-wh`}>
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
              <div cl>
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
                  <div>
                    <img
                      alt="a 2"
                      src="https://i.pinimg.com/736x/e3/88/44/e38844ef720e15f03af4cb1c05a7505f.jpg"
                      height={240}
                      style={{ objectFit: "cover", aspectRatio: "auto" }}
                    />
                    <img
                      alt="a 3"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMm7G6605fnEJP4-AEaWNI41fH6xh6cqyjSxn7mwkNg&s"
                      height={240}
                      style={{ objectFit: "cover", aspectRatio: "auto" }}
                    />
                    <img
                      alt="a 1"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMm7G6605fnEJP4-AEaWNI41fH6xh6cqyjSxn7mwkNg&s"
                      height={240}
                      style={{ objectFit: "cover", aspectRatio: "auto" }}
                    />
                  </div>

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
                    <Col
                      span={6}
                      className="buttonGrayIcon bce-green "
                      onClick={() => {
                        props.setOpenPostDetail("d-flex");
                      }}
                    >
                      <Row justify={"center"}>
                        <PendingOutlined />
                      </Row>
                    </Col>
                    <Col span={6} className="buttonGrayIcon ">
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
