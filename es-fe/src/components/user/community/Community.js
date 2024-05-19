import { Col, Row } from "antd";
import React from "react";
import ComunityLeft from "./ComunityLeft";
const Community = () => {
  return (
    <Row justify={"center"} className="bg-wh ">
      <Col span={4} className="h-100vh_m_66 bce-green">
        <ComunityLeft />
      </Col>
      <Col span={20}>
        <div className="p-32 "></div>
      </Col>
    </Row>
  );
};

export default Community;
