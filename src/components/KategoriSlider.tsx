import React, { useContext, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AppContext } from "./App";

type KategoriSliderProps = {
  kategoriElems: JSX.Element[];
};

function KategoriSlider({ kategoriElems }: KategoriSliderProps) {
  const { displayDirection } = useContext(AppContext);
  const [index, setIndex] = useState(0);
  const goNext = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };
  const goPrev = () => {
    setIndex((prevIndex) => prevIndex - 1);
  };
  return (
    <Row className="gy-3">
      {displayDirection === "horizontal" && (
        <Col>
          {React.cloneElement(
            kategoriElems[index],
            {
              withLeftArrow: index > 0,
              withRightArrow: index + 1 < kategoriElems.length,
              onLeftArrowClick: goPrev,
              onRightArrowClick: goNext,
            },
            kategoriElems[index].props.children
          )}
        </Col>
      )}
      {displayDirection === "vertical" &&
        kategoriElems.map((elem, i) => (
          <Col key={i} xs="12">
            {elem}
          </Col>
        ))}
    </Row>
  );
}

export default KategoriSlider;
