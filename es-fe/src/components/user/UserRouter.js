import React from "react";
import { Row, Col } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import Header from "../../page/user/Header";
import Research from "./research/Research";
import MyNote from "./my-note/MyNote";
import Community from "./community/Community";
import CreateList from "./my-note/CreateList";
import ListData from "./my-note/ListData";

const UserRouter = () => {
  return (
    <Row>
      <Col span={24}>
        <Header />
      </Col>
      <Col span={24} className="mt-48">
        <Routes>
          <Route index element={<Research />} />
          <Route path="my-note">
            <Route index element={<MyNote />} />
            <Route path="create-list/id" element={<CreateList />} />
            <Route path="list-store/data/id" element={<ListData />} />
          </Route>
          <Route path="/community" element={<Community />} />
        </Routes>
      </Col>
    </Row>
  );
};

export default UserRouter;
