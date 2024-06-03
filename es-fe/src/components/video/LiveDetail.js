import React from "react";
import styles from "./video.module.css";
import { Avatar, Col, Row, Space } from "antd";
import { ArrowRight, Close } from "@mui/icons-material";
import WriteComment from "../user/comment/WriteComment";
import CommentLive from "../user/comment/CommentLive";
import Title from "antd/es/typography/Title";

const LiveDetail = (props) => {
  return (
    <Row
      className={`${styles.LiveDetail} ${props.openLiveDetail ? "" : "d-none"}`}
      justify={"center"}
    >
      <Col span={14} className={`${styles.streaming} bg-wh`}>
        <span
          className={`${styles.closeButton} buttonGrayIcon`}
          onClick={() => {
            props.setOpenLiveDetail(false);
          }}
        >
          <Close />
        </span>
        <div className={styles.liveStreaming}></div>
        <div className={styles.comments}>
          <Title level={5} style={{ marginLeft: "20px", color: "white" }}>
            Bình luận (12232)
          </Title>
          <div className="fac" style={{ height: "calc(100% - 24px)" }}>
            <span className="buttonGrayIcon" style={{ color: "white" }}>
              <ArrowRight />
            </span>
            <div className={styles.commentsUser}>
              <CommentLive />
              <CommentLive />
              <CommentLive />
              <CommentLive />
              <CommentLive />
            </div>
          </div>
        </div>
        <div className={styles.commentLive}>
          <WriteComment />
        </div>
      </Col>
    </Row>
  );
};

export default LiveDetail;
