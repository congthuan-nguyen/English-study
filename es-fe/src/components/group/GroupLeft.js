import { Explore, History, Person } from "@mui/icons-material";
import Title from "antd/es/typography/Title";
import React from "react";
import { Link } from "react-router-dom";
import GroupParticipated from "./GroupParticipated";

const GroupLeft = () => {
  return (
    <div className="bg-wh h-100vh_m_66 bce-green" id="scroll-hover">
      <div className="p-16 m-16 bcb-green">
        <ul className={"ulMenu"}>
          <li className={"menu"}>
            <Link className={"btnMenu"} to={""}>
              <div className="fac">
                <Explore /> <span className="ms-8">Phổ biến nhất</span>
              </div>
            </Link>
          </li>
          <li className={"menu"}>
            <Link className={"btnMenu"} to={""}>
              <div className="fac">
                <History /> <span className="ms-8">Đã yêu cầu</span>
              </div>
            </Link>
          </li>
          {/* <li className={"menu"}>
            <Link className={"btnMenu"} to={""}></Link>
          </li> */}
        </ul>
      </div>
      <div className="pse-16 bcb-green">
        <GroupParticipated />
      </div>
    </div>
  );
};

export default GroupLeft;
