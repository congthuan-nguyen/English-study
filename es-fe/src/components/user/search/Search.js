import React, { useState } from "react";
import styles from "./Search.module.css";
import { Col, Input, Row } from "antd";
import { Close, SearchRounded } from "@mui/icons-material";
import Title from "antd/es/typography/Title";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Search = () => {
  const [search, setSearch] = useState(true);
  return (
    <div className={`${styles.search} m-16`}>
      {search ? (
        <Row className="p-16" align={"middle"}>
          <Col span={23}>
            <Input
              prefix={<SearchOutlinedIcon />}
              className="input-no-border"
            />
          </Col>
          <Col span={1}>
            <Row justify={"center"} align={"middle"}>
              <span
                onClick={() => {
                  setSearch(false);
                }}
              >
                <Close />
              </span>
            </Row>
          </Col>
        </Row>
      ) : (
        <Row
          className="p-16"
          align={"middle"}
          justify={"center"}
          onClick={() => setSearch(true)}
        >
          <SearchRounded />
          <Title level={5} className="fac me-32" style={{ marginBottom: 0 }}>
            Tìm kiếm các nhóm học mà bạn muốn tham gia!!
          </Title>
        </Row>
      )}
    </div>
  );
};

export default Search;
