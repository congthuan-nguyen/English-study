import React from "react";
import { Row, Col } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import Header from "../../page/user/Header";
import Research from "./research/Research";
import MyNote from "./my-note/MyNote";
import Community from "./community/Community";
import CreateList from "./my-note/CreateList";
import ListData from "./my-note/ListData";
import Group from "./group/Group";
import GroupDetail from "./group/GroupDetail";
import LiveList from "../video/LiveList";
import Flow from "../mindmap/Flow";

const UserRouter = () => {
  return (
    <Row>
      <Col span={24}>
        <Header />
      </Col>
      <Col span={24} className="pt-64">
        <Routes>
          <Route index element={<Research />} />
          <Route path="my-note">
            <Route index element={<MyNote />} />
            <Route path="create-list/id" element={<CreateList />} />
            <Route
              path="list-store/:noteBookId/:topicId"
              element={<ListData />}
            />
          </Route>
          <Route path="/community">
            <Route index element={<Community />} />
            <Route path="list-live" element={<LiveList />} />
          </Route>
          <Route path="group">
            <Route index element={<Group />} />
            <Route path="detail/id" element={<GroupDetail />} />
          </Route>
          <Route path="/mind-map" element={<Flow />}></Route>
        </Routes>
      </Col>
    </Row>
  );
};

export default UserRouter;
