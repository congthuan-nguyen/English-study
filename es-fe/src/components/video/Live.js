import { OnlinePrediction } from "@mui/icons-material";
import Title from "antd/es/typography/Title";
import React from "react";
import styles from "./video.module.css";

const Live = (props) => {
  return (
    <div
      className={`${styles.pp} bs-glittle m-16`}
      onClick={() => {
        props.setOpenLiveDetail(true);
      }}
    >
      <img
        alt=""
        className={styles.img}
        src={"https://imsgeneva.ch/wp-content/uploads/2020/04/English-Live.png"}
      />
      <div className={`${styles.paContent}`}>
        <Title level={5} style={{ color: "#FEFDED" }} className="fac">
          Account names{" "}
          <OnlinePrediction className="ms-8" style={{ color: "#EE4E4E" }} />
        </Title>
        <span>Nội dung live của bài</span>
        <span>#English #live #knowledge</span>
      </div>
    </div>
  );
};

export default Live;
