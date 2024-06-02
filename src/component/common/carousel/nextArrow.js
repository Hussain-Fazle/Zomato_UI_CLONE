import React from "react";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        
        borderRadius: "50%",
        border: "5px" ,
        display: "flex",
        // background: "black",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px",
      }}
      onClick={onClick}
    >
        </div>
  );
};

export default NextArrow;
