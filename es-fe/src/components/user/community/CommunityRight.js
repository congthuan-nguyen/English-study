import { ArrowRight, Duo, OnlinePrediction } from "@mui/icons-material";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";
import styles from "./Community.module.css";
import Live from "../../video/Live";
import LiveDetail from "../../video/LiveDetail";
import { Row } from "antd";
import { Link } from "react-router-dom";

const CommunityRight = () => {
  const [openLiveDetail, setOpenLiveDetail] = useState(false);
  return (
    <div className="pse-32 ">
      <LiveDetail
        openLiveDetail={openLiveDetail}
        setOpenLiveDetail={setOpenLiveDetail}
      />
      <Row justify={"space-between"} align={"middle"}>
        <Title level={3} color="red" className="fac">
          Trực tiếp <Duo className="ms-8" />
        </Title>
        <Link to="" className="fac">
          Xem tất cả <ArrowRight />
        </Link>
      </Row>
      <div className={styles.lives}>
        <Live setOpenLiveDetail={setOpenLiveDetail} />
        <Live />
        <Live />
        <Live />
        <Live />
      </div>
    </div>
  );
};

export default CommunityRight;
