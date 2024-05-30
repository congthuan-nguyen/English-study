import React from "react";
import styles from "./video.module.css";
import { Avatar, Col, Row, Space } from "antd";
import { Close } from "@mui/icons-material";
import WriteComment from "../user/comment/WriteComment";

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
        <div className={styles.comments}></div>
        <div className={styles.commentLive}>
          <WriteComment />
        </div>
      </Col>
    </Row>
  );
};

export default LiveDetail;
