import React from "react";
import { useHover } from "@react-aria/interactions";

export default function Header(props) {
  let { hoverProps, isHovered } = useHover({});

  return (
    <div
      {...hoverProps}
      style={{
        background: isHovered ? "#167B73" : "#2D9E96",
        color: "white",
        padding: 4,
        cursor: "pointer",
        display: "block",
      }}
      tabIndex={0}
    >
      <div style={{display:"flex", justifyContent:"space-between", fontSize:"10px"}}>{props.children}</div>
    </div>
  );
}