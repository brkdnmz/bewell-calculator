import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AppContext } from "../App";
import PriceTag from "./PriceTag";

function Item(props) {
  const { setChoices } = useContext(AppContext);
  const onSelect = (e) => {
    setChoices((prevChoices) => {
      const tedavi = props.tedavi?.id;
      const newCount = parseInt(e.target.value);
      const newChoices = {
        ...prevChoices,
        [tedavi]: newCount,
      };
      if (newCount === 0) {
        delete newChoices[tedavi];
      }
      return newChoices;
    });
  };
  return (
    <Row
      className={"justify-content-center align-items-center"}
      style={{ minHeight: "50px" }}
    >
      <Row>
        <Col s={8} className={"text-start d-flex align-items-center"}>
          <Container className={"p-0"}>
            <Row>{props.tedavi?.isim || "Placeholder"}</Row>
            <Row>
              <PriceTag price={props.tedavi?.fiyat} />
            </Row>
          </Container>
        </Col>
        <Col s={"auto"} className={"col-auto d-flex align-items-center"}>
          <select
            className="form-select text-secondary"
            onChange={onSelect}
          >
            <option value={0}>Seçiniz (0)</option>
            {[...Array(props.tedavi?.enFazla || 0).keys()].map((count) => (
              <option key={count + 1} value={count + 1}>
                {count + 1}
              </option>
            ))}
          </select>
        </Col>
      </Row>
    </Row>
  );
}

export default Item;
