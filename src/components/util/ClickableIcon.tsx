import React from "react";

function ClickableIcon(props: any) {
  return (
    <span
      ref={props.itemRef}
      className={props.className}
      onClick={() => props.onClick?.()}
      style={{
        ...props.style,
        cursor: "pointer",
        display: "inline-flex",
        pointerEvents: props.disabled ? "none" : "auto",
        userSelect: "none",
      }}
    >
      {props.children}
    </span>
  );
}

export default ClickableIcon;
