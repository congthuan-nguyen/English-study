import React, { useState } from "react";
import styles from "./Search.module.css";
import { Col, Input, Row } from "antd";
import Title from "antd/es/typography/Title";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Search = (props) => {
  return (
    <div className={`${styles.search} ${props.className} m-16`}>
      <Row className="p-16" align={"middle"}>
        <Col span={24}>
          <Input
            placeholder={props.placeholder}
            prefix={<SearchOutlinedIcon />}
            className="input-no-border"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Search;
