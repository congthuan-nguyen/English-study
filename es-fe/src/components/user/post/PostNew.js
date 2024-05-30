import React, { useState } from "react";
import { Avatar, Row } from "antd";
import Title from "antd/es/typography/Title";
import { CameraAlt, Face, Link, PostAddOutlined } from "@mui/icons-material";
import styles from "./Post.module.css";
import PostUpload from "./PostUpload";

const PostNew = (props) => {
  const [openUpload, setOpenUpload] = useState(false);
  return (
    <>
      <PostUpload openUpload={openUpload} setOpenUpload={setOpenUpload} />
      <div
        className={`${styles.postBlog} ${props.className}`}
        onClick={() => {
          setOpenUpload(true);
        }}
      >
        <Row justify={"space-between"} className="p-16" align={"middle"}>
          <Avatar className="me-32" />
          <Title level={5} className="fac me-32" style={{ marginBottom: 0 }}>
            Đăng một bài viết mới để chia sẻ cùng cộng đồng!!
          </Title>
          <div className="fac">
            <span className="fac me-8">
              <PostAddOutlined />
            </span>
            <span className="fac me-8">
              <Link />
            </span>
            <span className="fac me-8">
              <CameraAlt />
            </span>
            <span className="fac me-8">
              <Face />
            </span>
          </div>
        </Row>
      </div>
    </>
  );
};

export default PostNew;
