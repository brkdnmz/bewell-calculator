import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CategorySlider from "./CategorySlider";

function Home() {
  return (
    <>
      <Row className="gy-3">
        <Col xs={12}>
          <CategorySlider />
        </Col>
      </Row>
    </>
  );
}

export default Home;
