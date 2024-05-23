import React from "react";
import styles from "./Community.module.css";
import { Link } from "react-router-dom";
import {
  Explore,
  Groups,
  History,
  LocalOffer,
  Person,
  Person3,
} from "@mui/icons-material";
import Title from "antd/es/typography/Title";
import { Avatar, List } from "antd";

const CommunityLeft = () => {
  const data = [
    {
      title: "Ant Design Title 1 Ant Design Title 1 Ant Design Title 1",
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
  const dataTags = [
    {
      title: "sports",
    },
    {
      title: "question",
    },
    {
      title: "reply",
    },
    {
      title: "grammas",
    },
  ];
  return (
    <>
      <div className="p-16 m-16 bcb-green">
        <ul className={"ulMenu"}>
          <li className={"menu"}>
            <Link className={"btnMenu"} to={""}>
              <div className="fac">
                <Explore /> <span className="ms-8">Phổ biến nhất</span>
              </div>
            </Link>
          </li>
          <li className={"menu"}>
            <Link className={"btnMenu"} to={""}>
              <div className="fac">
                <History /> <span className="ms-8">Lịch sử tương tác</span>
              </div>
            </Link>
          </li>
          <li className={"menu"}>
            <Link className={"btnMenu"} to={""}>
              <div className="fac">
                <Person /> <span className="ms-8">Bài đăng của tôi</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="m-16  bcb-green">
        <Title level={5} className="fac">
          Nhãn phổ biến <LocalOffer className="ms-8" />
        </Title>
        <div>
          <List
            itemLayout="vertical"
            id="scroll-hover"
            dataSource={dataTags}
            style={{ maxHeight: "50vh" }}
            renderItem={(item, index) => (
              <List.Item className="buttonGrayTranset">
                <div className=" pse-8">
                  <span>#{item.title}</span>
                </div>
              </List.Item>
            )}
          />
        </div>
      </div>
      <div className="m-16  bcb-green">
        <Title level={5} className="fac">
          Nhóm của bạn <Groups className="ms-8" />
        </Title>
        <div>
          <List
            itemLayout="vertical"
            id="scroll-hover"
            dataSource={data}
            style={{ maxHeight: "50vh" }}
            renderItem={(item, index) => (
              <List.Item className="buttonGrayTranset">
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                    />
                  }
                  description={
                    <div>
                      <span>{item.title}</span>
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

export default CommunityLeft;
