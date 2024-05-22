import React from "react";
import { Col, Row } from "antd";
import CommunityLeft from "./CommunityLeft";
import CommunityRight from "./CommunityRight";
import CommunityCenter from "./CommunityCenter";
const Community = () => {
  return (
    <Row justify={"center"}>
      <Col span={4} className="h-100vh_m_66 bce-green" id="scroll-hover">
        <CommunityLeft />
      </Col>
      <Col span={14}>
        <CommunityCenter />
      </Col>
      <Col span={6} className="h-100vh_m_66 bcs-green ovfy_scr">
        <CommunityRight />
      </Col>
    </Row>
  );
};

export default Community;
