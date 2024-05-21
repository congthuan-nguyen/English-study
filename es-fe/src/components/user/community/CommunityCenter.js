import React from "react";
import styles from "./Community.module.css";
import { Avatar, Row } from "antd";
import Title from "antd/es/typography/Title";
import { CameraAlt, Face, Link, PostAddOutlined } from "@mui/icons-material";
import Posts from "../post/Posts";

const CommunityCenter = () => {
  return (
    <div className={`bg-gg h-100vh_m_66 ${styles.parPostBlog}`}>
      <div className={`${styles.postBlog} mt20se32`}>
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
      <div className={styles.posts}>
        <div className={styles.post}>
          <Posts />
        </div>
        <div className={styles.post}>
          <Posts />
        </div>
        <div className={styles.post}>
          <Posts />
        </div>
        <div className={styles.post}>
          <Posts />
        </div>
      </div>
    </div>
  );
};

export default CommunityCenter;
