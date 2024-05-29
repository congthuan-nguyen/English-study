import React, { useState } from "react";
import styles from "./Post.module.css";
import { Avatar, Col, Divider, Input, Popover, Row, Space } from "antd";
import Title from "antd/es/typography/Title";
import {
  CameraAlt,
  Close,
  EmojiEmotions,
  FlutterDash,
  Send,
} from "@mui/icons-material";
import TextArea from "antd/es/input/TextArea";
import EmojiPicker from "emoji-picker-react";

const PostUpload = (props) => {
  const [emojiOpen, setEmojiOpen] = useState(false);

  return (
    <Row className={`${styles.PostDetail}`} justify={"center"} align={"middle"}>
      <Col
        span={10}
        className={`bg-wh p-16 br-4 bc-green`}
        style={{ maxHeight: "75%", height: "fit-content" }}
      >
        <div className={`${styles.postDetailHeader} mb-16`}>
          <Space>
            <Avatar size={48} />
            <Title level={4} style={{ margin: 0 }}>
              Account name
            </Title>
          </Space>
          <span className="buttonGrayIcon" onClick={() => {}}>
            <Close />
          </span>
        </div>
        <div className="mse-32">
          <div>
            <Input
              size="large"
              className="title-input input-no-border"
              placeholder="Chủ đề của bài viết này là gì?"
            ></Input>
          </div>
          <Divider />
          <div className="mt-16">
            <TextArea
              className="textArea-no-border"
              placeholder={"Viết nội dung bài viết ở dây ..."}
              allowClear
              onKeyDown={(e) => {}}
              count={{
                show: true,
                max: 1000,
              }}
              maxLength={1000}
              autoSize={{ minRows: 10, maxRows: 20 }}
            />
            <Row justify={"space-between"} className="mt-32">
              <Space>
                <Popover
                  zIndex={9999999}
                  content={
                    <EmojiPicker onEmojiClick={(e) => {}} open={emojiOpen} />
                  }
                  placement="bottomLeft"
                  title="Emojis"
                  trigger="click"
                  open={emojiOpen}
                  onOpenChange={setEmojiOpen}
                >
                  <span
                    className="buttonGrayIcon"
                    onClick={() => setEmojiOpen(true)}
                    title="emoji"
                  >
                    <EmojiEmotions />
                  </span>
                </Popover>
                <label
                  htmlFor="file"
                  title="Chèn hình ảnh"
                  className="buttonGrayIcon"
                >
                  <CameraAlt />
                </label>

                <span title="Chèn nhãn dán" className="buttonGrayIcon">
                  <FlutterDash />
                </span>
              </Space>
            </Row>
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
