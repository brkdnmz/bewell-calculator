import React, { ChangeEvent, useContext } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { AppContext } from "../App";
import PriceTag from "../util/PriceTag";
import ItemInfoBox from "./ItemInfoBox";
import { ItemType } from "../../@types/item";
import Choices from "../../@types/choices";
import CenteringCol from "../util/CenteringCol";

interface ItemProps {
  item: ItemType;
}

function Item({ item }: ItemProps) {
  const { lang } = useContext(AppContext);
  const { choices, setChoices } = useContext(AppContext);

  const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const target = e.target;
    const newCount = parseInt(target.value);

    setChoices((prevChoices: Choices) => {
      const newChoices = {
        ...prevChoices,
        [item.id]: newCount,
      };
      if (newCount === 0) {
        delete newChoices[item.id];
      }
      return newChoices;
    });
  };

  const name = lang === "tur" || !item.nameEn ? item.name : item.nameEn;
  const detail = lang === "tur" || !item.detailEn ? item.detail : item.detailEn;

  return (
    <Row className="justify-content-center align-items-center gy-2">
      <Col className="text-start">
        <Row className="fw-bold">
          <Col>{name}</Col>
        </Row>
        <Row className="text-secondary fst-italic">
          <Col>{detail}</Col>
        </Row>
        <Row>
          <Col>
            <PriceTag price={item.price} />
          </Col>
        </Row>
        <ItemInfoBox item={item} />
      </Col>
      <CenteringCol md="auto">
        <select
          className="form-select text-secondary w-auto"
          onChange={(e) => onSelect(e)}
          value={choices[item.id] || 0}
        >
          <option value={0}>{lang === "tur" ? "Seçiniz" : "Choose"} (0)</option>
          {Array.from(Array(item.atMost || 0).keys()).map((count) => (
            <option key={count + 1} value={count + 1}>
              {count + 1}
            </option>
          ))}
        </select>
      </CenteringCol>
    </Row>
  );
}

export default Item;
