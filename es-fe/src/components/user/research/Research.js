import { HistoryOutlined, LoadingOutlined } from "@ant-design/icons";
import { Button, Col, Row, Spin, Typography } from "antd";
import Search from "antd/es/input/Search";
import React, { useEffect, useState } from "react";
import styles from "./Research.module.css";

import axios from "axios";
import ResearchValue from "./ResearchValue";

const Research = () => {
  const { Title, Text } = Typography;
  const [loadingResearch, setLoadingResearch] = useState(false);
  const [search, setSearch] = useState(false);
  const [vocabularySearch, setVocabularySearch] = useState("");
  const [valueSearch, setValueSearch] = useState([]);
  const [render, setRender] = useState(0);

  //   function
  const researchVocabulary = (value) => {
    setVocabularySearch(value);
    setLoadingResearch(true);
    const zoomIN = window.document.getElementsByClassName("hiden");
    for (let index = 0; index < zoomIN.length; index++) {
      zoomIN[index].classList.add("hidenLift");
    }
    setTimeout(() => {
      setSearch(true);
    }, 1000);

    axios
      .get("https://api.dictionaryapi.dev/api/v2/entries/en/" + value)
      .then((response) => {
        setValueSearch(response.data);
        setRender(Math.random());
        setLoadingResearch(false);
        console.log(response.data);
      })
      .catch((error) => {
        setLoadingResearch(false);
        setRender(Math.random());
        console.log(1);
      });
  };

  useEffect(() => {}, [render]);

  return (
    <>
      <Row justify={"center"}>
        <Col span={12}>
          <Row justify={"end"}>
            <Col span={16}>
              <Row justify={"center"} align={"middle"} className="h-100vh_m_48">
                <Col span={20}>
                  <Title>
                    Tra cứu từ vựng <br /> sử dụng <br />
                    <span className="cl-green">Wiki & Dictionaryapi.dev</span>
                  </Title>
                  <Search
                    placeholder="English or Vietnamese"
                    allowClear
                    enterButton="Tìm kiếm"
                    onSearch={(value) => researchVocabulary(value)}
                    size="large"
                  />
                  <Button
                    className="mt-32 mb-32"
                    type="primary"
                    size="large"
                    icon={<HistoryOutlined />}
                  >
                    Lịch sử tìm kiếm
                  </Button>
                  <br />
                  <Text type="secondary">
                    Luôn nhớ rằng mọi nỗ lực bạn đưa ra đều đáng giá. Dù là một
                    bài học ngắn nhỏ mỗi ngày hay một cuộc thảo luận tiếng Anh
                    cùng bạn bè, mỗi lần bạn tiến lên sẽ mang lại lợi ích cho kỹ
                    năng của bạn.
                  </Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={12} className="bg-gg">
          <ResearchValue
            search={search}
            vocabularySearch={vocabularySearch}
            valueSearch={valueSearch}
            render={render}
            setRender={setRender}
            loadingResearch={loadingResearch}
          />
        </Col>
      </Row>
    </>
  );
};

export default Research;
