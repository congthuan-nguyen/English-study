import { AddToPhotosOutlined, VideoCallOutlined } from "@mui/icons-material";
import { Avatar, Button, Col, List, Row } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { Link } from "react-router-dom";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ChatIcon from "@mui/icons-material/Chat";
import ReportIcon from "@mui/icons-material/Report";
const Community = () => {
  const dataList = [
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
  ];
  return (
    <Row justify={"center"} className="bg-gg h-100vh_m_48">
      <Col span={20}>
        <Row>
          <Col span={8}>
            <div className="mtb-16 me-16 bg-wh p-32 bs-glittle bc-green">
              <Row align={"middle"}>
                <Col span={4}>
                  <Avatar size={48} />
                </Col>
                <Col span={16}>
                  <Link to={""} className={`${"buttonGreenActive"} fjc`}>
                    <AddToPhotosOutlined className="me-8" /> Đăng bài
                  </Link>
                </Col>
                <Col span={4}>
                  <div className="ms-8">
                    <Link to={""} className={`${"buttonGreenActive"} fjc`}>
                      <VideoCallOutlined />
                    </Link>
                  </div>
                </Col>
                <Col span={24} className="mtb-16 bc-green br-4 p-16">
                  <Title level={5}>Bài đăng của bạn</Title>
                  <List
                    itemLayout="horizontal"
                    header={true}
                    dataSource={dataList}
                    pagination={{ pageSize: 2, align: "center" }}
                    renderItem={(item, index) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <Avatar
                              src={`https://api.dicebear.com/7.x/miniavs/svg?seed=1`}
                            />
                          }
                          title={<span>{item.title}</span>}
                          description={
                            <div>
                              {item.question}
                              <div className="fac">
                                <span className="fac me-8">
                                  <ThumbUpAltIcon />
                                </span>{" "}
                                163
                                <span className="fac me-8 ms-16">
                                  <ThumbDownAltIcon />{" "}
                                </span>{" "}
                                0
                                <span className="fac me-8 ms-16">
                                  <ChatIcon />{" "}
                                </span>{" "}
                                14
                                <span className="fac me-8 ms-16">
                                  <ReportIcon />
                                </span>
                              </div>
                            </div>
                          }
                        />
                      </List.Item>
                    )}
                  />
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={16}>
            <div className="mtb-16 bg-wh p-32 bs-glittle bc-green"></div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Community;
