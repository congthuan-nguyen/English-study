import { CloseOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { PlayCircleFilledOutlined } from "@mui/icons-material";
import {
  Button,
  Col,
  Input,
  Modal,
  Popconfirm,
  Row,
  Select,
  Table,
  notification,
} from "antd";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const InitializationAttribute = (props) => {
  const [attributes, setAttributes] = useState([
    {
      id: "1",
      name: "example 1",
      type: "1",
      width: 120,
    },
    {
      id: "2",
      name: "example 2",
      type: "2",
      width: 120,
    },
  ]);
  const [dataExample, setDataExample] = useState([
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
  ]);

  const [attribute, setAttribute] = useState({
    id: "",
    name: "",
    type: "1",
  });

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
      attributeCopy.width = 120;
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
                  <Col span={24} key={item.id} className="mtb-8">
                    <Row>
                      <Col span={18}>
                        <div className="me-8">
                          <span>Tên thuộc tính</span>
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
                        <span>Kiểu thuộc tính</span>
                        <Select
                          value={item.type}
                          onChange={(e) => {
                            updateAttribute(index, "type", e);
                          }}
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
                    dataIndex={item.id}
                    title={item.name}
                    render={(e) => returnDataTypee(item.type, e)}
                  ></Table.Column>
                );
              })}
          </Table>
          <div className="mtb-8 fjc">
            <Button onClick={() => {}}>Hoàn thành</Button>
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default InitializationAttribute;
