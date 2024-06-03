import { FormatListBulleted } from "@mui/icons-material";
import { Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import Live from "./Live";
import Search from "../user/search/Search";

const LiveList = () => {
  return (
    <Row justify={"center"} className="bg-gg h-100vh_m_66">
      <Col span={18} className="p-16">
        <div>
          <Title level={4} className="fac ms-8">
            <span className="me-8">Tất cả Live trực tiếp</span>{" "}
            <FormatListBulleted />
          </Title>
        </div>

        <div>
          <Search />
        </div>
        <Row>
          {[1, 2, 3, 4, 5, 6].map((item) => {
            return (
              <Col span={6}>
                <div className=" m-8">
                  <Live className="bc-green br-4" />
                </div>
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
};

export default LiveList;
