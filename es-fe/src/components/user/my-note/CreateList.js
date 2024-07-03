import { ArrowBack, NoteAddOutlined } from "@mui/icons-material";
import { Avatar, Button, Col, Input, Radio, Row, Space, Tooltip } from "antd";
import TextArea from "antd/es/input/TextArea";
import Title from "antd/es/typography/Title";
import React, { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CreateList = () => {
  const [previewImage, setPreviewImage] = useState("");
  const navigate = useNavigate();
  const [topic, setTopic] = useState({
    id: null,
    name: "",
    description: "",
    photo: null,
    objectAccessId: null,
    objectAccessAccountsId: null,
    objectEditId: null,
    objectEditAccountsId: null,
  });
  const [objectAccessDatas, setObjectAccessDatas] = useState([]);
  const [objectEditDatas, setObjectEditDatas] = useState([]);

  function updateAttributeTopic(name, value) {
    setTopic((prevTopic) => ({
      ...prevTopic,
      [name]: value,
    }));
  }

  function upload(event) {
    setPreviewImage(URL.createObjectURL(event.target.files[0]));
  }

  function getObjectEditDatas() {
    axios
      .get("http://localhost:8080/api/es-study/objectEdit")
      .then((res) => {
        setObjectEditDatas(res.data);
        updateAttributeTopic("objectEditId", res.data[0]?.id);
      })
      .catch((err) => {});
  }

  function getObjectAccessDatas() {
    axios
      .get("http://localhost:8080/api/es-study/objectAccess")
      .then((res) => {
        setObjectAccessDatas(res.data);
        updateAttributeTopic("objectAccessId", res.data[0]?.id);
      })
      .catch((err) => {});
  }

  useEffect(() => {
    getObjectEditDatas();
    getObjectAccessDatas();
  }, []);
  return (
    <Row justify={"center"} align={"middle"} className="bg-gg h-100vh_m_66">
      <Col span={12} className="m-32 bg-wh p-32 bs-glittle bc-green">
        <Title level={4} className="fac">
          <NoteAddOutlined />
          Thêm mới danh sách
        </Title>
        <div className="fjc">
          <input
            type="file"
            accept="image/*"
            name="image"
            id="file"
            onChange={(e) => {
              upload(e);
            }}
            style={{ display: "none" }}
          />
          <Tooltip title="Click for upload image" placement="right">
            <label htmlFor="file">
              <Avatar
                src={previewImage}
                shape="square"
                size={120}
                icon={<UploadOutlined size={120} />}
              />
              <Title level={5} className="fjc">
                Ảnh bìa
              </Title>
            </label>
          </Tooltip>
        </div>
        <div className="mtb-8">
          <Title level={5}>Tên danh sách</Title>
          <Input
            value={topic.name}
            onChange={(e) => {
              updateAttributeTopic("name", e.target.value);
            }}
            placeholder="Input for list name"
          />
        </div>

        <div className="mtb-8">
          <Title level={5}>Mô tả</Title>
          <TextArea
            value={topic.description}
            onChange={(e) => {
              updateAttributeTopic("description", e.target.value);
            }}
            rows={4}
            placeholder="Input for description"
            allowClear
          />
        </div>
        <div className="mtb-8">
          <Title level={5}>Đối tượng chia sẻ</Title>
          <Radio.Group
            value={topic.objectAccessId}
            onChange={(e) => {
              updateAttributeTopic("objectAccessId", e.target.value);
            }}
          >
            <Space direction="vertical">
              {objectAccessDatas &&
                objectAccessDatas.map((item) => {
                  return (
                    <Radio key={item.id} value={item.id}>
                      {item.name}
                    </Radio>
                  );
                })}
            </Space>
          </Radio.Group>
        </div>
        <div className="mtb-8">
          <Title level={5}>Quyền chỉnh sửa</Title>
          <Radio.Group
            value={topic.objectEditId}
            onChange={(e) => {
              updateAttributeTopic("objectEditId", e.target.value);
            }}
          >
            <Space direction="vertical">
              {objectEditDatas &&
                objectEditDatas.map((item) => {
                  return (
                    <Radio key={item.id} value={item.id}>
                      {item.name}
                    </Radio>
                  );
                })}
            </Space>
          </Radio.Group>
        </div>
        <div className="mtb-8 fjc">
          <Button
            onClick={() => {
              navigate("/my-note/list-store/data/id");
            }}
          >
            Hoàn thành
          </Button>
        </div>
        <Link to={"/my-note"}>
          <ArrowBack />
        </Link>
      </Col>
    </Row>
  );
};

export default CreateList;
