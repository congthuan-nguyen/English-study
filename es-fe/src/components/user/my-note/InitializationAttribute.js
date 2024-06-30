import { CloseOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { PlayCircleFilledOutlined } from "@mui/icons-material";
import {
  AutoComplete,
  Button,
  Col,
  Input,
  Modal,
  Popconfirm,
  Row,
  Select,
  Table,
  Tag,
  notification,
} from "antd";
import Title from "antd/es/typography/Title";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import lodash from "lodash";
const InitializationAttribute = (props) => {
  const [attributes, setAttributes] = useState([
    {
      id: "",
      name: "Thuộc tính 1",
      attributeTypeId: "1",
      width: 120,
      noteBookId: props.tabCurrent?.id,
      copyFrom: null,
    },
    {
      id: "",
      name: "Thuộc tính 2",
      attributeTypeId: "2",
      width: 120,
      noteBookId: props.tabCurrent?.id,
      copyFrom: null,
    },
  ]);
  const [relatedAttributes, setRelatedAttributes] = useState([]);
  const dataExample = [
    {
      0: 1,
      1: generateUniqueId(),
      2: generateUniqueId(),
      3: generateUniqueId(),
      4: generateUniqueId(),
      5: generateUniqueId(),
      6: generateUniqueId(),
      7: generateUniqueId(),
      8: generateUniqueId(),
      9: generateUniqueId(),
      10: generateUniqueId(),
    },
  ];

  const attribute = {
    id: "",
    name: "",
    attributeTypeId: "1",
    width: 120,
    noteBookId: props.tabCurrent?.id,
    copyFrom: null,
  };

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

  function returnDataTypee(type, data) {
    if (type === "1") {
      return <span>{data}</span>;
    } else if (type === "2") {
      return <Link to={""}>{data}</Link>;
    } else {
      return (
        <div style={{ textAlign: "Center" }}>
          <PlayCircleFilledOutlined />
        </div>
      );
    }
  }

  function InitializationAttributes() {
    axios
      .post(
        "http://localhost:8080/api/es-study/notebook_attribute/initializationNoteBookAttribute",
        attributes
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function findAttributeByName(name) {
    axios
      .get(
        "http://localhost:8080/api/es-study/attribute/findByName?name=" +
          name +
          "&username=cthun"
      )
      .then((res) => {
        setRelatedAttributes(res.data.object);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const debouncedSearch = useCallback(
    lodash.debounce((text) => {
      findAttributeByName(text);
    }, 500),
    []
  );

  useEffect(() => {
    setAttributes((attributes) =>
      attributes.map((element) => {
        element.noteBookId = props.tabCurrent?.id;
        return element;
      })
    );
  }, [props.tabCurrent?.id]);
  return (
    <Modal
      open={props.openModalInitialization}
      onCancel={() => props.setOpenModalInitialization(false)}
      centered
      footer={null}
      width={1000}
      style={{ overflow: "hidden" }}
      title={
        "Khởi tạo thuộc tính cho danh sách lưu trữ " + props.tabCurrent?.name
      }
    >
      <Title level={5}>Bảng thuộc tính</Title>
      <Row>
        <Col span={24} className=" mh-5ip">
          <Row>
            {attributes &&
              attributes.map((item, index) => {
                return (
                  <Col span={24} key={index} className="mtb-8">
                    <Row>
                      <Col span={18}>
                        <div className="me-8">
                          <span>
                            Tên thuộc tính{" "}
                            <Tag color="green">
                              {item.copyFrom === null ? "Tạo mới" : "Sao chép"}
                            </Tag>
                          </span>
                          <AutoComplete
                            // options={relatedAttributes}
                            style={{
                              width: "100%",
                            }}
                            className="mt-8"
                            value={item.name}
                            onSelect={(e) => {
                              updateAttribute(
                                index,
                                "name",
                                relatedAttributes[e].name
                              );
                              updateAttribute(
                                index,
                                "id",
                                relatedAttributes[e].id
                              );
                              updateAttribute(
                                index,
                                "copyFrom",
                                relatedAttributes[e].notebookId
                              );
                            }}
                            onSearch={(text) => debouncedSearch(text)}
                            onChange={(e) => {
                              updateAttribute(index, "name", e);
                            }}
                            placeholder="Nhập tên thuộc tính"
                          >
                            {relatedAttributes &&
                              relatedAttributes.map((item, index) => {
                                return (
                                  <Select.Option key={item.id} value={index}>
                                    <div className="fjb">
                                      {item.name}
                                      <Tag>
                                        sao chép từ sổ tay {item.notebookName}
                                      </Tag>
                                    </div>
                                  </Select.Option>
                                );
                              })}
                          </AutoComplete>
                        </div>
                      </Col>
                      <Col span={5}>
                        <span>Kiểu thuộc tính</span>
                        <Select
                          value={item.attributeTypeId}
                          onChange={(e) => {
                            updateAttribute(index, "attributeTypeId", e);
                          }}
                          className="mt-8"
                          style={{ width: "100%" }}
                        >
                          {props.types &&
                            props.types.map((type) => {
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
          <Title level={5}>Mẫu dữ liệu</Title>
          <Table
            dataSource={dataExample}
            virtual
            scroll={{
              x: 2000,
              y: 400,
            }}
            bordered
          >
            <Table.Column title="#" dataIndex={0}></Table.Column>
            {attributes &&
              attributes.map((item, index) => {
                return (
                  <Table.Column
                    dataIndex={index + 1}
                    title={item.name}
                    render={(e) => returnDataTypee(item.attributeTypeId, e)}
                  ></Table.Column>
                );
              })}
          </Table>
          <div className="mtb-8 fjc">
            <Button
              onClick={() => {
                InitializationAttributes();
              }}
            >
              Hoàn thành
            </Button>
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default InitializationAttribute;
