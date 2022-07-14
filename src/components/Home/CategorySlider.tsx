import React, {useContext, useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {AppContext} from "../App";

interface CategorySliderProps {
  categoryElems: JSX.Element[];
}

function CategorySlider({categoryElems}: CategorySliderProps) {
  const {displayDirection} = useContext(AppContext);
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
            categoryElems[index],
            {
              withLeftArrow: index > 0,
              withRightArrow: index + 1 < categoryElems.length,
              onLeftArrowClick: goPrev,
              onRightArrowClick: goNext,
            },
            categoryElems[index].props.children
          )}
        </Col>
      )}
      {displayDirection === "vertical" &&
        categoryElems.map((elem, i) => (
          <Col key={i} xs="12">
            {elem}
          </Col>
        ))}
    </Row>
  );
}

export default CategorySlider;
