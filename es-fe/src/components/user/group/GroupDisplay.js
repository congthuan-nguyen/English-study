import { AccessTime, Person } from "@mui/icons-material";
import { Avatar, Space, Typography } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
const { Text } = Typography;
const GroupDisplay = (props) => {
  return (
    <div className={props.className}>
      <div className="fjc buttonGrayTranset p-16">
        <Space>
          <Avatar size={64} shape="square" />
          <div>
            <Title level={5} className="m-0">
              Tên của nhóm
            </Title>
            <div>
              <Text type="secondary">
                Mô tả của nhóm bao gồm tối đa 200 chữ và tối thiểu 50 chữ
              </Text>
            </div>
            <Text type="secondary">
              <Space direction="horizontal">
                <div className="fac">
                  <Person /> <span>123</span>
                </div>
                <div className="fac">
                  <AccessTime /> Truy cập 20 phút trước
                </div>
              </Space>
            </Text>
          </div>
        </Space>
      </div>
    </div>
  );
};

export default GroupDisplay;
