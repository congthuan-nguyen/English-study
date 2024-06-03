import { Avatar, Row, Space } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import styles from "./Comment.module.css";
import { MoreVert } from "@mui/icons-material";
const CommentLive = () => {
  return (
    <div className={styles.commentLive}>
      <Row>
        <Row justify={"space-between"} style={{ width: "100%" }}>
          <div>
            <Space>
              <Avatar icon={<UserOutlined />} />
              <span>Account Name</span>
            </Space>
          </div>
          <div>
            <MoreVert />
          </div>
        </Row>
        <div>
          comment của người dùng sẽ được hiển thị ở đây comment của người dùng
          sẽ được hiển thị ở đâycomment của người dùng sẽ được hiển thị ở
          đâycomment của người dùng sẽ được hiển thị ở đâycomment của người dùng
          sẽ được hiển thị ở đây
        </div>
      </Row>
    </div>
  );
};

export default CommentLive;
