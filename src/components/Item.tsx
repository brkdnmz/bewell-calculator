import React, {ChangeEvent, useContext} from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {AppContext} from "../App";
import PriceTag from "./PriceTag";
import InfoBox from "./InfoBox";
import {Urun} from "../@types/urun";
import AppContextType from "../@types/appContext";
import Choices from "../@types/choices";

type ItemProps = {
    urun: Urun;
};

function Item({urun}: ItemProps) {
  const { setChoices } = useContext(AppContext) as AppContextType;
  const onSelect = (e: ChangeEvent) => {
    setChoices((prevChoices: Choices) => {
      const target = e.target as HTMLSelectElement;
      const newCount = parseInt(target.value);
      const newChoices = {
        ...prevChoices,
        [urun.id]: newCount,
      };
      if (newCount === 0) {
        delete newChoices[urun.id];
      }
      return newChoices;
    });
  };
  return (
    <Container className={"ps-2 pe-2"}>
      <Row
        className={"justify-content-center align-items-center"}
        style={{ minHeight: "50px" }}
      >
          <Col
            s={12}
            className={"text-start d-flex align-items-center"}
          >
            <Container className={"p-0"}>
              <Row className={"fw-bold"}>
                {urun["isim"] || "Placeholder"}
              </Row>
              <Row className={"text-secondary fst-italic"}>
                  {urun["ayrinti"]}
              </Row>
              <Row>
                <PriceTag price={urun["fiyat"]} />
              </Row>
              <InfoBox
                tiklamaYazisi={urun.tiklamaYazisi}
                bilgi={urun.bilgi}
              />
            </Container>
          </Col>
          <Col s={"auto"} className={"col-auto d-flex align-items-center"}>
            <select
              className="form-select text-secondary"
              onChange={onSelect}
            >
              <option value={0}>Seçiniz (0)</option>
              {Array.from(Array(urun["enFazla"] || 0).keys()).map((count) => (
                <option key={count + 1} value={count + 1}>
                  {count + 1}
                </option>
              ))}
            </select>
          </Col>
      </Row>
    </Container>
  );
}

export default Item;
