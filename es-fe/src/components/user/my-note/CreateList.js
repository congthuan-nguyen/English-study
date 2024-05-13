import { ArrowBack, NoteAddOutlined } from "@mui/icons-material";
import { Avatar, Button, Col, Input, Radio, Row, Space, Tooltip } from "antd";
import TextArea from "antd/es/input/TextArea";
import Title from "antd/es/typography/Title";
import React, { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const CreateList = () => {
  const [previewImage, setPreviewImage] = useState("");
  const navigate = useNavigate();

  function upload(event) {
    setPreviewImage(URL.createObjectURL(event.target.files[0]));
  }

  useEffect(() => {}, [previewImage]);
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
          <Input placeholder="Input for list name" />
        </div>

        <div className="mtb-8">
          <Title level={5}>Mô tả</Title>
          <TextArea rows={4} placeholder="Input for description" allowClear />
        </div>
        <div className="mtb-8">
          <Title level={5}>Đối tượng chia sẻ</Title>
          <Radio.Group onChange={() => {}} defaultValue={2}>
            <Space direction="vertical">
              <Radio value={1}>Riêng tư</Radio>
              <Radio value={2}>Công khai</Radio>
              <Radio value={3}>Bạn bè và ngoại trừ</Radio>
            </Space>
          </Radio.Group>
        </div>
        <div className="mtb-8">
          <Title level={5}>Quyền chỉnh sửa</Title>
          <Radio.Group onChange={() => {}} defaultValue={2}>
            <Space direction="vertical">
              <Radio value={3}>Riêng tư</Radio>
              <Radio value={2}>Chọn đối tượng</Radio>
              <Radio value={1}>Tất cả</Radio>
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
