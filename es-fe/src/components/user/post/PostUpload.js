import React, { useState } from "react";
import styles from "./Post.module.css";
import { Avatar, Col, Divider, Input, Popover, Row, Space } from "antd";
import Title from "antd/es/typography/Title";
import { CameraAlt, Close, Send } from "@mui/icons-material";
import Editor from "../../editor/EditorText";
import { CameraFilled } from "@ant-design/icons";

const PostUpload = (props) => {
  return (
    <Row
      className={`${props.openUpload ? styles.PostDetail : "d-none"}`}
      justify={"center"}
      align={"middle"}
    >
      <Col
        span={10}
        className={`bg-wh p-16 br-4 bc-green`}
        style={{ maxHeight: "100%", height: "fit-content" }}
      >
        <div className={`${styles.postDetailHeader} mb-16`}>
          <Space>
            <Avatar size={48} />
            <Title level={4} style={{ margin: 0 }}>
              Account name
            </Title>
          </Space>
          <span
            className="buttonGrayIcon"
            onClick={() => {
              props.setOpenUpload(false);
            }}
          >
            <Close />
          </span>
        </div>
        <div className="mse-32">
          <div className="mt-16">
            <div className={styles.componentPostUpload}>
              <Editor />
              <div className="fjc">
                <Space size={20}>
                  <div>
                    <Avatar icon={<CameraFilled />} size={180} shape="square" />
                  </div>
                  <div>
                    <Avatar icon={<CameraFilled />} size={180} shape="square" />
                  </div>
                  <div>
                    <Avatar icon={<CameraFilled />} size={180} shape="square" />
                  </div>
                </Space>
              </div>
              <div className="mt-32 fjc">
                <label
                  htmlFor="file"
                  title="Chèn hình ảnh"
                  className="buttonGrayIcon"
                >
                  <CameraAlt />
                </label>
              </div>
            </div>
          </div>
          <Divider />
          <Row justify={"end"}>
            <span title="Đăng bài" className="buttonGrayIcon">
              <Send />
            </span>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default PostUpload;
