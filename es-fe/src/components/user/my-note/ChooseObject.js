import { Avatar, Checkbox, Input, Modal, Space } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import Search from "../search/Search";

const ChooseObject = (props) => {
  const [accounts, setAccounts] = useState([]);
  const [checkAll, setCheckAll] = useState(false);
  // plainOptions.length === checkedList.length;
  const [indeterminate, setIndeterminatee] = useState(false);
  // checkedList.length > 0 && checkedList.length < plainOptions.length;
  function getAllAccountDisplayDNP(name) {
    axios
      .get("http://localhost:8080/api/es-study/account/getAllAccountDisplayDNP")
      .then((res) => {
        setAccounts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getAllAccountDisplayDNP();
  }, []);

  useEffect(() => {
    console.log(1);
  }, [props.openChooseObject, props.render]);

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
      <Checkbox
      // indeterminate={indeterminate}
      // onChange={onCheckAllChange}
      // checked={checkAll}
      >
        Chọn tất cả
      </Checkbox>
      <Checkbox.Group
        onChange={(e) => {
          props.setArgsObject(props.nameObject, e);
          props.setRender(Math.random());
        }}
        value={props.argsObject}
        style={{ width: "100%" }}
      >
        {accounts &&
          accounts.map((item) => {
            return (
              <div
                className="bcb-green buttonGrayTranset p-8"
                style={{ width: "100%" }}
              >
                <Checkbox key={item.username} value={item.username}>
                  <Space key={item.username}>
                    <Avatar
                      size={48}
                      src={"data:image/jpeg;base64,/" + item.photo}
                      icon={<UserOutlined />}
                    />
                    <div>
                      <Title level={5} className="m-0">
                        {item.username}
                      </Title>
                      <p className="m-0">
                        {item.lastName + " " + item.firstName}
                      </p>
                    </div>
                  </Space>
                </Checkbox>
              </div>
            );
          })}
      </Checkbox.Group>
    </Modal>
  );
};

export default ChooseObject;
