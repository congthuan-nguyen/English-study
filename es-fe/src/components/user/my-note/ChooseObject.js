import { Avatar, Checkbox, Input, Modal, Space } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import Search from "../search/Search";

const ChooseObject = (props) => {
  const [accounts, setAccounts] = useState([]);
  function getAllAccountDisplayDNP(name) {
    axios
      .get("http://localhost:8080/api/es-study/account/getAllAccountDisplayDNP")
      .then((res) => {
        setAccounts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getAllAccountDisplayDNP();
  }, []);

  return (
    <Modal
      open={props.openChooseObject}
      onCancel={() => {
        props.onCancel();
      }}
      onOk={() => {
        props.onOk();
      }}
      title={"Chọn đối tượng thêm vào danh sách"}
      footer={null}
    >
      <div>
        <Input variant="borderless" placeholder="Search" />
      </div>
      {accounts &&
        accounts.map((item) => {
          return (
            <div className="bcb-green buttonGrayTranset p-8">
              <Space key={item.username}>
                <Checkbox />
                <Avatar
                  size={48}
                  src={"data:image/jpeg;base64,/" + item.photo}
                  icon={<UserOutlined />}
                />
                <div>
                  <Title level={5} className="m-0">
                    {item.username}
                  </Title>
                  <p className="m-0">{item.lastName + " " + item.firstName}</p>
                </div>
              </Space>
            </div>
          );
        })}
    </Modal>
  );
};

export default ChooseObject;
