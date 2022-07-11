import React from "react";
import Col from "react-bootstrap/Col";

function CenteringCol(props: any) {
  return (
    <Col
      {...props}
      className="d-flex justify-content-center align-items-center"
    >
      {/*{props.children}*/}
    </Col>
  );
}

export default CenteringCol;
