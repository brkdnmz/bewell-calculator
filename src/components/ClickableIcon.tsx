import React from "react";

function ClickableIcon(props: any) {
  return (
    <div
      ref={props.itemRef}
      className={props.className}
      onClick={() => props.onClick?.()}
      style={{
        ...props.style,
        cursor: "pointer",
        display: "flex",
        pointerEvents: props.disabled ? "none" : "auto",
        userSelect: "none",
      }}
    >
      {props.children}
    </div>
  );
}

export default ClickableIcon;
