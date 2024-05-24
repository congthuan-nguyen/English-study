import { AccessTime, Groups, Person } from "@mui/icons-material";
import { Avatar, Space, Typography } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import styles from "./Group.module.css";
import GroupDisplay from "./GroupDisplay";
const { Text } = Typography;
const GroupParticipated = () => {
  return (
    <div>
      <Title level={4} className="fac">
        Nhóm của bạn <Groups className="ms-8" />
      </Title>
      <div className={styles.GroupParticipated} id="scroll-hover">
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return <GroupDisplay />;
        })}
      </div>
    </div>
  );
};

export default GroupParticipated;
