import React from "react";

const Image = (props) => {
  return (
    <>
      <img
        alt=""
        src={props.src}
        style={{
          maxHeight: props?.maxHeight,
          maxWidth: props?.maxWidth,
          minHeight: props?.minHeight,
          minWidth: props?.minWidth,
        }}
      />
    </>
  );
};

export default Image;
