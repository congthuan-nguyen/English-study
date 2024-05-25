import React from "react";
import styles from "./Group.module.css";
import GroupDisplay from "./GroupDisplay";
const GroupParticipated = () => {
  return (
    <div>
      <div className={styles.GroupParticipated} id="scroll-hover">
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return <GroupDisplay />;
        })}
      </div>
    </div>
  );
};

export default GroupParticipated;
