import React from "react";
import styles from "./Community.module.css";
import { Link } from "react-router-dom";
import { Explore, History, Person, Person3 } from "@mui/icons-material";
import Title from "antd/es/typography/Title";
import { Avatar, List } from "antd";
import { UsergroupAddOutlined } from "@ant-design/icons";

const ComunityLeft = () => {
  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];
  return (
    <>
      <div className="p-16 m-16 bcb-green">
        <ul className={styles.ulMenu}>
          <li className={styles.menu}>
            <Link className={`${styles.btnMenu}`} to={""}>
              <div className="fac">
                <Explore /> <span className="ms-8">Phổ biến nhất</span>
              </div>
            </Link>
          </li>
          <li className={styles.menu}>
            <Link className={`${styles.btnMenu}`} to={""}>
              <div className="fac">
                <History /> <span className="ms-8">Lịch sử tương tác</span>
              </div>
            </Link>
          </li>
          <li className={styles.menu}>
            <Link className={`${styles.btnMenu}`} to={""}>
              <div className="fac">
                <Person /> <span className="ms-8">Bài đăng của tôi</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="m-16">
        <Title level={5}>Nhóm của bạn</Title>
        <div>
          <List
            itemLayout="vertical"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                    />
                  }
                  title={<a href="https://ant.design">{item.title}</a>}
                  description={
                    <div>
                      <span className="fac">
                        <Person3 /> 123
                      </span>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default ComunityLeft;
