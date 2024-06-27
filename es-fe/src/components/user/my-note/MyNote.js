import {
  BookOutlined,
  CloseOutlined,
  DeleteFilled,
  LoadingOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import {
  AccessAlarm,
  AudioFile,
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
  Tabs,
  notification,
  Result,
  Spin,
  Avatar,
} from "antd";
import TabPane from "antd/es/tabs/TabPane";
import Title from "antd/es/typography/Title";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InitializationAttribute from "./InitializationAttribute";

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
  const [types, setTypes] = useState([]);
  const [functionCurrent, setFunctionCurrent] = useState("alarm");
  const [modalAddListNote, setModalAddList] = useState(false);
  const [openModalInitialization, setOpenModalInitialization] = useState(false);

  const [listStore, setListStore] = useState("");

  function createNoteBook() {
    modal.confirm({
      title: "Thông báo xác nhận!",
      content: "Xác nhận thêm danh sách lưu trữ mới!",
      centered: true,
      cancelText: "Hủy",
      okText: "Xác nhận",
      onOk: () => {
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
            setRender(Math.random());
          })
          .catch((err) => {
            api.error({
              message: "Lỗi",
              description: err?.response?.data?.message,
            });
            console.log(err);
            setLoading(false);
          });
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
        getTopicByNoteBook(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getAllAttributeTypes() {
    axios
      .get("http://localhost:8080/api/es-study/attribute_type/all")
      .then((res) => {
        setTypes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getTopicByNoteBook(notebook) {
    axios
      .get(
        "http://localhost:8080/api/es-study/topic/getListTopicDisplayResponseByNoteBookId?id=" +
          notebook.id
      )
      .then((res) => {
        setCurrent(notebook);
        setListTopic(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getNoteBooks();
    getAllAttributeTypes();
  }, [render]);

  return (
    <Row justify={"center"} className="bg-gg h-100vh_m_66">
      {modalContext}
      {contextHolder}
      <InitializationAttribute
        openModalInitialization={openModalInitialization}
        setOpenModalInitialization={setOpenModalInitialization}
        types={types}
        tabCurrent={tabCurrent}
      />
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
                  getTopicByNoteBook(noteBooks[e]);
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
                              setOpenModalInitialization(true);
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
                      key={index}
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
                                    `/my-note/list-store/${tabCurrent.id}/${item.id}`
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
                                      setOpenModalInitialization(true);
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
