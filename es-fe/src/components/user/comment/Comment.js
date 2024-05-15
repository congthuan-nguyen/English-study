import { Avatar, Badge, List } from "antd";
import Title from "antd/es/typography/Title";
import React, { useEffect, useState } from "react";
import {
  KeyboardDoubleArrowDown,
  KeyboardDoubleArrowUp,
  PendingOutlined,
  Report,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import WriteComment from "./WriteComment";
import ReplyComment from "./ReplyComment";

const Comment = () => {
  const navigate = useNavigate();

  const [render, setRender] = useState("");
  const [openModalReply, setOpenModalReply] = useState(false);

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

  useEffect(() => {}, [render]);
  return (
    <div className="bc-green br-4 p-16 m-16">
      <ReplyComment
        openModalReply={openModalReply}
        onCancel={() => setOpenModalReply(false)}
      />
      <List
        itemLayout="vertical"
        header={<Title level={5}>Bình luận (1226)</Title>}
        dataSource={dataList}
        pagination={{ pageSize: 5, align: "center", position: "both" }}
        footer={<WriteComment />}
        renderItem={(item, index) => (
          <List.Item
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
            children={<WriteComment />}
            actions={[
              <div className="fac mt-8">
                <span className="fac buttonGrayIcon">
                  <KeyboardDoubleArrowUp />
                </span>
                <span>123</span>
                <span className="fac buttonGrayIcon">
                  <KeyboardDoubleArrowDown />
                </span>
              </div>,
              <span
                className="fac buttonGrayIcon"
                onClick={() => {
                  setOpenModalReply(true);
                }}
              >
                <Badge showZero color="gray" count={2}>
                  <PendingOutlined />
                </Badge>
              </span>,
              <span className="fac buttonGrayIcon">
                <Report />
              </span>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=1`}
                />
              }
              title={<span>{item.title}</span>}
            />
            <div>{item.question}</div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Comment;
