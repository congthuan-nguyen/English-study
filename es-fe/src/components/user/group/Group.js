import { Col, Row } from "antd";
import React from "react";
import GroupLeft from "./GroupLeft";
import GroupCenter from "./GroupCenter";

const Group = () => {
  return (
    <Row className="bg-gg h-100vh_m_66">
      <Col span={5}>
        <GroupLeft />
      </Col>
      <Col span={19} className="h-100vh_m_66 bce-green ovfy_scr">
        <Row justify={"center"}>
          <Col span={22}>
            <GroupCenter />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Group;
