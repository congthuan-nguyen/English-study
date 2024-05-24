import { FormatListBulleted } from "@mui/icons-material";
import { Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import GroupDisplay from "./GroupDisplay";
import Search from "../search/Search";

const GroupCenter = () => {
  return (
    <div>
      <div className="p-16">
        <Title level={4} className="fac ms-8">
          <span className="me-8">Tất cả nhóm học</span> <FormatListBulleted />
        </Title>
        <div>
          <Search />
        </div>
        <Row>
          {[1, 2, 3, 4, 5, 6].map((item) => {
            return (
              <Col span={6}>
                <div className="bg-wh m-8">
                  <GroupDisplay className="bc-green br-4" />
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default GroupCenter;
