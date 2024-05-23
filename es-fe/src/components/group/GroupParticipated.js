import { AccessTime, Groups, Person } from "@mui/icons-material";
import { Avatar, Space, Typography } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import styles from "./Group.module.css";
const { Text } = Typography;
const GroupParticipated = () => {
  return (
    <div>
      <Title level={4} className="fac">
        Nhóm của bạn <Groups className="ms-8" />
      </Title>
      <div className={styles.GroupParticipated} id="scroll-hover">
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
};

export default GroupParticipated;
