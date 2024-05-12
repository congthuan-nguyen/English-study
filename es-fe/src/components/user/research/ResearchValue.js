import React, { useEffect } from "react";
import ShareIcon from "@mui/icons-material/Share";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ChatIcon from "@mui/icons-material/Chat";
import ReportIcon from "@mui/icons-material/Report";
import Groups3Icon from "@mui/icons-material/Groups3";
import EditNoteIcon from "@mui/icons-material/EditNote";
import {
  AccessAlarm,
  DeleteSweepOutlined,
  DrawOutlined,
  PlayCircleFilledOutlined,
} from "@mui/icons-material";
import { EyeOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Avatar, Col, List, Row, Skeleton, Tabs, Typography } from "antd";
import styles from "./Research.module.css";
import TextArea from "antd/es/input/TextArea";
import ValueResearch from "./ValueResearch";
import axios from "axios";

const ResearchValue = (props) => {
  const { Title } = Typography;
  const dataList = [
    {
      title: "Amelia Bennett",
      question: `Trong câu sau, từ ngữ "which" được sử dụng như thế nào: "The book which I borrowed from the library is very interesting."`,
    },
    {
      title: "Ethan Carter",
      question: `Hãy giải thích sự khác biệt giữa "much" và "many" khi sử dụng trong câu.`,
    },
    {
      title: "Olivia Hayes",
      question: `Sử dụng thì đúng của động từ trong câu sau: "She (to study) all night for the exam tomorrow."`,
    },
    {
      title: "William Foster",
      question: `Hãy viết lại câu sau bằng cách sử dụng giới từ "for": "I will be in London next week."`,
    },
  ];

  const dataListGroup = [
    {
      title: "TOEIC TRAINING GROUP",
      slogan: `Training toeic 900+`,
    },
    {
      title: "Target Ielts",
      slogan: `Ielts không khó`,
    },
  ];

  useEffect(() => {
    // const encodedParams = new URLSearchParams();
    // encodedParams.set("q", "Em không là nàng thơ");
    // encodedParams.set("source", "vi");
    // encodedParams.set("language", "vi");
    // encodedParams.set("target", "en");
    // var settings = {
    //   async: true,
    //   crossDomain: true,
    //   url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
    //   method: "POST",
    //   headers: {
    //     "x-rapidapi-host": "google-translate1.p.rapidapi.com",
    //     "x-rapidapi-key": "23d2873be7mshe3c923a8852cff2p175a5ajsn5f83560a5d93",
    //     "content-type": "application/x-www-form-urlencoded",
    //   },
    //   data: {
    //     source: "en",
    //     q: "Contact Form | Name | Contact Number | Email",
    //     target: "",
    //   },
    // };
    // try {
    //   const response = axios.request(settings).then((response) => {
    //     console.log(response?.data?.translations[0]);
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
    console.log(props.valueSearch);
  }, [props.render]);

  return (
    <Row className="m-20" justify={"center"}>
      <Col span={24}>
        {!props.search ? (
          <Row>
            <Col span={12}>
              <div
                className={`m-16 p-16 bg-wh ${styles.borderRecmm} bc-green bs-glittle hiden`}
              >
                <Title level={4} className="fac">
                  <ShareIcon /> Cộng đồng chia sẻ
                </Title>
                <List
                  itemLayout="horizontal"
                  dataSource={dataList}
                  renderItem={(item, index) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <Avatar
                            src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
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
                <div className="fjc">
                  <Link to={""} className="fac">
                    Xem cộng đồng <ChevronRightIcon />
                  </Link>
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div
                className={`m-16 p-16 bg-wh ${styles.borderRecmm} bc-green bs-glittle hiden`}
              >
                <Title level={4} className="fac">
                  <Groups3Icon /> Nhóm học đa dạng
                </Title>
                <List
                  itemLayout="horizontal"
                  dataSource={dataListGroup}
                  renderItem={(item, index) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar icon={<Groups3Icon />} />}
                        title={<span>{item.title}</span>}
                        description={
                          <div>
                            {item.slogan}
                            <div className="fac">
                              <span className="fac me-8">
                                <Groups3Icon />{" "}
                              </span>{" "}
                              200
                            </div>
                          </div>
                        }
                      />
                    </List.Item>
                  )}
                />
                <div className="fjc">
                  <Link to={""} className="fac">
                    Xem nhóm học <ChevronRightIcon />
                  </Link>
                </div>
              </div>
              <div
                className={`m-16 p-16 bg-wh ${styles.borderRecmm} bc-green bs-glittle hiden`}
              >
                <Title level={4} className="fac">
                  <EditNoteIcon /> Sổ tay tiện dụng
                </Title>
                <div className="fac">
                  <span className="fac me-8">
                    <AccessAlarm />
                  </span>{" "}
                  Nhắc nhở
                  <span className="fac me-8 ms-16">
                    <PlayCircleFilledOutlined />{" "}
                  </span>{" "}
                  Video học tập
                  <span className="fac me-8 ms-16">
                    <DrawOutlined />{" "}
                  </span>{" "}
                  Ghi nhớ
                </div>
                <Tabs
                  defaultActiveKey="1"
                  items={[
                    {
                      label: "Từ vựng",
                      key: "1",
                      children: (
                        <List
                          itemLayout="horizontal"
                          dataSource={[
                            {
                              title: "Chủ đề thể thao",
                              quantity: 50,
                            },
                            {
                              title: "Chủ đề kinh doanh",
                              quantity: 40,
                            },
                          ]}
                          renderItem={(item, index) => (
                            <List.Item>
                              <List.Item.Meta
                                title={<span>{item.title}</span>}
                                description={
                                  <div>
                                    Số từ: {item.quantity}
                                    <div className="fac">
                                      <span className="fac me-8">
                                        <EyeOutlined />{" "}
                                      </span>
                                      <span className="fac me-8">
                                        <PlusCircleOutlined />{" "}
                                      </span>
                                      <span className="fac me-8">
                                        <DeleteSweepOutlined />{" "}
                                      </span>
                                    </div>
                                  </div>
                                }
                              />
                            </List.Item>
                          )}
                        />
                      ),
                    },
                    {
                      label: "Ngữ pháp",
                      key: "2",
                      children: (
                        <List
                          itemLayout="horizontal"
                          dataSource={[
                            {
                              title: "12 thì cơ bản",
                              description:
                                "Hiện tại đơn, quá khứ đơn, tương lai đơn, ...",
                            },
                            {
                              title: "Các loại từ",
                              description:
                                "Danh từ, động từ, tính từ, trạng từ, ...",
                            },
                          ]}
                          renderItem={(item, index) => (
                            <List.Item>
                              <List.Item.Meta
                                title={<span>{item.title}</span>}
                                description={
                                  <div>
                                    {item.description}
                                    <div className="fac">
                                      <span className="fac me-8">
                                        <EyeOutlined />{" "}
                                      </span>
                                      <span className="fac me-8">
                                        <PlusCircleOutlined />{" "}
                                      </span>
                                      <span className="fac me-8">
                                        <DeleteSweepOutlined />{" "}
                                      </span>
                                    </div>
                                  </div>
                                }
                              />
                            </List.Item>
                          )}
                        />
                      ),
                    },
                  ]}
                />
                <div className="fjc">
                  <Link to={""} className="fac">
                    Mở sổ tay <ChevronRightIcon />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          <Row
            className={`${styles.containerResearch} ${styles.borderRecmm} bc-green bs-glittle p-32 containerResearch show`}
          >
            <Col span={24}>
              <Row className="faj contentResearch">
                <Col span={12} className="p-16">
                  <Skeleton loading={props.loadingResearch} active>
                    <Title level={5}>Vietnamese</Title>
                    <TextArea
                      value={"Vietnamese"}
                      placeholder="Controlled autosize"
                      autoSize={{
                        minRows: 3,
                        maxRows: 5,
                      }}
                    />
                  </Skeleton>
                </Col>
                <Col span={12} className="p-16">
                  <Skeleton loading={props.loadingResearch} active>
                    <Title level={5}>English</Title>
                    <TextArea
                      value={props.vocabularySearch}
                      placeholder="Controlled autosize"
                      autoSize={{
                        minRows: 3,
                        maxRows: 5,
                      }}
                    />
                  </Skeleton>
                </Col>
                <Col span={24}>
                  <ValueResearch
                    vocabularySearch={props.vocabularySearch}
                    valueSearch={props.valueSearch}
                    render={props.render}
                    loadingResearch={props.loadingResearch}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        )}
      </Col>
    </Row>
  );
};

export default ResearchValue;
