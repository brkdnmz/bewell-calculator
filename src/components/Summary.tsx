import React, { useContext } from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import { AppContext } from "./App";
import PriceTag from "./PriceTag";

function Summary() {
  const { lang } = useContext(AppContext);
  const { choices, urunById } = useContext(AppContext);

  const sortedChoiceIds = Object.keys(choices);
  const fiyat = (id: string) => urunById[id].fiyat * choices[id];
  sortedChoiceIds.sort((a, b) => fiyat(a) - fiyat(b));

  let toplamFiyat = 0;
  for (const id of sortedChoiceIds) {
    toplamFiyat += choices[id] * urunById[id].fiyat;
  }

  return (
    <ListGroup style={{ minHeight: "200px" }}>
      <ListGroup.Item
        variant="secondary"
        className="text-center fst-italic fw-bold"
      >
        {lang === "tur" ? "Seçilen Ürünler" : "Chosen Items"}
      </ListGroup.Item>
      {
        Object.keys(choices).length === 0 && (
          <ListGroup.Item className="fst-italic">
            {lang === "tur"
              ? "Henüz bir seçim yapmadınız."
              : "You have not chosen any item yet."
            }
          </ListGroup.Item >
        )}
      {
        sortedChoiceIds.map((id) => (
          <ListGroup.Item key={id}>
            <Row>
              <Col s="12">
                <Row className="fw-bold">
                  <Col>
                    {lang === "tur" || !urunById[id].isimEn
                      ? urunById[id].isim
                      : urunById[id].isimEn}
                  </Col>
                </Row>
                <Row className="fst-italic">
                  <Col>
                    ({lang === "tur" ? choices[id] + " adet" : "x" + choices[id]})
                  </Col>
                </Row>
              </Col >
              <Col xs="3" className="text-end">
                <PriceTag price={urunById[id].fiyat * choices[id]} />
              </Col >
            </Row >
          </ListGroup.Item >
        ))}
      {
        Object.keys(choices).length > 0 && (
          <ListGroup.Item variant="warning">
            <Row>
              <Col className="text-end">
                <span className="d-inline fst-italic text-end pe-3">
                  {lang === "tur" ? "Toplam:" : "Total:"}
                </span>
                <PriceTag price={toplamFiyat} />
              </Col >
            </Row >
          </ListGroup.Item >
        )}
    </ListGroup >
  );
}

export default Summary;
