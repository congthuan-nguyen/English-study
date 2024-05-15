import { Col, Popover, Row, Space, Tooltip, Typography } from "antd";
import React, { useEffect, useState } from "react";
import {
  CameraAlt,
  EmojiEmotions,
  FlutterDash,
  Send,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import EmojiPicker from "emoji-picker-react";
const { Text } = Typography;

const WriteComment = () => {
  const [previewImage, setPreviewImage] = useState("");
  const navigate = useNavigate();

  const [comment, setcomment] = useState("");
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [render, setRender] = useState("");

  const [dataList, setDataList] = useState([
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
  ]);

  function upload(event) {
    if (event.target.files?.length > 0) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  function addComment() {
    var copy = [...dataList];
    copy.push({
      title: "Account name",
      question: comment,
    });
    setDataList(copy);
    setcomment("");
    setRender(Math.random);
  }
  return (
    <div className="bs-input p-16">
      <TextArea
        className="textArea-no-border"
        placeholder={"Viết bình luận của bạn ..."}
        allowClear
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addComment();
          }
        }}
        count={{
          show: true,
          max: 1000,
        }}
        value={comment}
        onChange={(e) => {
          setcomment(e.target.value.trim());
        }}
        maxLength={1000}
        autoSize={{ minRows: 4, maxRows: 8 }}
      />
      <Row justify={"space-between"} className="mt-32">
        <Col span={24}>
          <input
            type="file"
            accept="image/*"
            name="image"
            id="file"
            multiple={false}
            onChange={(e) => {
              upload(e);
            }}
            style={{ display: "none" }}
          />
        </Col>
        <Space>
          <Popover
            content={
              <EmojiPicker
                onEmojiClick={(e) => {
                  setcomment((prevComment) => prevComment + e.emoji);
                }}
                open={emojiOpen}
              />
            }
            title="Title"
            trigger="click"
            open={emojiOpen}
            onOpenChange={setEmojiOpen}
          >
            <Tooltip placement="top" title="Bình luận bằng emoji">
              <span
                className="buttonGrayIcon fac"
                onClick={() => setEmojiOpen(true)}
              >
                <EmojiEmotions />
              </span>
            </Tooltip>
          </Popover>
          <Tooltip placement="top" title="Chèn ảnh vào bình luận">
            <label htmlFor="file" className="buttonGrayIcon fac">
              <CameraAlt />
            </label>
          </Tooltip>

          <Tooltip placement="top" title="Chèn nhãn dán vào bình luận">
            <span className="buttonGrayIcon fac">
              <FlutterDash />
            </span>
          </Tooltip>
        </Space>
        <span
          className="buttonGrayIcon fac"
          onClick={() => {
            addComment();
          }}
        >
          <Send />
        </span>
      </Row>
    </div>
  );
};

export default WriteComment;
