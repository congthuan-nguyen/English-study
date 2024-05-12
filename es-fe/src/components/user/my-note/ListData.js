import {
  Avatar,
  Button,
  Col,
  Divider,
  List,
  Popover,
  Row,
  Space,
  Table,
  Typography,
} from "antd";
import Title from "antd/es/typography/Title";
import React, { useEffect, useState } from "react";
import styles from "./MyNote.module.css";
import {
  AntDesignOutlined,
  DeleteFilled,
  GlobalOutlined,
  PlusCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  AddLink,
  CameraAlt,
  Edit,
  EmojiEmotions,
  Reply,
  Send,
  Visibility,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import EmojiPicker from "emoji-picker-react";
const { Text } = Typography;
const ListData = (props) => {
  const [rows, setRows] = useState(2);
  const [expanded, setExpanded] = useState(false);
  const [owner, setOwner] = useState(true);
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [attributes, setAttributes] = useState([
    {
      id: "1",
      name: "Từ vựng",
      type: "1",
    },
    {
      id: "2",
      name: "Phiên âm",
      type: "2",
    },
    {
      id: "3",
      name: "Loại từ",
      type: "3",
    },
    {
      id: "4",
      name: "Ngữ nghĩa",
      type: "4",
    },
    {
      id: "5",
      name: "Từ đồng nghĩa",
      type: "5",
    },
    {
      id: "6",
      name: "Từ trái nghĩa",
      type: "6",
    },
    {
      id: "7",
      name: "Ví dụ",
      type: "7",
    },
  ]);
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
    {
      title: "Account name",
      question: `so i like the title of the page"`,
    },
  ];

  useEffect(() => {}, []);
  return (
    <Row justify={"center"} className="bcb-green ">
      <Col span={6} className={`${styles.wh}  bce-green`}>
        <div className="bg-wh p-32">
          <Title level={4}>
            Từ vựng - Chủ để liên quan đến thể thao <GlobalOutlined />
          </Title>
          <Row align={"middle"}>
            <Col span={24} className="fjc">
              <Avatar shape="square" size={120} />
            </Col>
            <Col span={24} className="fjc">
              <Typography.Paragraph
                ellipsis={{
                  rows,
                  expandable: "collapsible",
                  expanded,
                  onExpand: (_, info) => setExpanded(info.expanded),
                }}
              >
                Mô tả: Cơ mà của từ vựng chủ đề thể thao là nền tảng vững chắc
                giúp bạn hiểu và giao tiếp hiệu quả trong môi trường liên quan
                đến thể thao. Đây là các thuật ngữ, cụm từ và các khái niệm cơ
                bản mà người yêu thể thao cần phải biết để thảo luận, theo dõi
                và tham gia vào các hoạt động thể thao.
              </Typography.Paragraph>
            </Col>
            {owner && (
              <Col span={24} className="fjc mb-8">
                <Edit />
              </Col>
            )}

            <Col span={24} className="mtb-16 bc-green br-4 p-16">
              <Avatar /> Nguyễn Công Thuần - Chủ sở hữu
              <div className="mt-8">
                <span className="me-8">Người tham gia:</span>
                <Avatar.Group
                  maxCount={5}
                  maxStyle={{
                    color: "#f56a00",
                    backgroundColor: "#fde3cf",
                  }}
                >
                  <Avatar
                    style={{
                      backgroundColor: "#f56a99",
                    }}
                  >
                    T
                  </Avatar>
                  <Avatar
                    style={{
                      backgroundColor: "#f56a00",
                    }}
                  >
                    K
                  </Avatar>
                  <Avatar
                    style={{
                      backgroundColor: "#87d068",
                    }}
                    icon={<UserOutlined />}
                  />
                  <Avatar
                    style={{
                      backgroundColor: "#1677ff",
                    }}
                    icon={<AntDesignOutlined />}
                  />
                  <Avatar
                    style={{
                      backgroundColor: "#1699ff",
                    }}
                    icon={<AntDesignOutlined />}
                  />
                  <Avatar
                    style={{
                      backgroundColor: "#87d898",
                    }}
                    icon={<UserOutlined />}
                  />
                </Avatar.Group>
              </div>
            </Col>

            {owner && (
              <Col span={24} className="mtb-16 bc-green br-4 p-16">
                <Title level={5}>Lịch sử chỉnh sửa</Title>
                <List
                  itemLayout="horizontal"
                  header={true}
                  dataSource={dataList}
                  pagination={{ pageSize: 4, align: "center" }}
                  renderItem={(item, index) => (
                    <List.Item className="buttonGrayTranset">
                      <List.Item.Meta
                        avatar={
                          <Avatar
                            src={`https://api.dicebear.com/7.x/miniavs/svg?seed=1`}
                          />
                        }
                        title={<span>{item.title}</span>}
                        description={<div>{item.question}</div>}
                      />
                    </List.Item>
                  )}
                />
              </Col>
            )}
          </Row>
        </div>
      </Col>
      <Col span={18} className={styles.wh}>
        <Row className=" bg-wh p-32 " justify={"space-between"}>
          <div className="fac">
            <Text type="secondary" className="fac me-8">
              <Visibility /> 1223
            </Text>
            <Text type="secondary" className="fac">
              <Reply style={{ transform: "scaleX(-1)" }} /> 1223
            </Text>
          </div>
          <DeleteFilled className="buttonDangerbg br-4 " />
        </Row>
        <Row justify={"center"}>
          <Col span={22}>
            <Table
              summary={() => (
                <Table.Summary fixed={"bottom"}>
                  <Table.Summary.Row>
                    <Table.Summary.Cell colSpan={24}>
                      <div className="fjc">
                        <Button size="large" icon={<PlusCircleOutlined />} />
                      </div>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </Table.Summary>
              )}
            >
              <Table.Column title="#"></Table.Column>
              {attributes &&
                attributes.map((item) => {
                  return <Table.Column title={item.name}></Table.Column>;
                })}
            </Table>
          </Col>
          <Col span={24}>
            <div className="bc-green br-4 p-16 m-16">
              <List
                itemLayout="horizontal"
                header={<Title level={5}>Bình luận (1226)</Title>}
                dataSource={dataList}
                pagination={{ pageSize: 5, align: "center" }}
                footer={
                  <div className="bs-input p-16">
                    <TextArea
                      className="textArea-no-border"
                      placeholder={"Viết bình luận của bạn ..."}
                      allowClear
                      count={{
                        show: true,
                        max: 1000,
                      }}
                      maxLength={1000}
                      autoSize={{ minRows: 4, maxRows: 8 }}
                    />
                    <Row justify={"space-between"} className="mt-32">
                      <Space>
                        <Popover
                          content={<EmojiPicker open={emojiOpen} />}
                          title="Title"
                          trigger="click"
                          open={emojiOpen}
                          onOpenChange={setEmojiOpen}
                        >
                          <span
                            className="buttonGrayIcon fac"
                            onClick={() => setEmojiOpen(true)}
                          >
                            <EmojiEmotions />
                          </span>
                        </Popover>
                        <span className="buttonGrayIcon fac">
                          <CameraAlt />
                        </span>
                        <span className="buttonGrayIcon fac">
                          <AddLink />
                        </span>
                      </Space>
                      <span className="buttonGrayIcon fac">
                        <Send />
                      </span>
                    </Row>
                  </div>
                }
                renderItem={(item, index) => (
                  <List.Item className="buttonGrayTranset">
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          src={`https://api.dicebear.com/7.x/miniavs/svg?seed=1`}
                        />
                      }
                      title={<span>{item.title}</span>}
                      description={<div>{item.question}</div>}
                    />
                  </List.Item>
                )}
              />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ListData;
