import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Space,
  Button,
  Badge,
  Tooltip,
  Dropdown,
  Avatar,
} from "antd";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Header = () => {
  const [currentDomain, setCurrentDomain] = useState("");
  const [render, setRender] = useState("");

  useEffect(() => {
    // Lấy tên miền hiện tại khi component được render
    const domain = window.location.href;
    setCurrentDomain(domain);
  }, [render]);
  const items = [
    {
      label: (
        <div className={styles.submenu}>
          <Avatar size={40} icon={<Person4OutlinedIcon />} />
          <span className="ms-16">Chào mừng quay trở lại</span>
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div className={`fac`}>
          <MailOutlineOutlinedIcon /> <span className="ms-16">Tin nhắn</span>
        </div>
      ),
      key: "message",
    },
    {
      label: (
        <div className={`fac`}>
          <SendOutlinedIcon /> <span className="ms-16">Đóng góp, ý kiến</span>
        </div>
      ),
      key: "support",
    },
    {
      label: (
        <div className={`${styles.submenu} fac`}>
          <SettingsOutlinedIcon /> <span className="ms-16">Cài đặt</span>
        </div>
      ),
      key: "setting",
    },
    {
      label: (
        <div className="fajc">
          <LoginOutlinedIcon /> <span className="ms-16">Đăng nhập</span>
        </div>
      ),
      key: "2",
    },
  ];
  return (
    <Row className={`${styles.headerUser} lh-64`} justify={"center"}>
      <Col span={16}>
        <Row>
          <Col span={4} className="fac">
            LOGO
          </Col>
          <Col span={20}>
            <Row justify={"end"}>
              <ul className={styles.header}>
                <li>
                  <Link
                    onClick={() => {
                      setRender(Math.random());
                    }}
                    className={`${
                      currentDomain === "http://localhost:3000/"
                        ? "buttonGreenActive"
                        : "buttonGreen"
                    } `}
                    to={""}
                  >
                    Tra cứu
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      setRender(Math.random());
                    }}
                    className={`${
                      currentDomain.includes("my-note")
                        ? "buttonGreenActive"
                        : "buttonGreen"
                    } `}
                    to={"/my-note"}
                  >
                    Sổ của tôi
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      setRender(Math.random());
                    }}
                    className={`${
                      currentDomain.includes("community")
                        ? "buttonGreenActive"
                        : "buttonGreen"
                    } `}
                    to={"/community"}
                  >
                    Cộng đồng
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      setRender(Math.random());
                    }}
                    className={`${
                      currentDomain.includes("group")
                        ? "buttonGreenActive"
                        : "buttonGreen"
                    } `}
                    to={"/group"}
                  >
                    Nhóm học
                  </Link>
                </li>
              </ul>
              <div className="ms-16">
                <div className="fajc">
                  <div className={`${styles.headerIcon} mse-4 fajc `}>
                    <SearchOutlinedIcon />
                  </div>
                  <div className={`${styles.headerIcon} mse-4 fajc `}>
                    <Badge color="green" count={1} size="small">
                      <NotificationsNoneOutlinedIcon />
                    </Badge>
                  </div>
                  <div className={`${styles.headerIcon} mse-4 fajc `}>
                    <Dropdown
                      menu={{ items }}
                      trigger={["click"]}
                      placement="bottom"
                      arrow={{
                        pointAtCenter: true,
                      }}
                    >
                      <AccountCircleSharpIcon
                        onClick={(e) => e.preventDefault()}
                      />
                    </Dropdown>
                  </div>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Header;
