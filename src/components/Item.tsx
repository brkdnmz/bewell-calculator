import React, { ChangeEvent, useContext } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { AppContext } from "./App";
import PriceTag from "./PriceTag";
import UrunBilgiKutusu from "./UrunBilgiKutusu";
import { Urun } from "../@types/urun";
import Choices from "../@types/choices";
import CenteringCol from "./CenteringCol";

type ItemProps = {
  urun: Urun;
};

function Item({ urun }: ItemProps) {
  const { lang } = useContext(AppContext);
  const { choices, setChoices } = useContext(AppContext);
  const onSelect = (e: ChangeEvent) => {
    const target = e.target as HTMLSelectElement;
    const newCount = parseInt(target.value);
    setChoices((prevChoices: Choices) => {
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

  const isim = lang === "tur" || !urun.isimEn ? urun.isim : urun.isimEn;
  const ayrinti =
    lang === "tur" || !urun.ayrintiEn ? urun.ayrinti : urun.ayrintiEn;

  return (
    <Row className="justify-content-center align-items-center gy-2">
      <Col className="text-start">
        <Row className="fw-bold">
          <Col>{isim}</Col>
        </Row>
        <Row className="text-secondary fst-italic">
          <Col>{ayrinti}</Col>
        </Row>
        <Row>
          <Col>
            <PriceTag price={urun.fiyat} />
          </Col>
        </Row>
        <UrunBilgiKutusu urun={urun} />
      </Col>
      <CenteringCol md="auto">
        <select
          className="form-select text-secondary w-auto"
          onChange={onSelect}
          value={choices[urun.id] || 0}
        >
          <option value={0}>{lang === "tur" ? "Seçiniz" : "Choose"} (0)</option>
          {Array.from(Array(urun.enFazla || 0).keys()).map((count) => (
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
