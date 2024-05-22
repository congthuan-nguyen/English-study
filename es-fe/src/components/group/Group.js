import { Col, Row } from "antd";
import React from "react";
import GroupLeft from "./GroupLeft";

const Group = () => {
  return (
    <Row className="bg-gg h-100vh_m_66">
      <Col span={4}>
        <GroupLeft />
      </Col>
      <Col span={20}></Col>
    </Row>
  );
};

export default Group;
