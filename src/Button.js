import React from "react";
import { useButton } from "@react-aria/button";

export default function Button(props) {
  let ref = React.useRef();
  let { buttonProps } = useButton(props, ref);

  return (
    <button {...buttonProps} ref={ref} style={props.style}>
      {props.children}
    </button>
  );
}