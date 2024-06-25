import {
  BookOutlined,
  CloseOutlined,
  DeleteFilled,
  LoadingOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import {
  AccessAlarm,
  Delete,
  DrawOutlined,
  PlayCircleFilledOutlined,
  Reply,
  Visibility,
} from "@mui/icons-material";
import {
  Button,
  Col,
  Input,
  List,
  Modal,
  Row,
  Select,
  Tabs,
  notification,
  Popconfirm,
  Table,
  Result,
  Spin,
  Avatar,
} from "antd";
import TabPane from "antd/es/tabs/TabPane";
import Title from "antd/es/typography/Title";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const MyNote = () => {
  const [render, setRender] = useState(0);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [tabCurrent, setCurrent] = useState(0);
  const [api, contextHolder] = notification.useNotification();
  const [modal, modalContext] = Modal.useModal();
  const [listTopic, setListTopic] = useState([]);
  const [noteBooks, setNoteBooks] = useState([]);

  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: "Từ vựng",
      initialization: true,
      data: [
        {
          id: 1,
          title: "Chủ đề thể thao",
          description: "Các từ mới liên quan đến chủ đề thể thao",
        },
        {
          id: 2,
          title: "Chủ đề kinh doanh",
          description: "Các từ mới liên quan đến chủ đề kinh doanh",
        },
      ],
    },
    {
      id: 2,
      name: "Ngữ pháp",
      initialization: true,

      data: [],
    },
  ]);
  const [functionCurrent, setFunctionCurrent] = useState("alarm");
  const [modalAddListNote, setModalAddList] = useState(false);
  const [modalAddNote, setModalAddNote] = useState(false);
  const [types, setTypes] = useState([
    {
      id: "1",
      name: "text",
    },
    {
      id: "2",
      name: "link",
    },
    {
      id: "3",
      name: "audio",
    },
  ]);
  const [attributes, setAttributes] = useState([
    {
      id: "1",
      name: "example 1",
      type: "1",
    },
    {
      id: "2",
      name: "example 2",
      type: "2",
    },
  ]);

  const [attribute, setAttribute] = useState({
    id: "",
    name: "",

    type: "1",
  });

  const [listStore, setListStore] = useState("");

  function generateUniqueId() {
    const currentTime = Math.floor(Date.now() / 1000);
    const randomPart = Math.floor(Math.random() * 10000);
    const uniqueId = `${currentTime}-${randomPart}`;

    return uniqueId;
  }

  function addAttribute() {
    if (attributes.length >= 10) {
      notification.warning({
        message: <Title level={5}>Cảnh báo</Title>,
        description: "Thêm tối đa 10 thuộc tính",
      });
    } else {
      var attributeCopy = { ...attribute };
      attributeCopy.id = attributes.length + 1;
      attributeCopy.name = "example " + (attributes.length + 1);
      var attributesCopy = [...attributes];
      attributesCopy.push(attributeCopy);
      setAttributes(attributesCopy);
    }
  }

  function updateAttribute(index, name, value) {
    var attributesCopy = [...attributes];
    attributesCopy[index][name] = value;
    setAttributes(attributesCopy);
  }

  function deleteAttribute(index) {
    var attributesCopy = [...attributes];
    attributesCopy.splice(index, 1);
    setAttributes(attributesCopy);
  }

  function initializationAttributes(index) {
    var tabsCoppy = [...tabs];
    tabsCoppy[index].initialization = true;
    setTabs(tabsCoppy);
  }

  function createNoteBook() {
    modal.confirm({
      title: "Thông báo xác nhận!",
      content: "Xác nhận thêm danh sách lưu trữ mới!",
      centered: true,
      cancelText: "Hủy",
      okText: "Xác nhận",
      onOk: () => {
        console.log(listStore);
        setLoading(true);
        axios
          .post("http://localhost:8080/api/es-study/notebook/createNoteBook", {
            id: null,
            name: listStore,
            username: "cthun",
          })
          .then((res) => {
            setLoading(false);
            setSuccess(true);
          })
          .catch((err) => {
            console.log(err);
          });
        setTimeout(() => {}, 2000);
      },
    });
  }

  function getNoteBooks() {
    axios
      .get(
        "http://localhost:8080/api/es-study/notebook/getNoteBooksDisplayResponse?username=cthun"
      )
      .then((res) => {
        setNoteBooks(res.data);
        getTopicByNoteBookId(res.data[0].id);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getTopicByNoteBookId(notebookId) {
    axios
      .get(
        "http://localhost:8080/api/es-study/topic/getListTopicDisplayResponseByNoteBookId?id=" +
          notebookId
      )
      .then((res) => {
        setCurrent(notebookId);
        setListTopic(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getNoteBooks();
  }, []);

  return (
    <Row justify={"center"} className="bg-gg h-100vh_m_66">
      {modalContext}
      {contextHolder}
      <Modal
        open={modalAddNote}
        onCancel={() => setModalAddNote(false)}
        centered
        footer={null}
        width={1000}
        title={
          "Khởi tạo thuộc tính cho danh sách lưu trữ " + tabs[tabCurrent]?.name
        }
      >
        <Title level={5}>Bảng thuộc tính</Title>
        <Row>
          <Col span={24} className=" mh-5ip">
            <Row>
              {attributes &&
                attributes.map((item, index) => {
                  return (
                    <Col span={24} key={item.id} className="mtb-8">
                      <Row>
                        <Col span={18}>
                          <div className="me-8">
                            <Input
                              placeholder="Attribute name"
                              onChange={(e) => {
                                updateAttribute(index, "name", e.target.value);
                              }}
                              value={item.name}
                            />
                          </div>
                        </Col>
                        <Col span={5}>
                          <Select
                            value={item.type}
                            onChange={(e) => {
                              updateAttribute(index, "type", e);
                            }}
                            style={{ width: "100%" }}
                          >
                            {types &&
                              types.map((type) => {
                                return (
                                  <Select.Option key={type.id}>
                                    {type.name}
                                  </Select.Option>
                                );
                              })}
                          </Select>
                        </Col>
                        <Col span={1}>
                          <Popconfirm
                            title="Cảnh báo"
                            description="Xóa thông tin thuôc tính?"
                            placement="right"
                            onConfirm={() => {
                              deleteAttribute(index);
                            }}
                            onOpenChange={() => console.log("open change")}
                          >
                            <div className="fajc">
                              <CloseOutlined
                                onClick={() => {}}
                                className="buttonDanger"
                              />
                            </div>
                          </Popconfirm>
                        </Col>
                      </Row>
                    </Col>
                  );
                })}
            </Row>
          </Col>
          <Col span={24} className="mtb-8 fjc">
            <Link
              to={""}
              className="buttonGreen"
              onClick={() => {
                addAttribute();
              }}
            >
              <PlusCircleOutlined />
            </Link>
          </Col>
          <Col span={24}>
            <Table scroll={{ x: 1000 }}>
              <Table.Column title="#"></Table.Column>
              {attributes &&
                attributes.map((item) => {
                  return <Table.Column title={item.name}></Table.Column>;
                })}
            </Table>
            <div className="mtb-8 fjc">
              <Button
                onClick={() => {
                  initializationAttributes(tabCurrent);
                }}
              >
                Hoàn thành
              </Button>
            </div>
          </Col>
        </Row>
      </Modal>
      <Modal
        open={modalAddListNote}
        onCancel={() => setModalAddList(false)}
        centered
        footer={null}
        title={"Thêm danh sách mới"}
      ></Modal>
      <Col span={20} className="m-32 bg-wh p-32 bs-glittle bc-green">
        <Row>
          <Title level={3}>
            <BookOutlined /> Sổ tay
          </Title>
        </Row>

        <Row justify={"center"} className="m-20">
          <div>
            <div className="fac">
              <Link
                onClick={() => {
                  setFunctionCurrent("alarm");
                }}
                className={`${"buttonGreen"} fac`}
                to={""}
              >
                <AccessAlarm />
                Ưu tiên
              </Link>
              <Link
                onClick={() => {
                  setFunctionCurrent("video");
                }}
                className={`${"buttonGreen"} fac`}
                to={""}
              >
                <PlayCircleFilledOutlined /> Video học tập
              </Link>
              <Link
                onClick={() => {
                  setFunctionCurrent("note");
                }}
                className={`${"buttonGreen"} fac`}
                to={""}
              >
                <DrawOutlined />
                Ghi nhớ
              </Link>
            </div>
          </div>
          <Col span={20}>
            <Tabs
              defaultActiveKey={2}
              onChange={(e) => {
                if (!isNaN(e)) {
                  getTopicByNoteBookId(e);
                }
              }}
            >
              <TabPane
                tab={
                  <div>
                    <PlusCircleOutlined />
                  </div>
                }
                key={"addList"}
              >
                <Row justify={"center"}>
                  {success ? (
                    <Col span={24}>
                      <Result
                        status="success"
                        title="Tạo mới danh sách lưu trữ thành công!"
                        subTitle="Bạn có thể tiếp tục khởi tạo thuộc tính cho danh sách hoặc quay lại để thêm mới danh sách lưu trữ khác."
                        extra={[
                          <Link
                            key="console"
                            onClick={() => {
                              setSuccess(false);
                            }}
                          >
                            Quay lại
                          </Link>,
                          " hoặc ",
                          <Button
                            className="ms-8"
                            key="buy"
                            onClick={() => {
                              setModalAddNote(true);
                            }}
                          >
                            Khởi tạo thuộc tính
                          </Button>,
                        ]}
                      />
                    </Col>
                  ) : (
                    <Col span={12}>
                      <Spin
                        spinning={loading}
                        indicator={<LoadingOutlined style={{ fontSize: 24 }} />}
                      >
                        <Title level={5}>
                          <div className="fjc">Tên sổ tay</div>
                        </Title>
                        <Input
                          placeholder="input your list name"
                          value={listStore}
                          onChange={(e) => setListStore(e.target.value)}
                        />
                        <div className="mtb-8 fjc">
                          <Button
                            onClick={() => {
                              createNoteBook();
                            }}
                          >
                            Thêm mới
                          </Button>
                        </div>
                      </Spin>
                    </Col>
                  )}
                </Row>
              </TabPane>
              {noteBooks &&
                noteBooks.map((tab, index) => {
                  return (
                    <TabPane
                      tab={
                        <>
                          <Link>{tab.name} </Link>
                          <Link className="buttonDanger">
                            <DeleteFilled />
                          </Link>
                        </>
                      }
                      closable={true}
                      key={tab.id}
                    >
                      <div>
                        <Input
                          placeholder="Search your store list"
                          size="large"
                          className="input-no-border"
                        />
                      </div>
                      <List itemLayout="horizontal">
                        {listTopic &&
                          listTopic.map((item, index) => {
                            return (
                              <List.Item
                                className="buttonGrayTranset"
                                onClick={() => {
                                  navigate(
                                    `/my-note/list-store/${tabCurrent}/${item.id}`
                                  );
                                }}
                              >
                                <List.Item.Meta
                                  className="p-16"
                                  avatar={
                                    <Avatar
                                      size={100}
                                      src={
                                        "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
                                      }
                                    />
                                  }
                                  title={<span>{item.name}</span>}
                                  description={
                                    <div>
                                      Mô tả: {item.description}
                                      <div className="fac mtb-16">
                                        <span className="fac me-8">
                                          <Visibility /> {item.view}
                                        </span>
                                        <span className="fac me-8">
                                          <Reply
                                            style={{ transform: "scaleX(-1)" }}
                                          />{" "}
                                          {item.share}
                                        </span>
                                      </div>
                                    </div>
                                  }
                                />
                              </List.Item>
                            );
                          })}
                      </List>
                      <List.Item>
                        <List.Item.Meta
                          description={
                            <div>
                              <div className="fjc">
                                {!tab.initialization ? (
                                  <Link
                                    className={`${"buttonGreenActive"}`}
                                    onClick={() => {
                                      setModalAddNote(true);
                                    }}
                                  >
                                    Khởi tạo thuộc tính
                                  </Link>
                                ) : (
                                  <Link
                                    className={`${"buttonGreen"}`}
                                    style={{ fontSize: "20px" }}
                                    to={"create-list/id"}
                                  >
                                    <PlusCircleOutlined />
                                  </Link>
                                )}
                              </div>
                            </div>
                          }
                        />
                      </List.Item>
                    </TabPane>
                  );
                })}
            </Tabs>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MyNote;
