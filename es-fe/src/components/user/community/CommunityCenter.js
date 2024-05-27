import React from "react";
import styles from "./Community.module.css";
import Posts from "../post/Posts";
import PostNew from "../post/PostNew";

const CommunityCenter = () => {
  return (
    <div className={`bg-gg h-100vh_m_66 ${styles.parPostBlog}`}>
      <div className={`${styles.postBlog} mt20se32`}>
        <PostNew />
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
