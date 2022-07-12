import React from "react";
import Col from "react-bootstrap/Col";

function CenteringCol(props: any) {
  return (
    <Col
      {...props} //props.children will also be passed
      className="d-flex justify-content-center align-items-center"
    />
  );
}

export default CenteringCol;
