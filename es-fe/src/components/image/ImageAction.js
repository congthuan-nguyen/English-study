import React, { useEffect, useState } from "react";
import styles from "./image.module.css";
import { Row, Space } from "antd";
import {
  Download,
  ZoomIn,
  ZoomInMap,
  ZoomOut,
  ZoomOutMap,
} from "@mui/icons-material";

const ImageAction = (props) => {
  const imgId = props.imgId;
  const [scale, setScale] = useState(1);

  useEffect(() => {
    document.getElementById(imgId).style.transform = `scale(${scale})`;
  }, [imgId, scale]);

  return (
    <Row
      className={`${styles.imageAction}`}
      justify={"space-between"}
      align={"middle"}
    >
      <Space size={16}>
        <span
          className={`${scale < 1.7 ? styles.btnAction : ""} fac ${
            scale < 1.7 ? "" : styles.cantAction
          }`}
          onClick={() => {
            scale < 1.7 ? setScale((scale) => scale + 0.2) : console.log("");
          }}
        >
          <ZoomIn />
        </span>
        <span
          className={`${scale > 1 ? styles.btnAction : ""} fac ${
            scale > 1 ? "" : styles.cantAction
          }`}
          onClick={() => {
            scale > 1 ? setScale((scale) => scale - 0.2) : console.log("");
          }}
        >
          <ZoomOut />
        </span>
        <span className={`${styles.btnAction} fac`} onClick={() => {}}>
          <Download />
        </span>
        <span
          className={`${styles.btnAction} fac`}
          onClick={() => {
            scale > 1 ? setScale(1) : setScale(1.4);
            scale > 1 ? props.fullScreen(false) : props.fullScreen(true);
          }}
        >
          {scale > 1 ? <ZoomInMap /> : <ZoomOutMap />}
        </span>
      </Space>
    </Row>
  );
};

export default ImageAction;
