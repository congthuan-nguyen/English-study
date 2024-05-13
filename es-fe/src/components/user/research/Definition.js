import { Collapse, Modal, Table } from "antd";
import Title from "antd/es/typography/Title";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Definition = (props) => {
  const [meanings, setMeanings] = useState([]);
  const [modalDetails, setModalDetails] = useState([]);
  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      render: (index) => <p>{index}</p>,
    },
    {
      title: "synonyms",
      dataIndex: "synonyms",
      key: "synonyms",
    },
    {
      title: "antonyms",
      dataIndex: "antonyms",
      key: "antonyms",
    },
  ];
  const changeModalDetail = (index, value) => {
    var modalDetail = [...modalDetails];
    modalDetail[index] = value;
    setModalDetails(modalDetail);
  };
  useEffect(() => {
    setMeanings(props?.definition?.meanings);
  }, [props.definition]);

  return (
    <>
      <Collapse
        accordion
        size="small"
        className="mt-16"
        items={
          meanings &&
          meanings?.map((item, index) => {
            return {
              key: index,
              label: <Title level={5}>{item?.partOfSpeech}</Title>,
              children: (
                <>
                  {item?.definitions &&
                    item?.definitions.map((def, index) => {
                      return <p>Definition: {def.definition}</p>;
                    })}
                  <p className="m-16 fjc">
                    <Modal
                      title="Definition details"
                      centered
                      open={modalDetails[index]}
                      onOk={() => changeModalDetail(index, false)}
                      onCancel={() => changeModalDetail(index, false)}
                      width={1000}
                      footer={null}
                    >
                      <Table columns={columns} dataSource={meanings} />
                    </Modal>
                    <Link
                      to={""}
                      onClick={() => changeModalDetail(index, true)}
                    >
                      Detail
                    </Link>
                  </p>
                </>
              ),
            };
          })
        }
      />
    </>
  );
};

export default Definition;
