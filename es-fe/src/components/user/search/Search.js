import React from "react";
import styles from "./Search.module.css";
import { Col, Row } from "antd";
import { SearchRounded } from "@mui/icons-material";
import Title from "antd/es/typography/Title";

const Search = () => {
  return (
    <div className={`${styles.search} m-16`}>
      <Row className="p-16" justify={"center"} align={"middle"}>
        <SearchRounded />
        <Title level={5} className="fac me-32" style={{ marginBottom: 0 }}>
          Tìm kiếm các nhóm học mà bạn muốn tham gia!!
        </Title>
      </Row>
    </div>
  );
};

export default Search;
